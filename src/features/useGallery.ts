import { useEffect, useState } from "react";
import { getPhotos } from "../api/photoService";
import { GalleryResponse, Photo } from "../../types/types";

export const useGallery = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadPhotos = async () => {
            setLoading(true);
            try {
                const data: GalleryResponse = await getPhotos(page);
                setPhotos((prev) => {
                    const newPhotos = data.photos.filter(
                        (newPhoto) => !prev.some((prevPhoto) => prevPhoto.id === newPhoto.id)
                    );
                    return [...prev, ...newPhotos];
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, [page]);

    useEffect(() => {
        const onScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 50
            ) {
                setPage((prev) => prev + 1);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return { photos, loading };
};
