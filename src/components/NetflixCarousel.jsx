import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import '../styles/NetflixRow.css'

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
`;

const CarouselItem = styled.div`
  min-width: 20%; /* Adjust based on the number of visible items */
  transition: transform 0.5s ease-in-out;
  padding: 0 5px;

  img {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    height: 9rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  // background: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  z-index: 2;
  padding: 60px 16px;
  font-size: 30px;

  ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`

const NetflixCarousel = ({name}) => {
  const movies = [
    { id: 1, title: "Movie 1", imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/01/deadpool-3-plot.jpg" },
    { id: 2, title: "Movie 2", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/38670408d738f8e8a6c51157a07bd9e59f9df8814efeea481a900e691114a29e._UR1920,1080_.png" },
    { id: 3, title: "Movie 3", imageUrl: "https://www.matichon.co.th/wp-content/uploads/2017/06/depicable-me-3.jpg" },
    { id: 4, title: "Movie 4", imageUrl: "https://s.isanook.com/mv/0/ud/18/94703/head1.jpg?ip/crop/w670h402/q80/jpg" },
    { id: 5, title: "Movie 5", imageUrl: "https://cms.dmpcdn.com/movie/2024/04/12/0a592880-f888-11ee-8cbf-2f135d1b5823_webp_original.webp" },
    { id: 6, title: "Movie 6", imageUrl: "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2022/04/14/2023121475896/STH2_SAlone_16_9_1920x1080_1322128_1920x1080.jpg" },
  ];

  const [translateX, setTranslateX] = useState(0);
  const itemWidthPercentage = 20; // 20% for 5 items visible at a time
  const maxTranslateX = -(movies.length - 5) * itemWidthPercentage; // Adjust max based on items to show

  const scrollLeft = () => {
    setTranslateX((prev) => Math.min(prev + itemWidthPercentage, 0));
  };

  const scrollRight = () => {
    setTranslateX((prev) => Math.max(prev - itemWidthPercentage, maxTranslateX));
  };

  return (
    <div className='row-card'>
      <div className='row-title'>
        {name}
      </div>
      <CarouselContainer>
        <Arrow direction="left" onClick={scrollLeft}>
          &#10094;
        </Arrow>
        <CarouselSlider translateX={translateX}>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <img src={movie.imageUrl} alt={movie.title} />
            </CarouselItem>
          ))}
        </CarouselSlider>
        <Arrow direction="right" onClick={scrollRight}>
          &#10095;
        </Arrow>
      </CarouselContainer>
    </div>
    
  )
}

export default NetflixCarousel;
