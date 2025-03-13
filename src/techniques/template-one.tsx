"use client";
import { linearTiming, TransitionSeries } from "@remotion/transitions";

import React from "react";
import {
  AbsoluteFill,
  Img,
  Audio,
  interpolate,
  Sequence,
  useCurrentFrame,
  staticFile,
} from "remotion";

const VIDEO_LENGTH = 60 * 60; // 60 sec * 60fps = 3600 frames

// Scene one => 0->2sec
const SceneOne = () => {
  return (
    <AbsoluteFill>
      <Img
        src={staticFile("/images/jp-girl-1.jpg")}
        alt="img"
        className="w-full h-full"
      />
    </AbsoluteFill>
  );
};

// Scene Two => 2->4sec
const SceneTwo = () => {
  const frame = useCurrentFrame();
  const textContainerSlideUp = interpolate(frame, [0, 60], [120, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="relative">
      <Img
        src={staticFile("/images/jp-girl-2.jpg")}
        alt="img"
        className="w-full h-full"
      />
      <div
        className={`w-full h-[120px] bg-black absolute bottom-0`}
        style={{
          transform: `translateY(${textContainerSlideUp}px)`,
        }}
      ></div>
      <TextEffectOne />
    </AbsoluteFill>
  );
};

const TextEffectOne = () => {
  const frame = useCurrentFrame();
  const textOpacity = interpolate(frame, [60, 120], [0, 1]);

  return (
    <>
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        startFrom={90}
        endAt={150}
        playbackRate={3}
      />
      <h1
        className="absolute text-5xl text-center text-white w-full bottom-12"
        style={{
          opacity: textOpacity,
          transform: "translateY(20%)",
        }}
      >
        Konichiwa, Arigatto Gozaimashta
      </h1>
    </>
  );
};

// Scene Three
const SceneThree = () => {
  const frame = useCurrentFrame();
  const textContainerSlideDown = interpolate(frame, [0, 60], [-120, 0], {
    extrapolateRight: "clamp",
  });
  const imageSlideDown = interpolate(frame, [0, 60], [0, 120], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="relative">
      <Img
        src={staticFile("/images/jp-girl-3.jpg")}
        alt="image"
        className="w-full h-full"
        style={{
          transform: `translateY(${imageSlideDown}px)`,
        }}
      />
      <div
        className="absolute w-full h-[120px] bg-black top-0 right-0"
        style={{
          transform: `translateY(${textContainerSlideDown}px)`,
        }}
      />
      <TextEffectTwo />
    </AbsoluteFill>
  );
};

const TextEffectTwo = () => {
  const frame = useCurrentFrame();
  const textFade = interpolate(frame, [60, 120], [0, 1], {
    extrapolateLeft: "clamp",
  });

  return (
    <>
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        startFrom={90}
        endAt={150}
        playbackRate={3}
      />
      <h1
        className="text-5xl text-white absolute top-8 text-center w-full font-serif drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        style={{
          opacity: textFade,
        }}
      >
        IkidakiMass, what is that?
      </h1>
    </>
  );
};

// Scene 4

const SceneFour = () => {
  const frame = useCurrentFrame();
  const textContainerRightSlide = interpolate(frame, [60, 120], [100, 0], {
    extrapolateRight: "clamp",
  });
  const slideImageToLeft = interpolate(frame, [60, 120], [100, 50], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill className="relative">
      <Img
        src={staticFile("/images/jp-girl-4.jpg")}
        alt="image"
        className="w-full h-full"
        style={{
          width: `${slideImageToLeft}%`,
        }}
      />
      <div
        className="bg-black absolute w-[50%] h-full right-0"
        style={{
          transform: `translateX(${textContainerRightSlide}%)`,
        }}
      />
      <TextEffectFour />
    </AbsoluteFill>
  );
};

const TextEffectFour = () => {
  const frame = useCurrentFrame();
  const textFade = interpolate(frame, [60, 120], [0, 1], {
    extrapolateLeft: "clamp",
  });

  return (
    <>
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        startFrom={180}
        endAt={260}
        playbackRate={3}
      />
      <h1
        className="text-8xl text-white absolute w-[50%] text-center right-0 top-[25%] font-serif drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]"
        style={{
          opacity: textFade,
        }}
      >
        Hey wait, I don't know English.
      </h1>
    </>
  );
};

// Scene 5
const SceneFive = () => {
  const frame = useCurrentFrame();
  const textRiseEffect = interpolate(frame, [0, 60], [30, 0], {
    extrapolateRight: "clamp",
  });
  const textFadeEffect = interpolate(frame, [0, 60], [0, 1]);

  return (
    <AbsoluteFill className="relative">
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        startFrom={120}
        endAt={260}
        playbackRate={3}
      />
      <Img
        src={staticFile("/images/jp-girl-4.jpg")}
        alt="image"
        className="w-full h-full"
      />
      <h1
        className="text-7xl absolute max-w-2xl left-[25%] text-center bottom-[25%] text-white font-serif drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        style={{
          transform: `translateY(${textRiseEffect}px)`,
          opacity: textFadeEffect,
        }}
      >
        Oh no, for some reason this is the end of the video. Thank you!!!
      </h1>
    </AbsoluteFill>
  );
};

const SceneSix = () => {
  const frame = useCurrentFrame();
  const textSlideEffect = interpolate(frame, [0, 60], [120, 0], {
    extrapolateRight: "clamp",
  });
  const textFadeEffect = interpolate(frame, [0, 60], [0, 1]);

  return (
    <AbsoluteFill className="relative">
      <Audio
        src={staticFile("/audio/keybord-typing-sound.mp3")}
        startFrom={120}
        endAt={260}
        playbackRate={3}
      />
      <Img
        src={staticFile("/images/jp-girl-1.jpg")}
        alt="image"
        className="w-full h-full"
      />
      <h1
        className="text-7xl absolute max-w-2xl left-[25%] text-center bottom-[25%] text-white font-serif drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        style={{
          transform: `translateX(${textSlideEffect}px)`,
          opacity: textFadeEffect,
        }}
      >
        Just Kidding, let's continue the story. Let's GOOO!
      </h1>
    </AbsoluteFill>
  );
};

// Scene Seven
const SceneSeven = () => {
  const frame = useCurrentFrame();
  const block = interpolate(frame, [120, 180], [100, 0], {
    extrapolateRight: "clamp",
  });
  const imageSlideLeft = interpolate(frame, [120, 180], [100, 50], {
    extrapolateRight: "clamp",
  });
  const imageSlideFromRight = interpolate(frame, [180, 240], [100, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="relative">
      <Img
        src={staticFile("/images/jp-girl-2.jpg")}
        alt="image"
        className={`h-full`}
        style={{
          width: `${imageSlideLeft}%`,
        }}
      />
      <div
        className="w-[50%] h-full bg-black absolute right-0"
        style={{
          transform: `translateX(${block}%)`,
        }}
      />
      <Img
        src={staticFile("/images/jp-girl-4.jpg")}
        alt="image"
        className="h-full absolute z-10 w-[50%] right-0"
        style={{
          transform: `translateX(${imageSlideFromRight}%)`,
        }}
      />
    </AbsoluteFill>
  );
};

const TemplateOne = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={2 * 60}>
        <SceneOne />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={3 * 60}>
        <SceneTwo />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={3 * 60}>
        <SceneThree />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={2 * 60}>
        {/* Scene One has same effects as Four, so I am reusing it  */}
        <SceneOne />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={5 * 60}>
        <SceneFour />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={3 * 60}>
        <SceneFive />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={3 * 60}>
        <SceneSix />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={6 * 60}>
        <SceneSeven />
      </TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={2 * 60}>
        <SceneOne />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export default TemplateOne;
