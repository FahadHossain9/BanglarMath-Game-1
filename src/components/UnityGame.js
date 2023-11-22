import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Rules from "./Rules";

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/BanglarMath.loader.js",
    dataUrl: "/Build/BanglarMath.data.unityweb",
    frameworkUrl: "/Build/BanglarMath.framework.js.unityweb",
    codeUrl: "/Build/BanglarMath.wasm.unityweb",
  });

  return (
    <div className="flex">
      <div className="w-[100%]">
        <Unity style={{ width: "100%" ,height:"100vh"}} unityProvider={unityProvider} />
      </div>
    </div>
  );
};

export default UnityGame;
