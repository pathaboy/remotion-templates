import { MyComposition } from "@/remotion/Composition";
import MethodOne from "@/techniques/method-one";
import TemplateOne from "@/techniques/template-one";
import { Player } from "@remotion/player";
import React from "react";

const Home = () => {
  return (
    <div>
      <Player
        component={TemplateOne}
        compositionHeight={720}
        compositionWidth={1280}
        durationInFrames={2400}
        fps={60}
        controls
      />
    </div>
  );
};

export default Home;
