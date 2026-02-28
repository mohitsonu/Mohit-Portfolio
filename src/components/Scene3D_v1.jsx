import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Sphere, useScroll, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={[3, 0, -5]}>
                <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
                <MeshDistortMaterial
                    color="#7b2cbf"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const SecondaryShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * -0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * -0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <mesh ref={meshRef} position={[-4, -2, -8]}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#00ffcc"
                    wireframe
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>
        </Float>
    );
};

const Scene3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#ff00cc" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <AnimatedShape />
            <SecondaryShape />

            {/* Add misty fog for depth */}
            <fog attach="fog" args={['#050505', 5, 20]} />
        </Canvas>
    );
};

export default Scene3D;
