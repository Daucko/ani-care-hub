import { useEffect, useState } from 'react';

import firstImg from '/images/image.png';
import secondImg from '/images/image1.jpeg';
import thirdImg from '/images/image2.jpeg';
import fourthImg from '/images/image3.jpeg';
import fifthImg from '/images/image4.jpeg';
import sixthImg from '/images/image5.jpeg';
import seventhImg from '/images/image6.jpeg';
import eightImg from '/images/image7.jpeg';
import ninthImg from '/images/image4.jpg';
import tenthImg from '/images/image5.jpg';

import classes from './PicsSlideShow.module.css';

const images = [
  { image: firstImg, alt: 'A delicious, juicy burger' },
  { image: secondImg, alt: 'A delicious, spicy curry' },
  { image: thirdImg, alt: 'Steamed dumplings' },
  { image: fourthImg, alt: 'Mac and cheese' },
  { image: fifthImg, alt: 'A delicious pizza' },
  { image: sixthImg, alt: 'A delicious schnitzel' },
  { image: seventhImg, alt: 'A delicious tomato salad' },
  { image: eightImg, alt: 'A delicious tomato salad' },
  { image: ninthImg, alt: 'A delicious tomato salad' },
  { image: tenthImg, alt: 'A delicious tomato salad' },
];

export default function PicsSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
