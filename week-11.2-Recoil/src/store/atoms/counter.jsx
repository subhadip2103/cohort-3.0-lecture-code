import { atom, selector } from "recoil";

export const counterAtom = atom({
    key: "Counter",
    default: 0
})

export const evenSelector = selector({
    key: "isEvenSelector",
    get: ({ get }) => {
        const currentCount = get(counterAtom);
        return currentCount % 2 === 0;
    }
})