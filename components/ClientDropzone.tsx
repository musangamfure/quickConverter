"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "./ui/skeleton";

const ClientDropzone = dynamic(() => import("@/components/dropzone"), {
  ssr: false,
  loading: () => <Skeleton className="max-w-4xl h-52 rounded-3xl" />,
});

export default ClientDropzone;
