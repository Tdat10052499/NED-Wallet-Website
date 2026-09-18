import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Sparkles, Shield, Cpu, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { AppMockupScreens } from '../assets/AppMockupScreens';
import { PhoneTiltWrapper } from './PhoneTiltWrapper';
import { RevealOnScroll } from './RevealOnScroll';

interface HeroSceneProps {
  onNavigate?: (path: string) => void;
}

interface FloatingCubeData {
  mesh: THREE.Mesh;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  floatSpeed: number;
  floatAmplitude: number;
  initialY: number;
}

export const HeroScene: React.FC<HeroSceneProps> = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // Phone screen showcase state: 'sim' (interactive simulator) or 'real' (real app screenshots)
  const [screenMode, setScreenMode] = useState<'sim' | 'real'>('sim');
  const [currentRealIndex, setCurrentRealIndex] = useState(0);

  const realScreens = [
    { id: 'home', label: 'Trang chủ', title: 'Ví N.E.D - Màn hình chính', src: siteConfig.screenshots.dashboardHome },
    { id: 'transfer', label: 'Chuyển tiền', title: 'Trung tâm chuyển tiền', src: siteConfig.screenshots.transferCenter },
    { id: 'lucky', label: 'Tung đồng xu', title: 'Phòng Lì Xì Tung Đồng Xu', src: siteConfig.screenshots.luckyCoin },
    { id: 'split', label: 'Shake & Split', title: 'Lắc chia tiền', src: siteConfig.screenshots.shakeSplit },
  ];

  // Full-section Three.js floating cubes background
  useEffect(() => {
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
    const floatingCubes: FloatingCubeData[] = [];
    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    try {
      scene = new THREE.Scene();
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 750;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 16);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // Native Three.js 3D Depth Fog (Organically softens cubes in distance without GPU overhead)
      scene.fog = new THREE.Fog(0x0e0625, 12, 32);

      // Neo-brutalist Lighting (Crisp highlights and contrast)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xb497f0, 1.8);
      dirLight1.position.set(10, 15, 10);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x08cee3, 1.3);
      dirLight2.position.set(-10, -10, 8);
      scene.add(dirLight2);

      // Neo-brutalist Color Palette for Cubes
      const colorPalette = [
        0xb497f0, // Lavender
        0xd5ff00, // Lime
        0x08cee3, // Cyan
        0xfff3a6, // Pale Yellow
        0x2d1b54, // Deep purple accent
        0xf0ebdd, // Warm cream
      ];

      // Edge material with distinct black neo-brutalist wireframe outline
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0x111111,
        transparent: true,
        opacity: 0.65,
      });
      materialsToDispose.push(edgeMaterial);

      // Scatter 65 floating cubes across the ENTIRE Hero section for rich visual depth
      const cubeCount = 65;
      for (let i = 0; i < cubeCount; i++) {
        // Size variation
        const sizeX = 0.5 + Math.random() * 0.75;
        const sizeY = 0.5 + Math.random() * 0.75;
        const sizeZ = 0.5 + Math.random() * 0.75;

        const geo = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
        geometriesToDispose.push(geo);

        const color = colorPalette[i % colorPalette.length];
        // Vibrant, clear neo-brutalist material
        const mat = new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.4,
          metalness: 0.08,
          transparent: true,
          opacity: 0.72,
        });
        materialsToDispose.push(mat);

        const mesh = new THREE.Mesh(geo, mat);

        // Add distinct black neo-brutalist wireframe outline to every cube!
        const edges = new THREE.EdgesGeometry(geo);
        geometriesToDispose.push(edges);
        const line = new THREE.LineSegments(edges, edgeMaterial);
        mesh.add(line);

        // Position across entire section (left, right, top, bottom, depth)
        // Spread evenly across the full width
        const colRatio = i / cubeCount;
        const posX = -16 + colRatio * 32 + (Math.random() - 0.5) * 4;
        const posY = -7 + Math.random() * 14;
        const posZ = -6 + Math.random() * 10;

        mesh.position.set(posX, posY, posZ);
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        scene.add(mesh);

        floatingCubes.push({
          mesh,
          rotSpeedX: (Math.random() - 0.5) * 0.014,
          rotSpeedY: (Math.random() - 0.5) * 0.016,
          rotSpeedZ: (Math.random() - 0.5) * 0.012,
          floatSpeed: 0.7 + Math.random() * 1.3,
          floatAmplitude: 0.25 + Math.random() * 0.45,
          initialY: posY,
        });
      }

      // Parallax interaction based on mouse movement across section
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', onMouseMove);

      // Handle Resize to always cover full section
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
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Smooth camera parallax
        targetX += (mouseX * 0.8 - targetX) * 0.04;
        targetY += (mouseY * 0.5 - targetY) * 0.04;
        camera.position.x = targetX;
        camera.position.y = targetY;
        camera.lookAt(0, 0, 0);

        // Animate each floating cube
        floatingCubes.forEach((cube) => {
          cube.mesh.rotation.x += cube.rotSpeedX;
          cube.mesh.rotation.y += cube.rotSpeedY;
          cube.mesh.rotation.z += cube.rotSpeedZ;
          cube.mesh.position.y =
            cube.initialY + Math.sin(elapsed * cube.floatSpeed) * cube.floatAmplitude;
        });

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
        geometriesToDispose.forEach((g) => g.dispose());
        materialsToDispose.forEach((m) => m.dispose());
      };
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  const handleHeroDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-demo-guide'));
  };

  const handleHeroSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[720px] bg-brand-deepPurple text-brand-offWhite pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack overflow-hidden flex items-center"
    >
      {/* 1. Full-Section Three.js 3D Floating Cubes Canvas (Ultra-smooth 60FPS) */}
      {webGlSupported && (
        <div
          ref={canvasContainerRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        />
      )}

      {/* 2. High-Performance Text Contrast Shield (Keeps headline 100% crisp & readable while letting 3D cubes shine through) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-deepPurple/80 via-brand-deepPurple/40 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Background Neo-Brutalist Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #B497F0 1px, transparent 1px),
            linear-gradient(to bottom, #B497F0 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headlines, CTAs, Trust Points */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Mascot Companion Pill */}
          <RevealOnScroll animation="fade-up" delay={40}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-offWhite mb-5 shadow-brutal-xs">
              <img
                src={siteConfig.mascots.waving}
                alt="NED Teddy"
                className="w-7 h-7 object-contain flex-shrink-0 -my-1"
              />
              <span className="text-xs font-black tracking-wide text-brand-lavender">
                N.E.D Teddy
              </span>
              <span className="text-stone-400 text-xs">•</span>
              <span className="text-xs font-bold text-stone-200">
                {t.mascot.heroCompanion}
              </span>
            </div>
          </RevealOnScroll>

          {/* Main Headline */}
          <RevealOnScroll animation="fade-up" delay={80}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-offWhite tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
              {t.hero.headline}
            </h1>
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll animation="fade-up" delay={160}>
            <p className="text-base sm:text-lg lg:text-xl text-stone-300 font-medium max-w-2xl leading-relaxed mb-8">
              {t.hero.description}
            </p>
          </RevealOnScroll>

          {/* Action CTAs */}
          <RevealOnScroll animation="fade-up" delay={240}>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleHeroDemoClick}
                className="btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleHeroSecondaryClick}
                className="btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>

          {/* Trust Points */}
          <RevealOnScroll animation="fade-up" delay={320} className="w-full">
            <div className="mt-10 pt-6 border-t-2 border-brand-lavender/20 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-stone-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <span>{t.hero.trustPill1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>{t.hero.trustPill2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-lavender flex-shrink-0" />
                <span>{t.hero.trustPill3}</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Interactive Phone Mockup & Real App Showcase with Mascot */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <RevealOnScroll animation="pop" delay={180}>
            {/* Mascot Teddy floating on the right side of phone (Zero overlap with top controls/badges) */}
            <div className="absolute bottom-24 -right-6 sm:-right-12 z-40 flex flex-col items-center gap-1.5 pointer-events-none animate-floatBob">
              <div className="bg-brand-paleYellow text-brand-inkBlack border-2 border-brand-inkBlack rounded-2xl px-3 py-1.5 shadow-brutal-xs text-xs font-black flex items-center gap-1 whitespace-nowrap">
                <span>Chào bạn! Mình là Teddy 💜</span>
              </div>
              <img
                src={siteConfig.mascots.waving}
                alt="NED Teddy Waving Mascot"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                loading="eager"
              />
            </div>

            <PhoneTiltWrapper className="w-[310px] xs:w-[330px] sm:w-[350px] h-[640px] sm:h-[670px]">
              {/* Phone Frame Container */}
              <div className="relative w-full h-full rounded-[48px] bg-brand-inkBlack border-4 border-brand-inkBlack p-2.5 sm:p-3 [transform-style:preserve-3d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
                {/* Mode Selector Pill inside Phone or at Top */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center bg-brand-inkBlack/90 border border-brand-lavender/30 rounded-full p-0.5 shadow-brutal-xs">
                  <button
                    type="button"
                    onClick={() => setScreenMode('sim')}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${
                      screenMode === 'sim'
                        ? 'bg-brand-lime text-brand-inkBlack shadow-brutal-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Bấm thử (Sim)
                  </button>
                  <button
                    type="button"
                    onClick={() => setScreenMode('real')}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all cursor-pointer ${
                      screenMode === 'real'
                        ? 'bg-brand-cyan text-brand-inkBlack shadow-brutal-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Giao diện thật
                  </button>
                </div>

                {/* Phone Screen Container with Full User Interaction */}
                <div className="relative w-full h-full rounded-[36px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream">
                  {screenMode === 'sim' ? (
                    <AppMockupScreens activeTab="send" />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between bg-[#0e0625] text-white pt-10 select-none">
                      {/* Real App Screenshot Showcase */}
                      <div className="relative flex-1 overflow-hidden">
                        <img
                          src={realScreens[currentRealIndex].src}
                          alt={realScreens[currentRealIndex].title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      {/* Screen Navigation Strip */}
                      <div className="p-2.5 bg-brand-inkBlack/95 border-t-2 border-brand-inkBlack flex items-center justify-between gap-1 z-20">
                        {realScreens.map((screen, idx) => (
                          <button
                            key={screen.id}
                            type="button"
                            onClick={() => setCurrentRealIndex(idx)}
                            className={`flex-1 py-1 px-1 rounded-lg text-[9px] font-black border transition-all truncate cursor-pointer ${
                              currentRealIndex === idx
                                ? 'bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs'
                                : 'bg-brand-darkSurface text-stone-300 border-stone-700 hover:bg-stone-800'
                            }`}
                          >
                            {screen.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Neo-Brutalist Callout Pill (Top Right - 3D Pop Out) */}
                <div className="absolute -top-3.5 right-2 sm:right-4 pointer-events-none z-30 [transform:translateZ(28px)]">
                  <div className="bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5 animate-floatBob">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Solana Devnet</span>
                  </div>
                </div>

                {/* Floating Neo-Brutalist Interactive Badge (Bottom Left - 3D Pop Out) */}
                <div className="absolute -bottom-3.5 left-2 sm:left-4 pointer-events-none z-30 [transform:translateZ(28px)]">
                  <div className="bg-brand-cyan text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl px-3 sm:px-3.5 py-1.5 shadow-brutal font-black text-xs flex items-center gap-1.5">
                    <span>{screenMode === 'sim' ? 'Bấm trực tiếp để thử nghiệm' : 'Màn hình ứng dụng thực tế'}</span>
                  </div>
                </div>
              </div>
            </PhoneTiltWrapper>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
