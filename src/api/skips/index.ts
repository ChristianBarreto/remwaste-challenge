import { baseUrl } from "..";
import type { SkipsResponse } from "./types";

export const getSkipsByLocation = (query: unknown): Promise<SkipsResponse> => new Promise((resolve, reject) => {
  fetch(`${baseUrl}skips/by-location?${query}`)
    .then((res) => {
      if (!res.ok) {
        reject(res.status);
        throw new Error(`HTTP error! status: ${res.status}`);
      }else {
        resolve(res.json())
      }
    })
    .catch((err) => {
      reject(err);
      throw new Error(`Fetch error!`);
    })
})