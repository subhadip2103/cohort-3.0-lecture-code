import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomsFamily = atomFamily({
    key: "todosAtomsFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({ get }) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
            return res.data
        }
    })

})