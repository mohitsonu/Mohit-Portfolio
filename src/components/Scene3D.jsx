import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Sphere, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Represents "Connections, Network, and Architecture"
const NodeNetwork = () => {
    const groupRef = useRef();

    // Create a 3D network of connected nodes
    const nodesCount = 40;

    const { positions, lines } = useMemo(() => {
        const pos = [];
        const lin = [];

        // Generate random nodes in a wide space
        for (let i = 0; i < nodesCount; i++) {
            pos.push(new THREE.Vector3(
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4
            ));
        }

        // Connect nodes linearly or based on distance
        for (let i = 0; i < nodesCount; i++) {
            for (let j = i + 1; j < nodesCount; j++) {
                const distance = pos[i].distanceTo(pos[j]);
                if (distance < 2.5) { // Only connect relatively close nodes
                    lin.push([pos[i], pos[j]]);
                }
            }
        }

        return { positions: pos, lines: lin };
    }, []);

    useFrame((state, delta) => {
        // Elegant, slow rotation representing global/data flow
        groupRef.current.rotation.y += delta * 0.05;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    });

    return (
        <group ref={groupRef} position={[2, 0, -2]}>
            {/* Draw connection lines */}
            {lines.map((points, idx) => (
                <Line
                    key={`line-${idx}`}
                    points={points}
                    color="#38bdf8"
                    lineWidth={1}
                    transparent
                    opacity={0.15}
                />
            ))}

            {/* Draw the nodes */}
            {positions.map((pos, idx) => (
                <mesh key={`node-${idx}`} position={pos}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    {/* Blend of Sales/Human (Indigo) and Tech (Sky Blue) coloring */}
                    <meshStandardMaterial
                        color={idx % 3 === 0 ? "#818cf8" : "#38bdf8"}
                        emissive={idx % 3 === 0 ? "#818cf8" : "#38bdf8"}
                        emissiveIntensity={0.5}
                        roughness={0.2}
                    />
                </mesh>
            ))}
        </group>
    );
};

// Represents growth, metrics, and upward trajectory
const FlowLines = () => {
    const linesRef = useRef();

    useFrame((state, delta) => {
        linesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    });

    return (
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
            <group ref={linesRef} position={[-4, -2, -6]}>
                <mesh rotation={[0, 0, Math.PI / 4]}>
                    <capsuleGeometry args={[0.1, 4, 10, 20]} />
                    <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
                </mesh>
                <mesh position={[1, 1, -1]} rotation={[0, 0, Math.PI / 4]}>
                    <capsuleGeometry args={[0.05, 5, 10, 20]} />
                    <meshStandardMaterial color="#818cf8" metalness={0.9} roughness={0.1} transparent opacity={0.4} />
                </mesh>
            </group>
        </Float>
    );
}

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            {/* Clean elegant SaaS background color */}
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <color attach="background" args={['#02040a']} />

                {/* Crisp lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, 10, -10]} intensity={1} color="#818cf8" />

                <NodeNetwork />
                <FlowLines />

                <Sparkles count={150} scale={10} size={1.5} speed={0.2} opacity={0.4} color="#ffffff" />
                <fog attach="fog" args={['#02040a', 4, 15]} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
