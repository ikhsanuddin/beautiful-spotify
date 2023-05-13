import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import  styles from './_player.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player__album}>
        <span />
        <p>Nothing's playing</p>
      </div>
      <div className={styles.player__controls}>
        <FontAwesomeIcon icon={faStepBackward as IconProp} />
        <FontAwesomeIcon icon={faPlayCircle as IconProp} />
        <FontAwesomeIcon icon={faStepForward as IconProp} />
      </div>
      <div className={styles.player__seekbar} />
      <div className={styles.player__actions}>
        <FontAwesomeIcon icon={faEllipsisH as IconProp} />
        <FontAwesomeIcon icon={faHeart as IconProp} />
        <FontAwesomeIcon icon={faRandom as IconProp} />
        <FontAwesomeIcon icon={faRetweet as IconProp} />
        <FontAwesomeIcon icon={faVolumeDown as IconProp} />
      </div>
    </div>
  );
}

export default Player