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
},)

export const primeSelector = selector({
    key: "isPrimeSelector",
    get: ({ get }) => {
        const currentCount = get(counterAtom);
        let nums=[0, 1, 2, 3, 5];
        if (nums.includes(currentCount)) {
            return true
        }
        else { return currentCount % 6 === 5 || currentCount % 6 === 1 }
    }
})