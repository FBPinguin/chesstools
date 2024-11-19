import { writable } from "svelte/store";

export const chal = writable({
    chal1: false,
    chal2: false,
    chal3: false,
    chal4: false
});