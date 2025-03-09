import { renderHook, act } from "@testing-library/react";
import {useFavourites} from "../../src/features/useFavourites";

describe("useFavourites hook", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("should add a photo to favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.toggleFavourite(1, "test.jpg", "John Doe");
        });

        expect(result.current.favourites).toHaveLength(1);
        expect(result.current.favourites[0].id).toBe(1);
    });

    it("should remove a photo from favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.toggleFavourite(1, "test.jpg", "John Doe");
            result.current.toggleFavourite(1, "test.jpg", "John Doe");
        });

        expect(result.current.favourites).toHaveLength(0);
    });
});
