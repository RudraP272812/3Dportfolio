
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/tiger.glb"

const fox = ({currentAnimations,...props})=> {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions);
    Object.values(actions).forEach((actions)=>actions.stop());
    if (actions[currentAnimations]) {
      actions[currentAnimations].play();
    }
  },[actions,currentAnimations])
  return (
    // <group ref={group} {...props} dispose={null}>
    //   <group name="Sketchfab_Scene">
    //     <primitive object={nodes.GLTF_created_0_rootJoint} />
    //     <skinnedMesh
    //       name="Object_7"
    //       geometry={nodes.Object_7.geometry}
    //       material={materials.PaletteMaterial001}
    //       skeleton={nodes.Object_7.skeleton}
    //     />
    //     <skinnedMesh
    //       name="Object_8"
    //       geometry={nodes.Object_8.geometry}
    //       material={materials.PaletteMaterial001}
    //       skeleton={nodes.Object_8.skeleton}
    //     />
    //     <skinnedMesh
    //       name="Object_9"
    //       geometry={nodes.Object_9.geometry}
    //       material={materials.PaletteMaterial001}
    //       skeleton={nodes.Object_9.skeleton}
    //     />
    //     <skinnedMesh
    //       name="Object_10"
    //       geometry={nodes.Object_10.geometry}
    //       material={materials.PaletteMaterial001}
    //       skeleton={nodes.Object_10.skeleton}
    //     />
    //     <skinnedMesh
    //       name="Object_11"
    //       geometry={nodes.Object_11.geometry}
    //       material={materials.PaletteMaterial001}
    //       skeleton={nodes.Object_11.skeleton}
    //     />
    //   </group>
    // </group>
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="0d779a68142342ba930e763308bedee6fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube"
                  position={[0, 112.615, 61.473]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="Cube002"
                  position={[0, 112.615, 61.473]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="NurbsPath"
                  position={[0, 64.047, -48.766]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                  scale={21.241}
                />
                <group
                  name="Cube007"
                  position={[0, 47.412, -137.395]}
                  rotation={[-1.758, 0, -Math.PI / 2]}
                  scale={21.241}
                />
                <group
                  name="Cube003"
                  position={[5.648, 91.806, 73.094]}
                  rotation={[2.226, 0, -Math.PI]}
                  scale={21.241}
                />
                <group
                  name="Cube012"
                  position={[10.709, 108.25, 74.015]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="Cube001"
                  position={[-0.761, 112.116, 61.642]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="Cube005"
                  position={[0, 112.615, 61.473]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="Cube013"
                  position={[0, 112.615, 61.473]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                />
                <group
                  name="Armature"
                  position={[0, 71.748, -27.623]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={21.241}
                >
                  <group name="Object_14">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.body1}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.face}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.body2}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.body1}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.face}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.face}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.body1}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.body2}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.body1}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <group
                      name="Object_16"
                      position={[0, 112.615, 61.473]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_18"
                      position={[0, 112.615, 61.473]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_20"
                      position={[0, 64.047, -48.766]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_22"
                      position={[0, 47.412, -137.395]}
                      rotation={[-1.758, 0, -Math.PI / 2]}
                      scale={21.241}
                    />
                    <group
                      name="Object_24"
                      position={[5.648, 91.806, 73.094]}
                      rotation={[2.226, 0, -Math.PI]}
                      scale={21.241}
                    />
                    <group
                      name="Object_26"
                      position={[10.709, 108.25, 74.015]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_28"
                      position={[-0.761, 112.116, 61.642]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_30"
                      position={[0, 112.615, 61.473]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                    <group
                      name="Object_32"
                      position={[0, 112.615, 61.473]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={21.241}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default fox
