"use client";

import { useState } from "react";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { Calendar, Copyright, ExternalLink, Play } from "lucide-react";
import { format } from "date-fns";

import { APODImage } from "@/types/apod";

interface APODCardProps {
  apod: APODImage;
  variant?: "default" | "featured" | "compact";
}

export default function APODCard({ apod, variant = "default" }: APODCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formattedDate = format(new Date(apod.date), "MMMM dd, yyyy");
  const isVideo = apod.media_type === "video";
  const displayUrl = isVideo ? apod.thumbnail_url || apod.url : apod.url;
  const hdUrl = apod.hdurl || apod.url;

  const cardClass =
    variant === "featured"
      ? "col-span-2 row-span-1"
      : variant === "compact"
        ? "max-w-sm"
        : "";

  return (
    <>
      <Card
        isPressable
        className={`relative overflow-hidden group ${cardClass}`}
        onPress={onOpen}
      >
        <CardBody className="p-0">
          {isVideo ? (
            <div className="relative w-full aspect-video">
              <iframe
                allowFullScreen
                className="w-full h-full"
                src={apod.url}
                title={apod.title}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/30 group-hover:bg-black/10">
                <Play className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
          ) : (
            <div className="relative">
              <Image
                removeWrapper
                alt={apod.title}
                className={`w-full object-cover rounded-t-md transition-all duration-300 ${
                  imageLoading ? "blur-sm" : "blur-0"
                }`}
                src={displayUrl}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <h3 className="text-lg font-semibold text-white line-clamp-2">
              {apod.title}
            </h3>
            <p className="flex items-center gap-1 mt-1 text-sm text-default-300">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </p>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col items-start gap-3">
          {apod.copyright && (
            <div className="flex items-center gap-1 text-sm text-default-500">
              <Copyright className="w-3 h-3" />
              {apod.copyright}
            </div>
          )}

          <p className="text-sm text-default-600 line-clamp-3">
            {apod.explanation}
          </p>

          {/* {apod.concepts && Object.keys(apod.concepts).length > 0 && (
            <div className="flex flex-wrap items-start gap-2">
              <Tag className="w-3 h-3 mt-1 text-default-500" />
              {Object.values(apod.concepts)
                .slice(0, 3)
                .map((concept, index) => (
                  <Badge key={index} color="primary" size="sm" variant="flat">
                    {concept}
                  </Badge>
                ))}
              {Object.keys(apod.concepts).length > 3 && (
                <Badge size="sm" variant="flat">
                  +{Object.keys(apod.concepts).length - 3} more
                </Badge>
              )}
            </div>
          )} */}

          <div className="flex w-full gap-2 pt-2">
            <Button
              fullWidth
              endContent={<ExternalLink className="w-3 h-3" />}
              size="sm"
              variant="flat"
              onPress={() => window.open(apod.url, "_blank")}
            >
              View
            </Button>

            {apod.hdurl && (
              <Button
                fullWidth
                color="primary"
                endContent={<ExternalLink className="w-3 h-3" />}
                size="sm"
                variant="light"
                onPress={() => window.open(apod.hdurl, "_blank")}
              >
                HD Version
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        scrollBehavior="inside"
        size="full"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                {apod.title}
              </ModalHeader> */}
              <ModalBody className="p-0 rounded-t-none">
                <Image
                  removeWrapper
                  alt={apod.title}
                  className="object-contain w-full h-full -z-10"
                  src={hdUrl}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
