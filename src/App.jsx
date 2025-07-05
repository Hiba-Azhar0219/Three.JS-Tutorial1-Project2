import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, SpotLight } from '@react-three/drei'
import { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.01
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color='#468585' emissive='#463585' />
      <Sparkles
        count={50}
        scale={2}
        size={10}
        speed={0.05}
        noise={0.1}
        color='yellow'
      />
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />

      <color attach='background' args={['#F0F0F0']} />
      <RotatingCube />
    </Canvas>
  )
}
export default App
