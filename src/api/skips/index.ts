import { baseUrl } from "..";
import type { SkipsResponse } from "./types";

export async function getSkipsByLocation(query: unknown): Promise<SkipsResponse> {
  try {
    const response = await fetch(`${baseUrl}skips/by-location?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching skips:", error);
    return [];
  }
}