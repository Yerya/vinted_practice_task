import { renderHook, act } from "@testing-library/react";
import {useGallery} from "../../src/features/useGallery";
import { waitFor } from "@testing-library/react";

jest.mock("../../src/api/photoService", () => ({
    getPhotos: jest.fn().mockResolvedValue({
        photos: [{ id: 1, src: { medium: "test.jpg" }, photographer: "Erya Kravchenko" }],
    }),
}));

describe("useGallery hook", () => {
    it("should fetch initial photos", async () => {
        const { result } = renderHook(() => useGallery());

        await waitFor(() => expect(result.current.photos).toHaveLength(1));

        expect(result.current.photos[0].photographer).toBe("Erya Kravchenko");
    });

    it("should increase page number on scroll", async () => {
        const { result } = renderHook(() => useGallery());

        expect(result.current.photos).toHaveLength(0);

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        await waitFor(() => expect(result.current.photos).toHaveLength(1));
    });
});
