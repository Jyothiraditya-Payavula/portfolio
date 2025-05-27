import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector2 } from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, rotation, scale }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef<Vector2>(new Vector2());
  const { viewport } = useThree();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth follow mouse with lerp
    const targetX = mouse.current.x * viewport.width * 0.3;
    const targetY = mouse.current.y * viewport.height * 0.3;
    
    meshRef.current.position.x = position[0] + targetX;
    meshRef.current.position.y = position[1] + targetY;
    
    // Gentle rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color="#ffffff"
        metalness={0.2}
        roughness={0.8}
        opacity={0.1}
        transparent={true}
      />
    </mesh>
  );
};

export default FloatingShape;