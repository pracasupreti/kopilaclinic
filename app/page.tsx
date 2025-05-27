import Image from "next/image";
import React from "react";
import "./globals.css";

export default function page() {
  return (
    <div className="container mx-auto p-4 m-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg mb-4">
        This is a simple website built with Next.js and Tailwind CSS.
      </p>
      <p className="text-lg mb-4">
        Explore the features and enjoy your stay!
      </p>
    </div>
  );
}