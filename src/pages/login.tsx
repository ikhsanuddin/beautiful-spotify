import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import logoSpotify from "@/assets/images/Spotify_Logo_RGB_Green.png"

function LoginPage({
  providers,
}: {
  providers: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#2f2f2f",
        borderRadius: 15,
      }}
      className="flex flex-col items-center justify-center bg-black h-screen"
    >
      <Image
        style={{ marginBottom: 25 }}
        src={logoSpotify}
        height={70}
        alt="Spotify logo"
      />

      {providers &&
        (Object.values(providers) as unknown as ClientSafeProvider[]).map(
          (provider: ClientSafeProvider) => (
            <div key={provider.name}>
              <button
                style={{
                  backgroundColor: "#18d860",
                  padding: 15,
                  paddingLeft: 25,
                  paddingRight: 25,
                  margin: 15,
                  color: "white",
                  fontWeight: 700,
                  outline: "none",
                  border: 0,
                  borderRadius: 50,
                  cursor: "pointer",
                }}
                className="bg-[#18d860] text-white p-5 rounded-full mt-4"
                onClick={() => {
                  // https://developer.spotify.com/dashboard/applications/0e3eff139050415a9635bc8e4394622a
                  // Spotify settings redirect uris: http://localhost:3000/api/auth/callback/spotify
                  signIn(provider.id, { callbackUrl: "/" });
                }}
              >
                Login with {provider.name} account
              </button>
            </div>
          )
        )}
    </div>
  );
}

export default LoginPage;

export async function getServerSideProps() {
  const providers = await getProviders();

  // {
  //   spotify: {
  //     id: 'spotify',
  //     name: 'Spotify',
  //     type: 'oauth',
  //     signinUrl: 'http://localhost:3000/api/auth/signin/spotify',
  //     callbackUrl: 'http://localhost:3000/api/auth/callback/spotify'
  //   }
  // }

  return {
    props: { providers },
  };
}
