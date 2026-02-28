import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Circle, Stars } from '@react-three/drei';
import * as THREE from 'three';

const HologramGlobe = () => {
    const groupRef = useRef();

    // Create random data points on the globe surface
    const particlesCount = 200;
    const positions = useMemo(() => {
        const p = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Random spherical coordinates
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const radius = 2.05; // Slightly larger than the solid sphere

            // Convert to Cartesian
            p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            p[i * 3 + 2] = radius * Math.cos(phi);
        }
        return p;
    }, []);

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.15;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    });

    return (
        <group ref={groupRef} position={[3, 0, -2]}>
            {/* Solid Inner Core */}
            <mesh>
                <sphereGeometry args={[1.9, 32, 32]} />
                <meshBasicMaterial color="#001a1a" transparent opacity={0.6} />
            </mesh>

            {/* Wireframe Outer Shell */}
            <mesh>
                <sphereGeometry args={[2, 24, 24]} />
                <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.3} />
            </mesh>

            {/* Floating Data Points */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesCount}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.06} color="#ffffff" transparent opacity={0.8} />
            </points>

            {/* Equator Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 0.01, 16, 100]} />
                <meshBasicMaterial color="#ff003c" transparent opacity={0.6} />
            </mesh>
        </group>
    );
};

const DataStreams = () => {
    const linesRef = useRef();

    useFrame((state, delta) => {
        linesRef.current.position.y = (state.clock.elapsedTime * 2) % 10 - 5;
    });

    return (
        <group ref={linesRef} position={[-4, 0, -5]} opacity={0.3}>
            {/* Simple vertical fast moving lines mimicking data matrix */}
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 5]}>
                    <cylinderGeometry args={[0.01, 0.01, Math.random() * 5 + 1]} />
                    <meshBasicMaterial color="#00ff66" transparent opacity={0.4} />
                </mesh>
            ))}
        </group>
    );
};

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            {/* A dark void with intense cyber colors */}
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <color attach="background" args={['#030508']} />

                {/* Soft grid to represent cyberspace floor */}
                <gridHelper args={[50, 50, '#00f0ff', '#00f0ff']} position={[0, -3, 0]} material-opacity={0.1} material-transparent={true} />

                <HologramGlobe />
                <DataStreams />

                <Stars radius={100} depth={50} count={300} factor={4} saturation={1} color="#00f0ff" />
                <fog attach="fog" args={['#030508', 5, 20]} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
