import { useEffect, useState } from 'react';

import firstImg from '/images/image.png';
import secondImg from '/images/image1.jpeg';
import thirdImg from '/images/image2.jpeg';
import fourthImg from '/images/image3.jpeg';
import fifthImg from '/images/image4.jpeg';
import sixthImg from '/images/image5.jpeg';
import seventhImg from '/images/image6.jpeg';
import eightImg from '/images/image7.jpeg';
import ninthImg from '/images/image8.jpg';
import tenthImg from '/images/image9.jpg';
import eleventhImg from '/images/image10.jpg';
import twelfthImg from '/images/image11.jpg';
import thirteenthImg from '/images/image12.jpg';
import fourteenthImg from '/images/image13.jpg';
import fifteenthImg from '/images/image14.jpg';
import sixteenthImg from '/images/image15.jpg';
import seventeenthImg from '/images/image16.jpg';
import eighteenthImg from '/images/image17.jpg';
import nineteenthImg from '/images/image18.jpg';

import classes from './PicsSlideShow.module.css';

const images = [
  { image: firstImg, alt: 'A dog on sick bed' },
  { image: secondImg, alt: 'Two sheeps being held' },
  { image: thirdImg, alt: 'Dog lying on a table' },
  { image: fourthImg, alt: 'A horse' },
  { image: fifthImg, alt: 'Two monkeys' },
  { image: sixthImg, alt: 'A dog looking at a needle' },
  { image: seventhImg, alt: 'A vet on white coat' },
  { image: eightImg, alt: 'A doctor holding stethoscope' },
  { image: ninthImg, alt: 'Rubbing cat fur' },
  { image: tenthImg, alt: 'A thinking dog' },
  { image: eleventhImg, alt: 'A black and white cat' },
  { image: twelfthImg, alt: 'An observant cat' },
  { image: thirteenthImg, alt: 'A dog panting' },
  { image: fourteenthImg, alt: 'A lying cat' },
  { image: fifteenthImg, alt: 'An attentive dog' },
  { image: sixteenthImg, alt: 'A playful cat' },
  { image: seventeenthImg, alt: 'An obedient dog' },
  { image: eighteenthImg, alt: 'An obedient dog' },
  { image: nineteenthImg, alt: 'An obedient dog' },
];

export default function PicsSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

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
