import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoItems = videos.map((v) => {
    return <VideoItem video={v} />;
  });
  return <div>{videoItems}</div>;
};

export default VideoList;
