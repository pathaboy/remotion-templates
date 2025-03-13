"use client";
import "../app/globals.css";
import TemplateOne from "../techniques/template-one";
import { AbsoluteFill, Composition } from "remotion";

export const MyComposition = () => {
  return (
    <Composition
      component={TemplateOne}
      height={720}
      width={1280}
      durationInFrames={1800}
      fps={60}
      id="comp-1"
    />
  );
};
