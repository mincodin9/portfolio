"use client";

import { useRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "../_styles/experienceTabs.module.css"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active: boolean;
};

export default function RippleTabButton({
  active,
  children,
  className,
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const createRipple = (e: React.PointerEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;

    const old = btn.querySelector(`.${styles.ripple}`);
    if (old) old.remove();

    const span = document.createElement("span");
    span.className = styles.ripple;
    span.style.setProperty("--x", x);
    span.style.setProperty("--y", y);

    btn.appendChild(span);
    span.addEventListener("animationend", () => span.remove());
  };

  return (
    <button
      ref={ref}
      {...props}
      className={`${styles.tab} ${active ? styles.active : ""}`}
      onPointerDown={createRipple}
      role="tab"
      aria-selected={active}
    >
      {children}
    </button>
  );
}