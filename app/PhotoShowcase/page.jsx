"use client";

import PhotoShowcase from "../components/PhotoShowcase";

export default function PhotoShowcasePage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-white text-3xl font-light tracking-tight mb-12 text-center">
          Photo Showcase
        </h1>
        <PhotoShowcase />
      </div>
    </div>
  );
}
