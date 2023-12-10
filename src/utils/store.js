import { atom } from "jotai";

// Visibility
const eventModalVisibility = atom(true);
const flowVisibility = atom(false);
const showColorPicker = atom(false);

// Colors
const selectedColor = atom("#D5EAFF");

export { showColorPicker, selectedColor, eventModalVisibility, flowVisibility };
