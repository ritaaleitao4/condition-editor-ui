import type {Property} from "@/types";

export const getProperties: () => Property[] = (): Property[] => {
    return window.datastore.getProperties();
};

export const getProperty = (id: string) => {
    return window.datastore.getProperties().find(property => property.id === +id);
};
