// pages/index.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-3">
      <header className="text-center py-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Free Unlimited File Converter
        </h1>
        <p className="text-lg text-gray-600 mt-4 dark:text-white/80">
          Convert your images, audio, and video files quickly and efficiently.
          Now with a dedicated HEIC to JPEG tool.
        </p>
      </header>

      <main className="space-y-12">
        {/* General Conversion Tool */}
        <section className="bg-gray-100 shadow-lg p-8 rounded-lg max-w-3xl mx-auto  dark:bg-gray-800 dark:border-secondary-dark">
          <h2 className="text-2xl font-semibold text-gray-800">
            Universal File Converter
          </h2>
          <p className="text-gray-600 mt-2 dark:text-white/80">
            Convert between various file types: images, audio, video, and more.
            Supports formats like MP3, MP4, JPEG, PNG, and more.
          </p>
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/universal")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Open Universal Converter
            </button>
          </div>
        </section>

        {/* Dedicated HEIC to JPEG Tool */}
        <section className="bg-gray-100 shadow-lg p-8 rounded-lg max-w-3xl mx-auto  dark:bg-gray-800 dark:border-secondary-dark ">
          <h2 className="text-2xl font-semibold text-gray-800 ">
            Convert HEIC to JPEG
          </h2>
          <p className="text-gray-600 mt-2 dark:text-white/80">
            Use our dedicated tool to seamlessly convert HEIC images to JPEG
            format, perfect for sharing and viewing on any device.
          </p>
          <div className="mt-6 text-center">
            <Link href="/heic-to-jpeg">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Convert HEIC to JPEG
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-20 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Free Unlimited File Converter. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
