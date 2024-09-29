/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { CameraControls, Plane, useGLTF, useScroll } from "@react-three/drei";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useControls } from "leva";
import { useThree,useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Jordan = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/air_jordan_1.glb");
  const jordans = useRef();

  const { scene, camera } = useThree();
  const tl = gsap.timeline();

  // console.log("scenePosition")
  // console.log(scene.position)
  // console.log("sceneRotation")
  // console.log(scene.rotation)
  console.log("CameraPoition")
  console.log(camera.position)

  
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  // 	cameraPosition: {
  // 		value: { x: 0, y: 0, z: 0 },
  // 		step: 0.50,
  // 	},

  // 	scenePosition: {
  // 		value: { x: 0, y: 0, z: 0 },
  // 		step: 0.05,
  // 	},

  // 	sceneRotation: {
  // 		value: { x: 0, y: 0, z: 0 },
  // 		step: 0.01,
  // 	},
  // });

  
  // useFrame(() => {
  // 	camera.position.x = cameraPosition.x;
  // 	camera.position.y = cameraPosition.y;
  // 	camera.position.z = cameraPosition.z;
  // 	scene.position.x = scenePosition.x;
  // 	scene.position.y = scenePosition.y;
  // 	scene.position.z = scenePosition.z;
  // 	scene.rotation.x = sceneRotation.x;
  // 	scene.rotation.y = sceneRotation.y;
  // 	scene.rotation.z = sceneRotation.z;
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: -0.4,
      y: 0.1,
      z: -5.3,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })


      .to(scene.position, {
        x: 1.25,
        y: -0.20,
        z: 0.20,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      .to(scene.rotation, {
        x: -0.40,
        y: 0.07,
        z: 0.03,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


  }, []);

  return (
    <>
    <directionalLight
        castShadow
        position={[-2.38, 1.32, 0.74]}
        intensity={5}
      />
      <ambientLight intensity={0.5} />
      <group
        ref={jordans}
        position={[2, 1, -1]}
        castShadow
        scale={10}
        rotation-x={[-Math.PI * 0.5]}
        {...props}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoe_shoe_0.geometry}
          material={materials.shoe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoelace_shoelace_0.geometry}
          material={materials.shoelace}
        />
      </group>
    </>
  );
};
