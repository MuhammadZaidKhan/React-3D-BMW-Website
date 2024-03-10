import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/bmw.glb");
    return <primitive object={scene} {...props} />;
}

function App() {
    return (
        <div className='carr'>
            <div className="carr-inner"> {/* Added inner div */}
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
        </div>
    );
}


export default App;
