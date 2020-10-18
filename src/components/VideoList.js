import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((v) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={v} />;
  });
  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
