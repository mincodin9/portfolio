"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x0: number; //ripple center(x position)
  start: number; //creation time(ms)
  amp: number; //initial amplitude
};

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;

    //Active ripples(multiple can coexist)
    const ripples: Ripple[] = [];

    //Device pixel ratio for high-DPI rendering
    const dpr = window.devicePixelRatio || 1;

    //Sync canvas resolution with its displayed size
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    const ro = new ResizeObserver(setCanvasSize);
    ro.observe(canvas);
    setCanvasSize();

    const waterColor = "#6DC3BB";
    const emoji = "🐣";
    const emojiSize = 34;

    //Time tracking for frame-based animation
    let lastTime = performance.now();
    let lastWaveAt = 0;

    //Click horizontal movement state
    let emojiX = 0; //initialized to center on first frame
    let vx = 0;
    let targetVx = 0;

    //Return-to-center behavior(when calm)
    const calmAfterMs = 900;
    const returnSpring = 8;
    const maxReturnSpeed = 420;

    //Drift behavior(when waves exist)
    const driftSpeed = 260;
    const driftEasing = 10;

    //Wrap&respawn handling
    let hiddenUntil = 0;
    const respawnDelayMs = 1000;

    //Ripple emission throttling
    let lastEmit = 0;
    const emitEveryMs = 70;

    //Compute water surface offset using Gaussian-based ripples
    const rippleOffset = (x: number, now: number) => {
      let sum = 0;

      for (const r of ripples) {
        const age = (now - r.start) / 1000;
        const dist = x - r.x0;

        const spread = 36 + age * 140; //spatial expansion
        const temporal = Math.exp(-age / 1.25); //time decay
        const gaussian = Math.exp(
          -(dist * dist) / (2 * spread * spread)
        );
        const wobble = 0.92 + 0.08 * Math.sin(age * 6); //subtle motion

        sum += r.amp * gaussian * temporal * wobble;
      }

      return sum;
    };

    //Add a ripple and update drift direction
    const addRipple = (x0: number) => {
      const now = performance.now();
      lastWaveAt = now;

      ripples.push({ x0, start: now, amp: 16 });

      //Push chick away from ripple origin
      if (x0 < emojiX) targetVx = +driftSpeed;
      else if (x0 > emojiX) targetVx = -driftSpeed;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const now = performance.now();

      if (now - lastEmit > emitEveryMs) {
        addRipple(mx);
        lastEmit = now;
      }
    };

    canvas.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const now = performance.now();
      const rect = canvas.getBoundingClientRect();
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      //Initial placement
      if (emojiX === 0 && rect.width > 0) {
        emojiX = rect.width * 0.5;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);

      //Remove expired ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (now - ripples[i].start > 2600) ripples.splice(i, 1);
      }

      //Water surface baseline
      const baseY = rect.height * 0.70;

      //Fill water area
      ctx.beginPath();
      for (let x = 0; x <= rect.width; x++) {
        const y = baseY - rippleOffset(x, now);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      ctx.fillStyle = waterColor;
      ctx.fill();

      //Water surface stroke
      ctx.beginPath();
      for (let x = 0; x <= rect.width; x++) {
        const y = baseY - rippleOffset(x, now);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = waterColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      //Chick movement Logic
      const centerX = rect.width * 0.5;
      const calm = now - lastWaveAt > calmAfterMs;

      if (calm) {
        if (now < hiddenUntil) {
          hiddenUntil = 0;
        }
        const dx = centerX - emojiX;
        const desired = dx * returnSpring;
        targetVx = Math.max(
          -maxReturnSpeed, Math.min(maxReturnSpeed, desired)
        );
      }

      const easing = calm ? 12 : driftEasing;
      vx += (targetVx - vx) * Math.min(1, easing * dt);

      if (now >= hiddenUntil) {
        emojiX += vx * dt;


        if (!calm) {
          if (emojiX > rect.width + emojiSize) {
            hiddenUntil = now + respawnDelayMs;
            emojiX = -emojiSize;
          } else if (emojiX < -emojiSize) {
            hiddenUntil = now + respawnDelayMs;
            emojiX = rect.width + emojiSize;
          }
        } else {
          emojiX = Math.max(
            -emojiSize, 
            Math.min(rect.width + emojiSize, emojiX)
          );
        }

        const emojiY = (baseY - rippleOffset(emojiX, now)) - 22;

        ctx.font = `${emojiSize}px system-ui`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(emoji, emojiX, emojiY);
      } else {
        if (calm) {
          hiddenUntil = 0;
          emojiX = centerX;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "380px",
        display: "block",
        borderRadius: "25px",
      }}
    />
  );
}
