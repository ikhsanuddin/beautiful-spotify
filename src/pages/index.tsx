import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";

import CoreLayout from "@/common/layouts/CoreLayout";
import Discover from "@/routes/Discover/index";

export default function Home() {
  return (
    <CoreLayout>
      <Discover />
    </CoreLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};
