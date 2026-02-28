import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshReflectorMaterial, BakeShadows, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
    const icoRef = useRef();
    const boxRef = useRef();
    const torusRef = useRef();

    useFrame((state, delta) => {
        icoRef.current.rotation.x += delta * 0.2;
        icoRef.current.rotation.y += delta * 0.3;

        boxRef.current.rotation.x -= delta * 0.3;
        boxRef.current.rotation.y -= delta * 0.4;

        torusRef.current.rotation.x += delta * 0.25;
        torusRef.current.rotation.y += delta * 0.15;
    });

    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={icoRef} position={[3, 1.5, -3]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#00d4ff" roughness={0.1} metalness={0.8} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh ref={boxRef} position={[-3, 2, -4]}>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial color="#a855f7" roughness={0.2} metalness={0.9} wireframe />
                </mesh>
            </Float>

            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={torusRef} position={[0, 2.5, -6]}>
                    <torusGeometry args={[1.5, 0.4, 32, 64]} />
                    <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.7} />
                </mesh>
            </Float>
        </>
    );
};

const Floor = () => {
    return (
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#080e1a"
                metalness={0.5}
            />
        </mesh>
    );
};

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 1, 6], fov: 60 }} shadows>
                <color attach="background" args={['#030712']} />
                {/* Soft magical lighting */}
                <ambientLight intensity={0.4} />
                <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={2} color="#00d4ff" castShadow />
                <spotLight position={[-5, 10, -5]} angle={0.2} penumbra={1} intensity={2} color="#a855f7" castShadow />

                <FloatingShapes />
                <Floor />

                {/* Ambient dust */}
                <ContactShadows position={[0, -1.49, 0]} scale={20} blur={2.5} far={4.5} opacity={0.5} />
                <fog attach="fog" args={['#030712', 4, 15]} />
                <BakeShadows />
            </Canvas>
        </div>
    );
};

export default Scene3D;
