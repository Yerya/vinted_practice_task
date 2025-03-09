export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    tags?: string[];
    src: {
        original: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
    };
}
export interface GalleryResponse {
    page: number;
    per_page: number;
    total_results: number;
    photos: Photo[];
}

export interface FavouriteButtonProps {
    isFavourite: boolean;
    onToggle: () => void;
}

export interface PhotoProps {
    photo: Photo;
    isFavourite: boolean;
    onToggleFavourite: () => void;
}

export interface Favourite {
    id: number;
    src: string;
    photographer: string;
}

export interface LocalStorageData {
    favourites: Favourite[];
}
