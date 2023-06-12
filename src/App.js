import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import "./App.css";
import state from './state.json'
import Scene from "./components/Scene";

studio.initialize();
studio.extend(extension);

const project = getProject("Project");
const sheet = project.sheet("Khui bia");

function App() {
  // useEffect(() => {
  //   sheet.project.ready.then(() =>
  //     sheet.sequence.play({ interationCount: Infinity, range: [0, 3] })
  //   );
  // }, []);

  return (
    <Canvas>
      <SheetProvider sheet={sheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[0, 0, 1]}
          fov={75}
        />
        <Scene />
        <ambientLight />
      </SheetProvider>
    </Canvas>
  );
}

export default App;
