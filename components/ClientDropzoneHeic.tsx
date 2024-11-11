"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

const ClientDropzoneHeic = dynamic(() => import("@/components/dropzoneheic"), {
  ssr: false,
  loading: () => <Skeleton className="max-w-4xl h-52 rounded-3xl" />,
});

export default ClientDropzoneHeic;
