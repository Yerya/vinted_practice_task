import { useState } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";
import { Favourite } from "../../types/types";

export const useFavourites = () => {
    const [favourites, setFavourites] = useState<Favourite[]>(() => {
        const storedData = loadFromStorage("favourites", []);
        return storedData;
    });

    const toggleFavourite = (id: number, src: string, photographer: string) => {
        setFavourites((prev) => {
            const updated = prev.some((fav) => fav.id === id)
                ? prev.filter((fav) => fav.id !== id)
                : [...prev, { id, src, photographer }];
            saveToStorage("favourites", updated);
            console.log("Current favourites:", updated);
            return updated;
        });
    };

    return { favourites, toggleFavourite };
};
