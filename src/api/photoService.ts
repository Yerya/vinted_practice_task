import { GalleryResponse } from "../../types/types";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const BASE_URL = "https://api.pexels.com/v1";

export const getPhotos = async (page: number): Promise<GalleryResponse> => {
    const response = await fetch(`${BASE_URL}/search?query=cats&orientation=landscape&page=${page}&per_page=25`, {
        headers: { Authorization: API_KEY },
    });
    if (!response.ok) throw new Error("Error loading images");
    return response.json();
};
