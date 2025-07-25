"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text, Html } from "@react-three/drei"
import type * as THREE from "three"
import { Atom, ChevronUp, FileType2, Server, Landmark, Leaf } from "lucide-react"

// 3D Skills Visualization
function Skills3DScene() {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  // Helper to animate a group on hover
  const getHoverHandlers = (index: number) => ({
    onPointerOver: () => setHoveredIndex(index),
    onPointerOut: () => setHoveredIndex(null),
  })

  return (
    <group ref={groupRef}>
      {/* Central Core with Enhanced Glow */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} wireframe />
        </mesh>
        {/* Inner glow sphere */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Orbiting Skill Spheres with Enhanced Glow and Hover Animation */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.4}>
        <group
          position={[2.5, 1, 0]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(0)}
          scale={hoveredIndex === 0 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.6} />
          </mesh>
          {/* Outer glow */}
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-blue-500/90 px-3 py-1 rounded-lg shadow-lg border border-blue-300/50 backdrop-blur-sm flex items-center gap-1">
              <Atom size={16} /> React
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.5}>
        <group
          position={[-2.5, 1, 0]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(1)}
          scale={hoveredIndex === 1 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#000000" emissive="#333333" emissiveIntensity={0.4} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#666666"
              emissive="#333333"
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-gray-800/90 px-3 py-1 rounded-lg shadow-lg border border-gray-600/50 backdrop-blur-sm flex items-center gap-1">
              <ChevronUp size={16} /> Next.js
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.6}>
        <group
          position={[0, 2.5, 1]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(2)}
          scale={hoveredIndex === 2 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#3178c6" emissive="#3178c6" emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#3178c6"
              emissive="#3178c6"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-blue-600/90 px-3 py-1 rounded-lg shadow-lg border border-blue-400/50 backdrop-blur-sm flex items-center gap-1">
              <FileType2 size={16} /> TS TypeScript
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={1.6} rotationIntensity={0.18} floatIntensity={0.4}>
        <group
          position={[0, -2.5, 1]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(3)}
          scale={hoveredIndex === 3 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#339933"
              emissive="#339933"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-green-600/90 px-3 py-1 rounded-lg shadow-lg border border-green-400/50 backdrop-blur-sm flex items-center gap-1">
              <Server size={16} /> Node.js
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={2.4} rotationIntensity={0.14} floatIntensity={0.7}>
        <group
          position={[1.8, -1.8, -1]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(4)}
          scale={hoveredIndex === 4 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#3776ab" emissive="#3776ab" emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#3776ab"
              emissive="#3776ab"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-blue-700/90 px-3 py-1 rounded-lg shadow-lg border border-blue-500/50 backdrop-blur-sm flex items-center gap-1">
              <Landmark size={16} /> Python
            </div>
          </Html>
        </group>
      </Float>

      <Float speed={1.9} rotationIntensity={0.16} floatIntensity={0.5}>
        <group
          position={[-1.8, -1.8, -1]}
          rotation={[0, 0, 0]}
          {...getHoverHandlers(5)}
          scale={hoveredIndex === 5 ? 1.3 : 1}
        >
          <mesh>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#47a248" emissive="#47a248" emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#47a248"
              emissive="#47a248"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
          <Html position={[0, -0.6, 0]} center>
            <div className="text-white text-xs font-bold bg-green-500/90 px-3 py-1 rounded-lg shadow-lg border border-green-300/50 backdrop-blur-sm flex items-center gap-1">
              <Leaf size={16} /> MongoDB
            </div>
          </Html>
        </group>
      </Float>

      {/* Enhanced Connecting Lines with Glow */}
      <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <group>
          <mesh position={[1.25, 0.5, 0]} rotation={[0, 0, 0.3]}>
            <cylinderGeometry args={[0.015, 0.015, 2.5]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[-1.25, 0.5, 0]} rotation={[0, 0, -0.3]}>
            <cylinderGeometry args={[0.015, 0.015, 2.5]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0, 1.25, 0.5]} rotation={[0.3, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 2.5]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0, -1.25, 0.5]} rotation={[-0.3, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 2.5]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0.9, -0.9, -0.5]} rotation={[0.2, 0, 0.4]}>
            <cylinderGeometry args={[0.015, 0.015, 2.2]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[-0.9, -0.9, -0.5]} rotation={[0.2, 0, -0.4]}>
            <cylinderGeometry args={[0.015, 0.015, 2.2]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Enhanced Floating Code Elements with Glow */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.8}>
        <Text
          position={[-3, 2, 1]}
          fontSize={0.4}
          color="#61dafb"
          anchorX="center"
          anchorY="middle"
        >
          {"</>"}
        </Text>
        {/* Glow effect for text */}
        <mesh position={[-3, 2, 0.9]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.2} transparent opacity={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
        <Text
          position={[3, 2, 1]}
          fontSize={0.35}
          color="#f59e0b"
          anchorX="center"
          anchorY="middle"
        >
          {"{}"}
        </Text>
        <mesh position={[3, 2, 0.9]}>
          <sphereGeometry args={[0.25]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.2} transparent opacity={0.1} />
        </mesh>
      </Float>

      <Float speed={2.8} rotationIntensity={0.25} floatIntensity={0.7}>
        <Text
          position={[0, 3.5, -1]}
          fontSize={0.3}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          {"()"}
        </Text>
        <mesh position={[0, 3.5, -1.1]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.2} transparent opacity={0.1} />
        </mesh>
      </Float>

      <Float speed={2.3} rotationIntensity={0.18} floatIntensity={0.55}>
        <Text
          position={[-2, 3.5, 1]}
          fontSize={0.25}
          color="#8b5cf6"
          anchorX="center"
          anchorY="middle"
        >
          {"[]"}
        </Text>
        <mesh position={[-2, 3.5, 0.9]}>
          <sphereGeometry args={[0.18]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} transparent opacity={0.1} />
        </mesh>
      </Float>

      {/* Additional Glowing Particles */}
      <Float speed={4} rotationIntensity={0.1} floatIntensity={1}>
        <mesh position={[3.5, 0.5, 2]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={3.5} rotationIntensity={0.1} floatIntensity={0.9}>
        <mesh position={[-3.5, -0.5, 2]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={4.2} rotationIntensity={0.1} floatIntensity={1.1}>
        <mesh position={[2, 3, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      <Float speed={3.8} rotationIntensity={0.1} floatIntensity={0.8}>
        <mesh position={[-2, -3, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Skills3D() {
  return (
    <div
      style={{
        width: 600,
        height: 400,
        minWidth: 600,
        minHeight: 400,
        maxWidth: 600,
        maxHeight: 400,
        margin: '0 auto',
        position: 'relative',
        overflow: 'visible',
        background: 'transparent',
        zIndex: 2,
      }}
    >
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#61dafb" />
        <pointLight position={[5, 5, -5]} intensity={0.8} color="#10b981" />
        <pointLight position={[-5, -5, 5]} intensity={0.6} color="#f59e0b" />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={1.2} castShadow color="#06b6d4" />
        <Skills3DScene />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
