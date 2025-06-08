"use client";
import { Camera } from "lucide-react";
import { Chip } from "@heroui/chip";

import ImageGallery from "@/components/features/ImageGallery";
import { InfoSection } from "@/components/features/InfoSection";

export default function APODPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container px-6 py-12 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <Chip
            className="mb-6"
            color="primary"
            startContent={<Camera className="w-4 h-4 ml-2 mr-1" />}
            variant="flat"
          >
            <span>NASA APOD Service</span>
          </Chip>

          <h1 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Astronomy Picture of the Day
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-default-600">
            Discover the cosmos through NASA&apos;s daily collection of
            astronomical images.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="flex justify-center mb-12">
          <ImageGallery />
        </div>

        {/* Info Section */}
        <InfoSection />
      </div>
    </div>
  );
}
