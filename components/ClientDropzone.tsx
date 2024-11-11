"use client";

import dynamic from "next/dynamic";

const ClientDropzone = dynamic(() => import("@/components/dropzone"), {
  ssr: false,
});

export default ClientDropzone;
