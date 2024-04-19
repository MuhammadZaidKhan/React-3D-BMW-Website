import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/bmw.glb");
    return <primitive object={scene} {...props} />;
}

function App() {
    return (
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="absolute mt-10">
            <color attach="background" args={["#fffff"]} />
            <PresentationControls
                speed={5}
                global
                zoom={5}
                polar={[-0.1, Math.PI / 2]}
            >
                {" "}
                <Stage environment={null}>
                    <Model scale={0.01} />
                    <Model scale={0.01} />
                </Stage>
            </PresentationControls>
        </Canvas>
    );
}
export default App;
