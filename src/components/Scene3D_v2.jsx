import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

const ParticleSphere = () => {
    const ref = useRef();
    // Generate random points inside a sphere
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        // Slow, subtle rotation
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00ffcc"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const OuterShell = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.1;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2.5, 1]} />
            <meshStandardMaterial
                color="#7b2cbf"
                wireframe={true}
                transparent={true}
                opacity={0.3}
            />
        </mesh>
    );
};

const ConnectingLines = () => {
    return (
        <mesh>
            <icosahedronGeometry args={[3, 2]} />
            <meshBasicMaterial color="#3a86ff" wireframe={true} transparent={true} opacity={0.05} />
        </mesh>
    );
}

const Scene3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

                {/* 3D Elements */}
                <ParticleSphere />
                <OuterShell />
                <ConnectingLines />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
