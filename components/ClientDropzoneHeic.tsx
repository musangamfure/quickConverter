import dynamic from "next/dynamic";

const ClientDropzoneHeic = dynamic(() => import("@/components/dropzoneheic"), {
  ssr: false,
});

export default ClientDropzoneHeic;
