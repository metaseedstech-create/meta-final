import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeGem = ({ hexColor, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const size = container.clientWidth || 84;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    
    // Clear any existing children (React strict mode safety)
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Faceted "gemstone" shape — low-poly icosahedron reads as a cut stone
    const geometry = new THREE.IcosahedronGeometry(1.3, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: hexColor,
      metalness: 0.15,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.92,
      emissive: hexColor,
      emissiveIntensity: 0.25,
      flatShading: true
    });
    const gem = new THREE.Mesh(geometry, material);
    scene.add(gem);

    // Faint wireframe shell just outside the gem for extra facet definition
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.34, 0),
      new THREE.MeshBasicMaterial({ color: hexColor, wireframe: true, transparent: true, opacity: 0.18 })
    );
    gem.add(wire);

    // Lighting: one white key light for highlights, one colored rim light for glow
    const key = new THREE.PointLight(0xffffff, 1.4);
    key.position.set(3, 3, 4);
    scene.add(key);

    const rim = new THREE.PointLight(hexColor, 1.6);
    rim.position.set(-3, -2, -3);
    scene.add(rim);

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    let frameId;
    function animate() {
      gem.rotation.y += 0.012;
      gem.rotation.x += 0.005;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    // Keep it crisp if the card gets resized
    const resizeObserver = new ResizeObserver(entries => {
      const s = entries[0].contentRect.width;
      if (s > 0) {
        renderer.setSize(s, s);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [hexColor]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      {/* We apply the soft ambient glow via a pseudo-element logic or a div behind the canvas */}
      <div 
        className="absolute inset-[-30%] rounded-full opacity-55 filter blur-md -z-10"
        style={{
          background: `radial-gradient(circle, ${new THREE.Color(hexColor).getStyle()} 0%, transparent 65%)`
        }}
      />
    </div>
  );
};
