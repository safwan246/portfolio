"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Five separate springs with decreasing stiffness and increasing mass.
  // This creates a smooth "slinky" or trailing liquid ghost effect.
  const smoothX1 = useSpring(cursorX, { damping: 20, stiffness: 600, mass: 0.1 });
  const smoothY1 = useSpring(cursorY, { damping: 20, stiffness: 600, mass: 0.1 });

  const smoothX2 = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.2 });
  const smoothY2 = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.2 });

  const smoothX3 = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.3 });
  const smoothY3 = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.3 });

  const smoothX4 = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.4 });
  const smoothY4 = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.4 });

  const smoothX5 = useSpring(cursorX, { damping: 30, stiffness: 100, mass: 0.5 });
  const smoothY5 = useSpring(cursorY, { damping: 30, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="hidden md:block pointer-events-none z-[9999]">
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[10004]"
        style={{ x: smoothX1, y: smoothY1, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
          width: isHovering ? 60 : 14,
          height: isHovering ? 60 : 14,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[10003]"
        style={{ x: smoothX2, y: smoothY2, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (isHovering ? 0.1 : 0.8) : 0,
          width: isHovering ? 50 : 10,
          height: isHovering ? 50 : 10
        }}
      />
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[10002]"
        style={{ x: smoothX3, y: smoothY3, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (isHovering ? 0.2 : 0.6) : 0,
          width: isHovering ? 40 : 8,
          height: isHovering ? 40 : 8
        }}
      />
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[10001]"
        style={{ x: smoothX4, y: smoothY4, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (isHovering ? 0.3 : 0.4) : 0,
          width: isHovering ? 30 : 6,
          height: isHovering ? 30 : 6
        }}
      />
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[10000]"
        style={{ x: smoothX5, y: smoothY5, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (isHovering ? 0.4 : 0.2) : 0,
          width: isHovering ? 20 : 4,
          height: isHovering ? 20 : 4
        }}
      />
    </div>
  );
}
