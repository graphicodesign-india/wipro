import React from 'react';
import VideoPlayer from 'react-video-js-player';
import styles from './Videoplayer.module.css';
function Videoplayer() {
  return (
    <div>
                <VideoPlayer className={styles.videoplayer}
                    controls={true}
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster={require('../images/thumb-01.jpg')}
                    width="auto"
                    height="auto"
                />
            </div>
  );
};

export default Videoplayer;