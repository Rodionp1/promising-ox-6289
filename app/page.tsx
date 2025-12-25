"use client";

import React from "react";
import GreenCircle from "./GreenCircle";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-6 bg-white shadow-sm flex justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Green Circle Demo</h1>
      </header>
      <section className="flex flex-col items-center mt-12">
        <GreenCircle size={120} />
        <p className="mt-6 text-lg text-gray-700">This is a green circle rendered with Tailwind CSS.</p>
      </section>
      <footer className="w-full mt-auto py-4 bg-white border-t text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Green Circle Demo
      </footer>
    </main>
  );
}
