"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function NavHeader({
  links,
  onLinkClick,
  isScrolled,
}: {
  links: { name: string; path: string }[];
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
  isScrolled: boolean;
}) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <ul
      className={cn(
        "relative mx-auto flex w-fit rounded-full border p-1 transition-colors duration-300",
        isScrolled
          ? "border-slate-200 bg-white shadow-sm"
          : "border-white/20 bg-black/20 backdrop-blur-md",
      )}
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setHoveredPath(null);
      }}
    >
      {links.map((link) => (
        <Tab
          key={link.path}
          setPosition={setPosition}
          setHoveredPath={setHoveredPath}
          isHovered={hoveredPath === link.path}
          isScrolled={isScrolled}
          path={link.path}
          onClick={(e) => onLinkClick(e, link.path)}
        >
          {link.name}
        </Tab>
      ))}

      <Cursor position={position} isScrolled={isScrolled} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  setHoveredPath,
  isHovered,
  isScrolled,
  path,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  setHoveredPath: React.Dispatch<React.SetStateAction<string | null>>;
  isHovered: boolean;
  isScrolled: boolean;
  path: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        setHoveredPath(path);
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer"
    >
      <Link
        to={path}
        onClick={onClick}
        className={cn(
          "block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 md:px-5 md:py-2.5 md:text-sm",
          isScrolled
            ? isHovered
              ? "text-white" // Scrolled + Hovered: Cursor is black, Text is white
              : "text-slate-700" // Scrolled + Normal: Background is white, Text is dark gray
            : isHovered
            ? "text-black" // Not Scrolled + Hovered: Cursor is white, Text is black
            : "text-white", // Not Scrolled + Normal: Background is dark, Text is white
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
  isScrolled,
}: {
  position: any;
  isScrolled: boolean;
}) => {
  return (
    <motion.li
      animate={position}
      className={cn(
        "absolute z-0 h-[30px] md:h-[40px] rounded-full",
        isScrolled ? "bg-black" : "bg-white",
      )}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
};

export default NavHeader;
