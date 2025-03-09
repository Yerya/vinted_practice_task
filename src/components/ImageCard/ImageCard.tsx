import { PhotoProps } from "../../../types/types";
import { FavouriteButton } from "../FavoriteButton/FavouriteButton.tsx";
import "./ImageCard.css";

export const ImageCard: React.FC<PhotoProps> = ({
                                                    photo,
                                                    isFavourite,
                                                    onToggleFavourite,
                                                }) => {
    const photoDescription = photo.url
        ? photo.url.split("/").slice(-2, -1)[0]
            .replace(/-/g, " ")
            .replace(/\d+/g, "")
            .trim()
        : "No description :(";

    return (
        <div className="photo-tile">
            <div className="img-wrapper">
                <img
                    className="img"
                    srcSet={`${photo.src.small} 500w, ${photo.src.medium} 1000w, ${photo.src.large} 1500w`}
                    sizes="(max-width: 600px) 500px, (max-width: 1000px) 1000px, 1500px"
                    src={photo.src.medium}
                    alt={photo.photographer}
                    loading="lazy"
                />
                <div className="overlay">
                    <h2>{photoDescription || "No description"}</h2>
                    <h3>{photo.photographer}</h3>
                    <FavouriteButton
                        isFavourite={isFavourite}
                        onToggle={onToggleFavourite}
                    />
                </div>
            </div>
        </div>
    );
};
