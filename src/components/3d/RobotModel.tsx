import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model(props: any) {
  const { scene } = useGLTF('/robot.glb')
  return <primitive object={scene} {...props} />
}

export function RobotModel() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model position={[0, -0.8, 0]} scale={1.5} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}
