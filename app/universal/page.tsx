"use client";

import Dropzone from "@/components/dropzone";

export default function Universal() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Convert any file—image, audio, or video—instantly and without limits,
          right from your browser. Fast, secure, and hassle-free, our Free
          Unlimited File Converter gives you the power to transform files to any
          format with ease, no downloads or file size restrictions needed.
        </p>
      </div>

      <Dropzone />
    </div>
  );
}
