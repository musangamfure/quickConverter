import ClientDropzoneHeic from "@/components/dropzoneheic";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          HEIC to JPEG Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Convert your HEIC images to JPEG format instantly and without limits,
          right from your browser. Our fast, secure, and hassle-free HEIC to
          JPEG converter allows you to transform your iOS photos with ease, no
          downloads or file size restrictions needed.
        </p>
      </div>

      {/* Upload Box */}
      <ClientDropzoneHeic />
    </div>
  );
}
