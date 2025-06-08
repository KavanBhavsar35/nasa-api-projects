// File: components/features/ImageGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { Calendar, Dice6, AlertCircle } from "lucide-react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Spinner } from "@heroui/spinner";
import { DatePicker } from "@heroui/date-picker";
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
  today,
} from "@internationalized/date";

import StaggeredFadeInItem from "../StaggeredFadeInItem";

import APODCard from "./APODCard";

import { APODImage } from "@/types/apod";
import {
  fetchTodayAPOD,
  fetchRandomAPOD,
  fetchAPODByDate,
} from "@/app/actions/apod";

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  500: 1,
};

export default function ImageGallery() {
  const [images, setImages] = useState<APODImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  useEffect(() => {
    loadTodayImage();
  }, []);

  const loadTodayImage = async () => {
    try {
      setLoading(true);
      setError(null);
      const todayImage = await fetchTodayAPOD();

      setImages([todayImage]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load today's image");
    } finally {
      setLoading(false);
    }
  };

  const loadRandomImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const randomImages = await fetchRandomAPOD(10);

      setImages(randomImages);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load random images");
    } finally {
      setLoading(false);
    }
  };

  const loadImageByDate = async (date: string) => {
    try {
      setLoading(true);
      setError(null);
      const dateImage = await fetchAPODByDate(date);

      setImages([dateImage]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load image for selected date");
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (date: CalendarDate | null) => {
    if (!date) {
      setError("Invalid date selected");

      return;
    }

    setSelectedDate(date.toString().split("T")[0]);
    loadImageByDate(date.toString().split("T")[0]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner color="primary" label="Loading cosmic wonders..." />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="max-w-md mx-auto">
        <CardBody className="p-6 text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-danger" />
          <h3 className="mb-2 text-lg font-semibold">
            Oops! Something went wrong
          </h3>
          <p className="mb-4 text-default-500">{error}</p>
          <Button variant="flat" onPress={loadTodayImage}>
            Try Again
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="top-0 z-10 flex flex-wrap items-center gap-2 px-4 py-3 border-b bg-content1">
        <Button variant="flat" onPress={loadTodayImage}>
          <Calendar className="w-4 h-4 mr-1" />
          Today
        </Button>
        <Button variant="flat" onPress={loadRandomImages}>
          <Dice6 className="w-4 h-4 mr-1" />
          Random
        </Button>
        {/* <Input
          max={new Date().toISOString().split("T")[0]}
          min="1995-06-16"
          size="sm"
          type="date"
          value={selectedDate}
          /> */}
        <DatePicker
          showMonthAndYearPickers
          className="max-w-[284px]"
          defaultValue={today(getLocalTimeZone())}
          label="Date"
          labelPlacement="outside-left"
          maxValue={today(getLocalTimeZone())}
          value={parseDate(selectedDate)}
          onChange={(date) => handleDateChange(date)}
        />
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 p-4"
        columnClassName="space-y-4"
      >
        {images.map((apod, i) => (
          <StaggeredFadeInItem key={i} index={i}>
            <APODCard apod={apod} />
          </StaggeredFadeInItem>
        ))}
      </Masonry>
    </div>
  );
}
