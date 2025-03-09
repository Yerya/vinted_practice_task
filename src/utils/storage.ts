import { Favourite } from "../../types/types";

export const saveToStorage = (key: string, data: Favourite[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromStorage = (key: string, defaultValue: Favourite[]): Favourite[] => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
};
