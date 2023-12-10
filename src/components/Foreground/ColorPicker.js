import React, { useState } from "react";
import { atom, useAtom } from "jotai";
import { selectedColor, showColorPicker } from "../../utils/store";

function ColorPicker() {
  const [isColorPickerShown, setIsColorPickerShown] = useAtom(showColorPicker);
  const [color, setColor] = useAtom(selectedColor);

  const colors = [
    "#B8F2D2",
    "#D5EAFF",
    "#EAD5FF",
    "#FFD2F5",
    "#F7CCCB",
    "#FFCFBA",
    "#F9E796",
  ];

  return (
    <div className="absolute top-6">
      {isColorPickerShown && (
        <div className="flex bg-white p-3 rounded-xl shadow-xl">
          {colors.map((colorOption, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full  cursor-pointer m-1"
              style={{ backgroundColor: colorOption }}
              onClick={() => {
                setColor(colorOption);
                setIsColorPickerShown(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
