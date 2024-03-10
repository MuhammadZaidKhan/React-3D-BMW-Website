import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/bmw.glb");
    return <primitive object={scene} {...props} />;
}

function App() {
    return (
        <div style={{ width: "604px", height: "428px", paddingBottom: "1px", marginLeft: "350px", }}>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="relative object-center">
                <color attach="background" args={["#ffff"]} />
                <PresentationControls
                    speed={2}
                    global
                    zoom={5}
                    polar={[-0.1, Math.PI / 2]}
                >
                    <Stage environment={null}>
                        <Model scale={0.01} />
                        <Model scale={0.01} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
}

export default App;
