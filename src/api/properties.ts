import type { Property } from "src/shared";

export const getProperties: () => Property[] = (): Property[] => {
    return window.datastore.getProperties();
};

export const getProperty = (id: number | null): Property | null => {
    return window.datastore.getProperties().find(property => property.id === id) || null;
};
