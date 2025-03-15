"use client";
import YoutubeShortOne from "../techniques/shorts/short-template-one";
import "../app/globals.css";
import { AbsoluteFill, Composition } from "remotion";

export const MyComposition = () => {
  return (
    <Composition
      component={YoutubeShortOne}
      height={1280}
      width={720}
      durationInFrames={1200}
      fps={60}
      id="comp-1"
    />
  );
};
