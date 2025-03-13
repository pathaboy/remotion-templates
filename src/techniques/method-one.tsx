"use client";
import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const images = [
  { imageSrc: "/images/jp-girl-1.jpg", duration: 5 * 60 },
  { imageSrc: "/images/jp-girl-2.jpg", duration: 5 * 60 },
  { imageSrc: "/images/jp-girl-3.jpg", duration: 5 * 60 },
];

const StillImage = () => {
  const frame = useCurrentFrame();
  const translateY = interpolate(frame, [4 * 60, 6 * 60], [0, -120], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill>
      {/* First Image (0 - 3 sec) */}
      <Sequence from={0} durationInFrames={2 * 60}>
        <Img
          src={images[0].imageSrc}
          style={{ width: "100%", height: "100%" }}
        />
      </Sequence>

      <Sequence from={2 * 60} durationInFrames={1 * 60}>
        <Img
          src={images[2].imageSrc}
          style={{ width: "100%", height: "100%" }}
        />
      </Sequence>

      {/* Second Image (3 - 8 sec) */}
      <Sequence from={3 * 60} durationInFrames={5 * 60}>
        <Img
          src={images[1].imageSrc}
          style={{
            width: "100%",
            height: "100%",
            transform: `translateY(${translateY}px)`,
          }}
        />
      </Sequence>

      {/* Black Box Appears (4 sec, rising transition) */}
      <Sequence from={4 * 60} durationInFrames={4 * 60}>
        <BlackBox />
      </Sequence>

      {/* Text Appears (5 sec, fade-in effect) */}
      <Sequence from={5 * 60} durationInFrames={3 * 60}>
        <FadeInText />
      </Sequence>
    </AbsoluteFill>
  );
};

/** Black Box with Smooth Rising Effect */
const BlackBox = () => {
  const frame = useCurrentFrame();
  const translateY = interpolate(frame, [0, 30], [120, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        height: "120px",
        backgroundColor: "black",
        transform: `translateY(${translateY}px)`,
      }}
    />
  );
};

/** Text Appearing with Fade-in Effect */
const FadeInText = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 60], [0, 1], {
    easing: Easing.out(Easing.ease),
    extrapolateRight: "clamp",
  });

  return (
    <h1
      style={{
        position: "absolute",
        color: "white",
        fontSize: "40px",
        textAlign: "center",
        width: "100%",
        bottom: "10%",
        transform: "translateY(55%)",
        opacity,
      }}
    >
      Arigatto, Konichiwa Gozaimashta
    </h1>
  );
};

export default StillImage;
