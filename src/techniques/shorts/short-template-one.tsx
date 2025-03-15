"use client";
import { TransitionSeries } from "@remotion/transitions";
import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  Audio,
  staticFile,
  interpolate,
} from "remotion";
import React from "react";

const YoutubeShortOne = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={20 * 60}>
        <Audio
          src={staticFile("/audio/short-music/sad-melodrama-orchestra.mp3")}
          volume={1}
        />
        <AbsoluteFill
          style={{
            backgroundColor: "black",
          }}
        >
          <TextSection />
          <ImageSection />
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export default YoutubeShortOne;

const TextSection = () => {
  const text =
    "There was a time when someone said your name for the last time, and you’ll never know.";
  const frame = useCurrentFrame();
  const textFade = interpolate(frame, [0, 300], [0.1, 1]);
  return (
    <>
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        playbackRate={3}
        startFrom={0}
        endAt={240}
      />
      <div
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          fontWeight: "500",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "42px",
            textAlign: "center",
            lineHeight: "1.2",
            opacity: textFade,
          }}
        >
          {text}
        </h1>
      </div>
    </>
  );
};

const ImageSection = () => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [60, 360], [1, 0]);
  const scale = interpolate(frame, [0, 500], [2, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        position: "relative",
        overflow: "clip",
      }}
    >
      <Img
        src={staticFile("/images/short-4.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          margin: 0,
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "black",
          opacity: fade,
        }}
      ></div>
      <Img
        src={staticFile("/images/unknown-logo.webp")}
        alt="logo"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          opacity: 0.4,
          position: "absolute",
          bottom: "2%",
          right: "2%",
        }}
      />
    </div>
  );
};
