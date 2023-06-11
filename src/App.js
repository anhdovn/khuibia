import { Canvas } from "@react-three/fiber";
import "./App.css";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import * as THREE from "three";
import state from "./state.json";
import { useEffect } from "react";
import { ChaiBia } from "./components/ChaiBia";
import Scene from "./components/Scene";

// studio.initialize();
// studio.extend(extension);

// const project = getProject("Project");
// const sheet = project.sheet("Khui bia");

function App() {
  // useEffect(() => {
  //   sheet.project.ready.then(() =>
  //     sheet.sequence.play({ interationCount: Infinity, range: [0, 3] })
  //   );
  // }, []);

  return (
    <Canvas>
      {/* <SheetProvider> */}
      {/* <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[5, 5, -5]}
          fov={75}
        /> */}
      <Scene />
      <ambientLight />
      {/* </SheetProvider> */}
    </Canvas>
  );
}

export default App;
