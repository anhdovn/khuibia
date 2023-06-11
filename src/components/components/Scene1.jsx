import { Html, useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { editable as e } from "@theatre/r3f";
import ChaiBia2D from "./components/ChaiBia2D";
export default function Scene1() {
  const logoTexture = useTexture("images/budweiser-logo-2.webp");
  const chatemTexture = useTexture("images/text-chatem.webp");
  const numberTexture = useTexture("images/frame-2608605.webp");
  const array = Array(6).fill();

  return (
    <>
      <e.mesh theatreKey="Scene1_Logo">
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial
          attach="material"
          map={logoTexture}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </e.mesh>
      <e.mesh theatreKey="Scene1_Text1">
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial
          attach="material"
          map={chatemTexture}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </e.mesh>

      {Array(6)
        .fill()
        .map((item, index) => (
          <ChaiBia2D key={index} index={index} />
        ))}

      <e.mesh theatreKey="Scene1_Text2">
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial
          attach="material"
          map={numberTexture}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
        <Html position={[0.12, 0.11, 0]}>
          <p className="scene1_number">1</p>
        </Html>
      </e.mesh>
    </>
  );
}
