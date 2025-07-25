"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text, Html } from "@react-three/drei"
import type * as THREE from "three"

// 3D Person Component
function Person() {
  const personRef = useRef<THREE.Group>(null)

  return (
    <group ref={personRef} position={[0, -0.8, 0]}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshStandardMaterial color="#2d1810" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 8]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.4, 0.9, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>
      <mesh position={[0.4, 0.9, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.15, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[0.15, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
    </group>
  )
}

// Enhanced Desk Scene with colorful tech cards
function EnhancedDeskScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Desk Platform - Moved down */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, -1.5, 0]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[5, 0.3, 3]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </Float>

      {/* Name Plate on Table */}
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
        <group position={[0, -1.25, 1.2]}>
          {/* Name plate base */}
          <mesh>
            <boxGeometry args={[2.5, 0.1, 0.4]} />
            <meshStandardMaterial color="#374151" emissive="#0ea5e9" emissiveIntensity={0.1} />
          </mesh>
          {/* Name text */}
          <Text
            position={[0, 0.1, 0]}
            fontSize={0.20}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            fontWeight={700}
          >
            RAHAT ALI SHEIKH
          </Text>
          {/* Glowing border */}
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[2.6, 0.02, 0.45]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0ea5e9"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      </Float>

      {/* Person sitting at desk */}
      <Person />

      {/* Laptop */}
      <group position={[0.5, -1.1, 0.2]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.08, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0, 0.5, -0.6]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.8, 1, 0.05]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        <mesh position={[0, 0.5, -0.57]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.6, 0.9, 0.01]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* React Card - Blue */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[-2.5, 0.2, 1]}>
          <mesh>
            <boxGeometry args={[1, 0.7, 0.05]} />
            <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-blue-400 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-blue-300">
              ⚛️ React
            </div>
          </Html>
        </group>
      </Float>

      {/* Next.js Card - Black */}
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6}>
        <group position={[2.2, 0.9, 0.5]}>
          <mesh>
            <boxGeometry args={[0.8, 0.6, 0.05]} />
            <meshStandardMaterial color="#000000" emissive="#333333" emissiveIntensity={0.2} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-black p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-gray-600">
              ▲ Next.js
            </div>
          </Html>
        </group>
      </Float>

      {/* TypeScript Card - Blue */}
      <Float speed={2.2} rotationIntensity={0.1} floatIntensity={0.5}>
        <group position={[1.8, -0.5, -1.5]}>
          <mesh>
            <boxGeometry args={[0.9, 0.7, 0.05]} />
            <meshStandardMaterial color="#3178c6" emissive="#3178c6" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-blue-600 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-blue-400">
              TS TypeScript
            </div>
          </Html>
        </group>
      </Float>

      {/* Node.js Card - Green */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group position={[-1.5, 1.2, -0.8]}>
          <mesh>
            <boxGeometry args={[0.7, 0.5, 0.05]} />
            <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-green-600 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-green-400">
              🟢 Node.js
            </div>
          </Html>
        </group>
      </Float>

      {/* Python Card - Yellow/Blue */}
      <Float speed={1.7} rotationIntensity={0.18} floatIntensity={0.4}>
        <group position={[-2.8, 1.5, 0.2]}>
          <mesh>
            <boxGeometry args={[0.8, 0.6, 0.05]} />
            <meshStandardMaterial color="#3776ab" emissive="#3776ab" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-blue-700 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-yellow-400">
              🐍 Python
            </div>
          </Html>
        </group>
      </Float>

      {/* MongoDB Card - Green */}
      <Float speed={2.1} rotationIntensity={0.12} floatIntensity={0.5}>
        <group position={[2.8, 0.5, -1.2]}>
          <mesh>
            <boxGeometry args={[0.7, 0.5, 0.05]} />
            <meshStandardMaterial color="#47a248" emissive="#47a248" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-green-500 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-green-300">
              🍃 MongoDB
            </div>
          </Html>
        </group>
      </Float>

      {/* PostgreSQL Card - Blue */}
      <Float speed={1.9} rotationIntensity={0.14} floatIntensity={0.35}>
        <group position={[-1.2, -0.8, -2]}>
          <mesh>
            <boxGeometry args={[0.8, 0.6, 0.05]} />
            <meshStandardMaterial color="#336791" emissive="#336791" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-blue-800 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-blue-500">
              🐘 PostgreSQL
            </div>
          </Html>
        </group>
      </Float>

      {/* AWS Card - Orange */}
      <Float speed={1.6} rotationIntensity={0.16} floatIntensity={0.45}>
        <group position={[1.5, 1.9, 1.5]}>
          <mesh>
            <boxGeometry args={[0.7, 0.5, 0.05]} />
            <meshStandardMaterial color="#ff9900" emissive="#ff9900" emissiveIntensity={0.3} />
          </mesh>
          <Html position={[0, 0, 0.03]} transform occlude>
            <div className="bg-orange-500 p-3 rounded-lg text-white text-sm font-bold shadow-lg border border-orange-300">
              ☁️ AWS
            </div>
          </Html>
        </group>
      </Float>

      {/* Coffee Cup with Steam */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[-1.8, -1, 0.8]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.12, 0.25, 16]} />
            <meshStandardMaterial color="#8b4513" />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.13, 0.13, 0.02, 16]} />
            <meshStandardMaterial color="#3e2723" />
          </mesh>
          <mesh position={[0.18, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.08, 0.02, 8, 16]} />
            <meshStandardMaterial color="#8b4513" />
          </mesh>
          {/* Steam particles */}
          <Float speed={3} floatIntensity={1}>
            <mesh position={[0, 0.4, 0]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
            </mesh>
          </Float>
          <Float speed={2.5} floatIntensity={0.8}>
            <mesh position={[0.05, 0.6, 0]}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
            </mesh>
          </Float>
        </group>
      </Float>

      {/* Colorful Books Stack */}
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
        <group position={[1.5, -1.2, 1.2]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.3, 0.8, 0.05]} />
            <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[0.3, 0.8, 0.05]} />
            <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.12]}>
            <boxGeometry args={[0.3, 0.8, 0.05]} />
            <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.18]}>
            <boxGeometry args={[0.3, 0.8, 0.05]} />
            <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </Float>

      {/* Enhanced Monitor with colorful screen */}
      <group position={[-0.8, -0.6, 0.5]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.9, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[1.4, 0.8, 0.01]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
      </group>

      {/* Glowing Keyboard */}
      <mesh position={[0.2, -1.15, 0.8]}>
        <boxGeometry args={[1.2, 0.05, 0.4]} />
        <meshStandardMaterial color="#374151" emissive="#0ea5e9" emissiveIntensity={0.1} />
      </mesh>

      {/* Gaming Mouse with RGB */}
      <mesh position={[1, -1.15, 0.6]}>
        <boxGeometry args={[0.15, 0.05, 0.25]} />
        <meshStandardMaterial color="#1f2937" emissive="#ef4444" emissiveIntensity={0.3} />
      </mesh>

      {/* Floating Code Symbols with colors */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.8}>
        <Text
          position={[-3, 2, -1]}
          fontSize={0.4}
          color="#61dafb"
          anchorX="center"
          anchorY="middle"
        >
          {"</>"}
        </Text>
      </Float>

      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
        <Text
          position={[3, 1, 1]}
          fontSize={0.35}
          color="#f59e0b"
          anchorX="center"
          anchorY="middle"
        >
          {"{}"}
        </Text>
      </Float>

      <Float speed={2.8} rotationIntensity={0.25} floatIntensity={0.7}>
        <Text
          position={[0, 3, -2]}
          fontSize={0.3}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          {"()"}
        </Text>
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
      </Float>

      {/* Floating Geometric Shapes */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[-3.5, 0.7, 2]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh position={[3.2, 2.2, -0.5]}>
          <icosahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      <Float speed={1.9} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0.5, 2.9, 1.8]}>
          <dodecahedronGeometry args={[0.18]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Workspace3D() {
  return (
    <div className="h-96 lg:h-[600px] w-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#61dafb" />
        <pointLight position={[5, 5, -5]} intensity={0.8} color="#10b981" />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={1.2} castShadow color="#06b6d4" />
        <EnhancedDeskScene />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
