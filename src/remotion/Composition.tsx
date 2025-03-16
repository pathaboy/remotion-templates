"use client";
import YoutubeShortOne from "../techniques/shorts/short-template-one-no-typing";
import "../app/globals.css";
import { AbsoluteFill, Composition } from "remotion";

export const MyComposition = () => {
  return (
    <Composition
      component={YoutubeShortOne}
      height={1920}
      width={1080}
      durationInFrames={600}
      fps={60}
      id="comp-1"
    />
  );
};
