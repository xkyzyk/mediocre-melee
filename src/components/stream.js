import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

const Stream = () => {
  return (
    <div className="containerLive">
      <ReactTwitchEmbedVideo
        theme="dark"
        height="940"
        width="100%"
        channel="admiralbulldog"
      />
    </div>
  );
};

export default Stream;
