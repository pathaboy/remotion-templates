"use client";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  Audio,
} from "remotion";

const images = [
  {
    source: "/images/jp-girl-1.jpg",
  },
  {
    source: "/images/jp-girl-2.jpg",
  },
  {
    source: "/images/jp-girl-3.jpg",
  },
  {
    source: "/images/jp-girl-4.jpg",
  },
  {
    source: "/images/jp-girl-5.jpg",
  },
  {
    source: "/images/jp-girl-6.jpg",
  },
  {
    source: "/images/jp-girl-7.jpg",
  },
  {
    source: "/images/jp-girl-8.jpg",
  },
  {
    source: "/images/jp-girl-9.jpg",
  },
  {
    source: "/images/jp-girl-10.jpg",
  },
];

const StopIt = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={5 * 30}>
        <IntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={linearTiming({
          durationInFrames: 10,
        })}
        presentation={slide()}
      />
      <TransitionSeries.Sequence durationInFrames={30 * 30}>
        <MainScene />
      </TransitionSeries.Sequence>
      {/* 
      <TransitionSeries.Sequence
        durationInFrames={10 * 60}
      ></TransitionSeries.Sequence>
      <TransitionSeries.Sequence
        durationInFrames={5 * 60}
      ></TransitionSeries.Sequence> */}
    </TransitionSeries>
  );
};

export default StopIt;

const MainScene = () => {
  const frame = useCurrentFrame();
  const imgUrl = images[frame % 10].source;
  return (
    <>
      <Audio src={staticFile("/audio/clock-ticking.mp3")} volume={2} />
      <AbsoluteFill
        style={{
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              padding: "12px",
            }}
          >
            <h1
              style={{
                fontFamily: "serif",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "64px",
                color: "whitesmoke",
                lineHeight: 1,
              }}
            >
              Let’s see WHO can pause on this image the MOST! Drop your number
              below! 👇🔥
            </h1>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <Img
              src={staticFile("/images/jp-girl-1.jpg")}
              alt="image"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "20px",
                border: "2px",
                borderColor: "navy",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            src={staticFile(`${imgUrl}`)}
            alt="image"
            style={{
              width: "900px",
              height: "900px",
              borderRadius: "50px",
              border: "4px solid navy",
              objectFit: "cover",
            }}
          />
        </div>
      </AbsoluteFill>
    </>
  );
};

const IntroScene = () => {
  const frame = useCurrentFrame();
  const count = 3 - Math.floor(frame / 40);
  return (
    <>
      <Audio src={staticFile("/audio/stop-it-intro.mp3")} volume={5} />
      <AbsoluteFill
        style={{
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              padding: "12px",
            }}
          >
            <h1
              style={{
                fontFamily: "serif",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "64px",
                color: "whitesmoke",
                lineHeight: 1,
              }}
            >
              Let’s see WHO can pause on this image the MOST! Drop your number
              below! 👇🔥
            </h1>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <Img
              src={staticFile("/images/jp-girl-1.jpg")}
              alt="image"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "20px",
                border: "2px",
                borderColor: "navy",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "900px",
              height: "900px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Count />
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};

const Count = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(frame, [0, 30], [0.7, 1.5]);
  const count = 3 - Math.floor(frame / 40);
  return (
    <h1
      style={{
        fontFamily: "monospace",
        fontSize: "320px",
        fontWeight: "700",
        color: "white",
        opacity: opacity,
        transform: `scale${scale}`,
      }}
    >
      {count}
    </h1>
  );
};
