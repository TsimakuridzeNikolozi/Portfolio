const HeroLights = () => (
  <>
    {/* Main key light - positioned to illuminate the scene from camera perspective */}
    <directionalLight
      position={[5, 8, 15]}
      intensity={1.5}
      color="#ffffff"
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-far={50}
      shadow-camera-left={-15}
      shadow-camera-right={15}
      shadow-camera-top={15}
      shadow-camera-bottom={-15}
    />

    {/* Desk lamp spotlight - focused on work area */}
    <spotLight
      position={[3.131, 5.5, 4.844]}
      target-position={[0, 4, 3]}
      angle={0.6}
      penumbra={0.4}
      intensity={80}
      color="#ffeaa7"
      castShadow
    />

    {/* Laptop screen glow */}
    <pointLight position={[0.13, 4.5, 3.552]} intensity={25} color="#74b9ff" distance={2.5} decay={2} />

    {/* Warm ambient lighting */}
    <ambientLight intensity={0.4} color="#fff8e1" />

    {/* Fill light from the left side */}
    <spotLight
      position={[-3, 6, 8]}
      target-position={[0, 3, 3]}
      angle={0.8}
      penumbra={0.6}
      intensity={40}
      color="#fff3b1"
    />

    {/* Rim light for depth */}
    <pointLight position={[6, 5, 2]} intensity={30} color="#ffeaa7" distance={8} decay={1.5} />

    {/* Under-desk bounce light */}
    <pointLight position={[0, 2, 4]} intensity={15} color="#ccb94f" distance={4} decay={1} />
  </>
);

export default HeroLights;
