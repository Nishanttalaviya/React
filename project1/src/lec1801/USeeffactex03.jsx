import { useState, useEffect } from "react";
import forgetImage from "./../assets/forget.jpg";
import loginImage from "./../assets/login.jpg";
import resetImage from "./../assets/reset.jpg";
import successImage from "./../assets/sucess.jpg";

const ImageChanger = () => {
  const images = [forgetImage, loginImage, resetImage, successImage];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <img
        src={images[currentIndex]}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default ImageChanger;
