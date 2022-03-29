import { writable } from "svelte/store";

export const ChitStore = writable([{
    id: 1,
    author: "Nauman",
    handle: "@recluze",
    content: "First chit"
    }]);
