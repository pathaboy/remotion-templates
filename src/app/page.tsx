import { MyComposition } from "@/remotion/Composition";
import MethodOne from "@/techniques/method-one";
import TemplateOne from "@/techniques/template-one";
import YoutubeShortOne from "@/techniques/shorts/short-template-one";
import { Player } from "@remotion/player";
import React from "react";

const Home = () => {
  const size = 46;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Player
        component={YoutubeShortOne}
        compositionHeight={16 * size}
        compositionWidth={9 * size}
        durationInFrames={60 * 20}
        fps={60}
        controls
      />
    </div>
  );
};

export default Home;
