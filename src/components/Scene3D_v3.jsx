import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const GlassBlob = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Float floatIntensity={3} speed={2} rotationIntensity={0.5}>
            <mesh ref={meshRef} position={[2, 0, -3]}>
                <torusKnotGeometry args={[1.5, 0.6, 128, 64]} />
                <MeshTransmissionMaterial
                    backside
                    thickness={1.5}
                    roughness={0.1}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.5}
                    anisotropy={0.3}
                    color="#ff3366"
                    envMapIntensity={2}
                />
            </mesh>
        </Float>
    );
};

const FloatingRings = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        groupRef.current.rotation.z += delta * 0.1;
        groupRef.current.rotation.x += delta * 0.05;
    });

    return (
        <group ref={groupRef} position={[2, 0, -3]}>
            <mesh>
                <torusGeometry args={[3, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ff3366" emissive="#ff3366" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Background Color Matches CSS Var */}
                <color attach="background" args={['#080808']} />

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffaa00" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff3366" />

                <GlassBlob />
                <FloatingRings />

                <Sparkles count={300} scale={15} size={2} speed={0.4} opacity={0.6} color="#ffb84d" />

                <Environment preset="city" />
                {/* Matches CSS Var for Fog transition */}
                <fog attach="fog" args={['#080808', 5, 20]} />
            </Canvas>
        </div>
    );
}

export default Scene3D;
