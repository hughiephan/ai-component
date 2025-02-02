import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const VectorVisualization = () => {
  const canvasRef = useRef(null);
  const [vectors, setVectors] = useState({
    v: { x: -1, y: 2, z: 2 },
    w: { x: 3, y: 1, z: -3 },
    vw: { x: 2, y: 3, z: -1 }
  });

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const orthographicRef = useRef(null);
  const dolliesRef = useRef({ dolly0: null, dolly1: null });
  const arrowsRef = useRef({ vArrow: null, wArrow: null, vwArrow: null });
  const boxHelpersRef = useRef({ vBox: null, wBox: null, vwBox: null });
  const anchorsRef = useRef([]);

  const render = () => {
    if (rendererRef.current && sceneRef.current) {
      rendererRef.current.render(
        sceneRef.current,
        cameraRef.current
      );
    }
  };

  const updateVectors = () => {
    if (!arrowsRef.current || !boxHelpersRef.current || !anchorsRef.current) return;

    const { v, w, vw } = vectors;
    const vVec = new THREE.Vector3(v.x, v.y, v.z);
    const wVec = new THREE.Vector3(w.x, w.y, w.z);
    const vwVec = new THREE.Vector3(vw.x, vw.y, vw.z);
    
    // Update arrows
    const { vArrow, wArrow, vwArrow } = arrowsRef.current;
    if (vArrow && wArrow && vwArrow) {
      vArrow.setDirection(vVec.clone().normalize());
      vArrow.setLength(vVec.length());
      
      wArrow.position.copy(vVec);
      wArrow.setDirection(wVec.clone().normalize());
      wArrow.setLength(wVec.length());
      
      vwArrow.setDirection(vwVec.clone().normalize());
      vwArrow.setLength(vwVec.length());
    }
    
    // Update boxes
    const { vBox, wBox, vwBox } = boxHelpersRef.current;
    if (vBox && wBox && vwBox) {
      vBox.visible = true;
      wBox.visible = false;
      vwBox.visible = false;
    }
    
    // Update anchors
    const [anchorX, anchorY, anchorZ] = anchorsRef.current;
    if (anchorX && anchorY && anchorZ) {
      anchorX.position.x = v.x;
      anchorY.position.y = v.y;
      anchorZ.position.z = v.z;
    }
    
    render();
  };
  
  useEffect(() => {
    // Initialize Three.js scene
    const initScene = () => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // Set background color to white
      sceneRef.current = scene;
      
      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
      
      // Create cameras
      const perspective = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      perspective.position.z = 10;
      cameraRef.current = perspective;
      
      const orthographic = new THREE.OrthographicCamera(
        -window.innerWidth / 200,
        window.innerWidth / 200,
        window.innerHeight / 200,
        -window.innerHeight / 200,
        -100,
        100
      );
      orthographic.zoom = 10 / perspective.position.z;
      orthographic.updateProjectionMatrix();
      orthographicRef.current = orthographic;
      
      // Create dolly system for camera movement
      const dolly0 = new THREE.Object3D();
      const dolly1 = new THREE.Object3D();
      dolly1.rotation.x = -Math.PI / 6;
      dolly0.rotation.y = Math.PI / 6;
      scene.add(dolly0);
      dolly0.add(dolly1);
      dolly1.add(perspective, orthographic);
      dolliesRef.current = { dolly0, dolly1 };
      
      // Add lights
      const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 50, 130);
      directionalLight.castShadow = true;
      scene.add(hemiLight, directionalLight);
      
      // Create arrows
      const vArrow = new THREE.ArrowHelper(
        new THREE.Vector3(),
        new THREE.Vector3(),
        1,
        0xffff00
      );
      const wArrow = new THREE.ArrowHelper(
        new THREE.Vector3(),
        new THREE.Vector3(),
        1,
        0xff00ff
      );
      const vwArrow = new THREE.ArrowHelper(
        new THREE.Vector3(),
        new THREE.Vector3(),
        1,
        0x00ffff
      );
      scene.add(vArrow, wArrow, vwArrow);
      arrowsRef.current = { vArrow, wArrow, vwArrow };
      
      // Create boxes
      const vBox = new THREE.Box3Helper(
        new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
        0x333300
      );
      const wBox = new THREE.Box3Helper(
        new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
        0x330033
      );
      const vwBox = new THREE.Box3Helper(
        new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
        0x003333
      );
      scene.add(vBox, wBox, vwBox);
      boxHelpersRef.current = { vBox, wBox, vwBox };
      
      // Create anchors
      const anchorGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const anchors = [
        new THREE.Mesh(
          anchorGeometry,
          new THREE.MeshStandardMaterial({ color: 0xff0000 })
        ),
        new THREE.Mesh(
          anchorGeometry,
          new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        ),
        new THREE.Mesh(
          anchorGeometry,
          new THREE.MeshStandardMaterial({ color: 0x0000ff })
        ),
      ];
      const anchorsObj = new THREE.Object3D();
      anchorsObj.add(...anchors);
      scene.add(anchorsObj);
      anchorsRef.current = anchors;
      
      updateVectors();
    };
    
    initScene();
    
    const handleResize = () => {
      const { current: camera } = cameraRef;
      const { current: renderer } = rendererRef;
      const { current: orthographic } = orthographicRef;
      
      if (camera && renderer && orthographic) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
        orthographic.left = -window.innerWidth / 200;
        orthographic.right = window.innerWidth / 200;
        orthographic.top = window.innerHeight / 200;
        orthographic.bottom = -window.innerHeight / 200;
        orthographic.updateProjectionMatrix();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current && rendererRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);
  
  useEffect(() => {
    updateVectors();
  }, [vectors]);

  const handleVectorChange = (vectorName, component, value) => {
    setVectors(prev => ({
      ...prev,
      [vectorName]: {
        ...prev[vectorName],
        [component]: parseFloat(value) || 0
      }
    }));

    // Calculate vw (v + w) when either v or w changes
    if (vectorName === 'v' || vectorName === 'w') {
      setVectors(prev => {
        const newVw = {
          x: prev.v.x + prev.w.x,
          y: prev.v.y + prev.w.y,
          z: prev.v.z + prev.w.z
        };
        return { ...prev, vw: newVw };
      });
    }
  };
  
  return (
    <div className="flex flex-col items-center p-4">
      <div ref={canvasRef} className="w-full h-[600px]" />
      
      <div className="flex gap-8 mt-4">
        <div className="space-y-4">
          <h3 className="text-yellow-400">Vector v</h3>
          {['x', 'y', 'z'].map(component => (
            <input
              key={`v-${component}`}
              type="number"
              value={vectors.v[component]}
              onChange={e => handleVectorChange('v', component, e.target.value)}
              className="block w-24 p-2 border rounded"
            />
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-fuchsia-400">Vector w</h3>
          {['x', 'y', 'z'].map(component => (
            <input
              key={`w-${component}`}
              type="number"
              value={vectors.w[component]}
              onChange={e => handleVectorChange('w', component, e.target.value)}
              className="block w-24 p-2 border rounded"
            />
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-cyan-400">Vector v+w</h3>
          {['x', 'y', 'z'].map(component => (
            <input
              key={`vw-${component}`}
              type="number"
              value={vectors.vw[component]}
              disabled
              className="block w-24 p-2 border rounded bg-gray-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VectorVisualization;