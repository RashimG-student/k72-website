// import React from 'react'

// const Video = () => {
//   return (
//     <div className=''>
//   <video autoPlay loop muted src='src\components\home\video.mp4'></video>
//     </div>
//   )
// }

// export default Video


import React from 'react';
import videoSrc from './video.mp4';

const Video = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      />
    </div>
  );
};

export default Video;
