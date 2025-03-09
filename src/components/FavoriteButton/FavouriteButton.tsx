import { FavouriteButtonProps } from "../../../types/types";
import "./FavoriteButton.css";

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({
                                                                    isFavourite,
                                                                    onToggle,
                                                                }) => {
    return (
        <button
            className={`fav-btn ${isFavourite ? "active" : ""}`}
            onClick={onToggle}
        >
            {isFavourite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    );
};
