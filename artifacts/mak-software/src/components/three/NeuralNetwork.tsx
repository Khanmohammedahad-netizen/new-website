import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/lib/theme';

// Check WebGL availability without instantiating Three.js
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const ctx =
      canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!ctx) return false;
    // Clean up
    const ext = (ctx as WebGLRenderingContext).getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
    return true;
  } catch {
    return false;
  }
}

// CSS fallback when WebGL is not available
function CSSParticleFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(45,90,61,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(26,61,43,0.3) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(58,122,82,0.2) 0%, transparent 50%)',
        }}
      />
      {Array.from({ length: 60 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            backgroundColor:
              i % 3 === 0 ? '#2D5A3D' : i % 3 === 1 ? '#3A7A52' : '#1A3D2B',
            opacity: 0.2 + (i % 5) * 0.06,
            animation: `float-particle-${i % 4} ${6 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.3) % 5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-25px); }
        }
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(25px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}

// Lazy-load the heavy Three.js canvas only if WebGL is available
const ThreeCanvas = React.lazy(() => import('./ThreeCanvas'));

export default function NeuralNetwork() {
  const { theme } = useTheme();
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const resolvedTheme =
    theme === 'system'
      ? typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  const color = resolvedTheme === 'dark' ? '#2D5A3D' : '#1A3D2B';

  if (webGLSupported === null) return null; // Still checking

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {webGLSupported ? (
        <React.Suspense fallback={<CSSParticleFallback />}>
          <ThreeCanvas color={color} />
        </React.Suspense>
      ) : (
        <CSSParticleFallback />
      )}
    </div>
  );
}
