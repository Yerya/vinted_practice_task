import { saveToStorage, loadFromStorage } from "../../src/utils/storage";
import { Favourite } from '../../types/types';

describe('Storage functions', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('should return default value if no data is in localStorage', () => {
        const defaultFavourites: Favourite[] = [];
        const loadedFavourites = loadFromStorage('favourites', defaultFavourites);

        expect(loadedFavourites).toEqual(defaultFavourites);
    });

    it('should save and load favourites correctly', () => {
        const defaultFavourites: Favourite[] = [];
        const newFavourite: Favourite = {
            id: 1,
            photographer: 'John Doe',
            src: 'https://example.com/photo1.jpg',
        };

        saveToStorage('favourites', [newFavourite]);

        const loadedFavourites = loadFromStorage('favourites', defaultFavourites);

        expect(loadedFavourites).toEqual([newFavourite]);
    });
});
