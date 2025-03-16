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

const ShortTemplateOneNoTyping = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={10 * 60}>
        <Audio
          startFrom={0}
          src={staticFile("/audio/short-music/nostalgic-orchestra.mp3")}
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

export default ShortTemplateOneNoTyping;

const TextSection = () => {
  const text =
    "We spend our entire childhood wanting to grow up, and our entire adulthood wishing we could go back.";
  const frame = useCurrentFrame();
  const textFade = interpolate(frame, [0, 300], [0.1, 1]);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          fontWeight: "600",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "52px",
            fontFamily: "monospace",
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
        src={staticFile("/images/short-9.jpg")}
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
