//3.create a color picker with the help of the  usestate which will update the color of background for a paragraph
//and another color picker will allow user to change the color of text for a paragraph.


import React, { useState } from "react";

 function ColorPicker() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-lg font-medium mb-4">Color Picker</h1>

      {/* Background Color Picker */}
      <div className="mb-4">
        <label htmlFor="bgColorPicker" className="block text-md font-medium mb-2">
          Pick Background Color
        </label>
        <input
          id="bgColorPicker"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
        />
      </div>

      {/* Text Color Picker */}
      <div className="mb-4">
        <label htmlFor="textColorPicker" className="block text-md font-medium mb-2">
          Pick Text Color
        </label>
        <input
          id="textColorPicker"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
        />
      </div>

      {/* Paragraph with Dynamic Colors */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <p className="text-md font-medium">
          This is a customizable paragraph. Change the background and text colors using the color pickers above!
        </p>
      </div>
    </div>
  );
}
export default ColorPicker;