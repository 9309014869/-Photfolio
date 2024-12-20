import React, { useRef, useEffect } from 'react';

const TurbulentWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Wave parameters
    const lines = 40;
    const step = canvas.width / lines;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(i * step, 0);

        for (let j = 0; j < canvas.height; j += 5) {
          const distanceFromCenter = Math.abs(i * step - canvas.width / 2);
          const wave = Math.sin(j * 0.01 + frame * 0.02) * 20;
          const turbulence = Math.sin(distanceFromCenter * 0.01) * 30;
          
          ctx.lineTo(
            i * step + wave + (turbulence * Math.sin(frame * 0.02)),
            j
          );
        }

        ctx.stroke();
      }

      frame++;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-50"
    />
  );
};

export default TurbulentWave;