import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Sparkles, Shield, Cpu, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { AppMockupScreens } from '../assets/AppMockupScreens';

interface HeroSceneProps {
  onNavigate: (path: string) => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onNavigate }) => {
  const { t } = useI18n();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // Check WebGL and run Three.js canvas
  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebGlSupported(false);
      return;
    }

    const container = canvasContainerRef.current;
    if (!container) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    const floatingMeshes: THREE.Mesh[] = [];

    try {
      scene = new THREE.Scene();
      const width = container.clientWidth || 480;
      const height = container.clientHeight || 560;

      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0, 8.5);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Matte lighting setup - readable geometry
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xb497f0, 1.8);
      dirLight1.position.set(5, 8, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x08cee3, 1.0);
      dirLight2.position.set(-5, -4, 3);
      scene.add(dirLight2);

      // Main Phone Chassis 3D Model
      const phoneGroup = new THREE.Group();
      scene.add(phoneGroup);

      // Phone Body
      const bodyGeo = new THREE.BoxGeometry(3.0, 5.8, 0.32);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1a1035,
        roughness: 0.4,
        metalness: 0.1,
      });
      const phoneBody = new THREE.Mesh(bodyGeo, bodyMat);
      phoneGroup.add(phoneBody);

      // Screen Border Trim
      const trimGeo = new THREE.BoxGeometry(2.88, 5.68, 0.34);
      const trimMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.8,
      });
      const trimMesh = new THREE.Mesh(trimGeo, trimMat);
      phoneGroup.add(trimMesh);

      // Screen Matte Inset (Lavender/Cream preview)
      const screenGeo = new THREE.PlaneGeometry(2.7, 5.4);
      const screenMat = new THREE.MeshBasicMaterial({
        color: 0xf0ebdd,
      });
      const screenMesh = new THREE.Mesh(screenGeo, screenMat);
      screenMesh.position.z = 0.18;
      phoneGroup.add(screenMesh);

      // Floating Neo-Brutalist Geometric Tokens
      // Token 1: Lavender Cube
      const cubeGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
      const cubeMat = new THREE.MeshStandardMaterial({ color: 0xb497f0, roughness: 0.3 });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(-2.2, 1.6, 0.8);
      floatingMeshes.push(cube);
      scene.add(cube);

      // Token 2: Lime Cylinder
      const cylGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 16);
      const cylMat = new THREE.MeshStandardMaterial({ color: 0xd5ff00, roughness: 0.2 });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      cyl.position.set(2.2, -1.8, 0.5);
      floatingMeshes.push(cyl);
      scene.add(cyl);

      // Token 3: Cyan Diamond / Octahedron
      const octGeo = new THREE.OctahedronGeometry(0.45);
      const octMat = new THREE.MeshStandardMaterial({ color: 0x08cee3, roughness: 0.3 });
      const oct = new THREE.Mesh(octGeo, octMat);
      oct.position.set(2.1, 2.0, 0.4);
      floatingMeshes.push(oct);
      scene.add(oct);

      // Mouse Parallax Interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };

      window.addEventListener('mousemove', onMouseMove);

      // Handle Resize
      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth interpolation for parallax
        targetX += (mouseX * 0.35 - targetX) * 0.05;
        targetY += (mouseY * 0.25 - targetY) * 0.05;

        // Base phone gentle breathing tilt
        phoneGroup.rotation.y = -0.22 + targetX + Math.sin(elapsedTime * 0.8) * 0.05;
        phoneGroup.rotation.x = 0.12 - targetY + Math.cos(elapsedTime * 0.8) * 0.03;
        phoneGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.1;

        // Animate floating tokens
        cube.rotation.x = elapsedTime * 0.4;
        cube.rotation.y = elapsedTime * 0.5;
        cube.position.y = 1.6 + Math.sin(elapsedTime * 1.5) * 0.15;

        cyl.rotation.z = elapsedTime * 0.6;
        cyl.position.y = -1.8 + Math.cos(elapsedTime * 1.3) * 0.15;

        oct.rotation.x = elapsedTime * 0.5;
        oct.rotation.y = elapsedTime * 0.7;
        oct.position.y = 2.0 + Math.sin(elapsedTime * 1.7) * 0.15;

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        bodyGeo.dispose();
        bodyMat.dispose();
        trimGeo.dispose();
        trimMat.dispose();
        screenGeo.dispose();
        screenMat.dispose();
        cubeGeo.dispose();
        cubeMat.dispose();
        cylGeo.dispose();
        cylMat.dispose();
        octGeo.dispose();
        octMat.dispose();
      };
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  const handleHeroDemoClick = () => {
    const el = document.querySelector('#demo');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeroBuilderClick = () => {
    onNavigate('/builders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden">
      {/* Background Subtle Neo-Brutalist Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime border border-brand-inkBlack animate-ping" />
            <span>{t.hero.statusBadge}</span>
          </div>

          {/* Main Headline with clamp and deliberate line breaks */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
            {t.hero.headline}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleHeroDemoClick}
              className="btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleHeroBuilderClick}
              className="btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust points without fabricated stats */}
          <div className="mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>Thao tác quen thuộc</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>USDC trên Solana Devnet</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-lavender flex-shrink-0" />
              <span>Trải nghiệm qua Expo</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Phone & Real UI Presentation */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Phone Frame Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18] rounded-[44px] bg-brand-inkBlack border-4 border-brand-inkBlack p-3 shadow-brutal-xl">
            {/* Matte Bezel Inset */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream">
              {/* Authentic Screen Display */}
              <AppMockupScreens activeTab="send" />
            </div>

            {/* Floating Neo-Brutalist Callout Pill (Top Right) */}
            <div className="absolute -top-4 -right-4 bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solana Devnet</span>
            </div>

            {/* Floating Neo-Brutalist Callout Pill (Bottom Left) */}
            <div className="absolute -bottom-4 -left-4 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5">
              <span>{t.hero.illustrationTag}</span>
            </div>
          </div>

          {/* ThreeJS Canvas Overlay / Background (Rendered behind phone if WebGL active) */}
          {webGlSupported && (
            <div
              ref={canvasContainerRef}
              className="absolute -inset-10 pointer-events-none opacity-40 -z-10"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
};
