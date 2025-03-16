"use client";
import YoutubeShortOne from "../techniques/shorts/short-template-one-no-typing";
import "../app/globals.css";
import { AbsoluteFill, Composition } from "remotion";
import StopIt from "../techniques/shorts/stop-it";

export const MyComposition = () => {
  return (
    <Composition
      component={StopIt}
      height={1920}
      width={1080}
      durationInFrames={30 * 35}
      fps={30}
      id="comp-1"
    />
  );
};
