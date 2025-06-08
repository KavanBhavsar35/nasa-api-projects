"use server";

import { APODImage } from "@/types/apod";

const API_KEY = process.env.NASA_API_KEY || "DEMO_KEY";
// const API_KEY = "DEMO_KEY";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export interface APODParams {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
  concept_tags?: boolean;
  hd?: boolean;
  thumbs?: boolean;
}

export async function fetchAPOD(
  params: APODParams = {},
): Promise<APODImage | APODImage[]> {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, value.toString());
    }
  });

  const response = await fetch(`${BASE_URL}?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`APOD API error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function fetchTodayAPOD(): Promise<APODImage> {
  const result = await fetchAPOD({ concept_tags: true, thumbs: true });

  // Result should be a single APODImage object or array with one item
  const data = Array.isArray(result) ? result[0] : result;

  // Remove concepts property safely
  const resp = { ...data, concepts: undefined };

  return resp;
}

export async function fetchRandomAPOD(count: number = 5): Promise<APODImage[]> {
  const result = await fetchAPOD({ count, concept_tags: true, thumbs: true });

  // Result should be an array of APODImage
  const data = Array.isArray(result) ? result : [result];

  // Remove concepts property from each item
  const resp = data.map((item) => ({ ...item, concepts: undefined }));

  return resp;
}

export async function fetchAPODByDate(date: string): Promise<APODImage> {
  const result = await fetchAPOD({ date, concept_tags: true, thumbs: true });

  const data = Array.isArray(result) ? result[0] : result;

  const resp = { ...data, concepts: undefined };

  return resp;
}

export async function fetchAPODRange(
  startDate: string,
  endDate: string,
): Promise<APODImage[]> {
  const result = await fetchAPOD({
    start_date: startDate,
    end_date: endDate,
    concept_tags: true,
    thumbs: true,
  });

  const data = Array.isArray(result) ? result : [result];

  // Remove concepts property from each item in the array
  const resp = data.map((item) => ({ ...item, concepts: undefined }));

  return resp;
}
