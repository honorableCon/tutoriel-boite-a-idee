import { atom } from "recoil";

export const suggestions = atom({
    key: 'suggestions',
    default: null
});

export const metrique = atom({
    key: 'metrique',
    default: {accepte:0, refuse:0}
});