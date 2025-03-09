import { useGallery } from "../features/useGallery";
import { useFavourites } from "../features/useFavourites";
import { ImageCard } from "../components/ImageCard/ImageCard.tsx";
import { Photo } from "../../types/types";
import "./GalleryView.css";

export const GalleryView = () => {
    const { photos, loading } = useGallery();
    const { favourites, toggleFavourite } = useFavourites();

    return (
        <main className="gallery-view">
            <section className="gallery">
                {photos.map((photo: Photo) => (
                    <ImageCard
                        key={photo.id}
                        photo={photo}
                        isFavourite={favourites.some((fav) => fav.id === photo.id)}
                        onToggleFavourite={() =>
                            toggleFavourite(photo.id, photo.src.medium, photo.photographer)
                        }
                    />
                ))}
            </section>
            {loading && <p>Loading...</p>}
        </main>
    );
};
