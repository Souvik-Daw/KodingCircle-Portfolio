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
import { useThree, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Jordan2 = ({ ...props }) => {
  const phone = useGLTF('/scene.glb')
  const jordans = useRef();

  const { scene, camera } = useThree();
  const tl = gsap.timeline();

  console.log(camera.position)


  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     step: 0.05,
  //   },

  //   sceneRotation: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     step: 0.01,
  //   },
  // });


  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;
  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;
  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx

    tl.to(camera.position, {
      x: -0.15,
      y: 0.10,
      z: 4.40,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      ease: "power1.inOut"
    })


      .to(scene.position, {
        x: 2.20,
        y: -0.05,
        z: -0.10,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
        
      })


      .to(scene.rotation, {
        x: -0.60,
        y: 1.13,
        z: -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      tl.to(camera.position, {
        x: 2.00,
        y: 0.60,
        z: 5.85,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


        .to(scene.position, {
          x: 1.05,
          y: -1.15,
          z: 5.40,
          scrollTrigger: {
            trigger: ".third-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })


        .to(scene.rotation, {
          x: 0.16,
          y: 4.35,
          z: 0.04,
          scrollTrigger: {
            trigger: ".third-section",
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
        position={[-0.043, -2.857, 4.052]}
        intensity={5}
      />
      <ambientLight intensity={10} />
      <mesh>
        <primitive
          object={phone.scene}
          scale={1}
          position={[-1, 0, 0]}
          rotation-y={[Math.PI * 0.2]}
        />
      </mesh>
    </>
  );
};

useGLTF.preload('/scene.glb')