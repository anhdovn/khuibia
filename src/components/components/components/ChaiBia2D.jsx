import React, { useEffect, useRef } from "react";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { types } from "@theatre/core";
export default function ChaiBia2D({ index }) {
  const map = useTexture("images/bottle_0000_no-outline.webp");
  const mapOutLine = useTexture("images/bottle_0001_outline.webp");
  const ref = useRef();

  return (
    <group>
      <e.mesh theatreKey={`ChaiBia2D_${index}`}>
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial
          attach="material"
          map={map}
          transparent
          depthWrite={false}
          //   blending={THREE.AdditiveBlending}
        />
      </e.mesh>
      <e.mesh ref={ref} theatreKey={`ChaiBia2DOutLine_${index}`}>
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial
          attach="material"
          map={mapOutLine}
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </e.mesh>
    </group>
  );
}
