import { atom } from "jotai";

// Colors
const selectedColor = atom("#D5EAFF");

// Visibility
const eventModalVisibility = atom(true);
const showColorPicker = atom(false);

export { showColorPicker, selectedColor, eventModalVisibility };
