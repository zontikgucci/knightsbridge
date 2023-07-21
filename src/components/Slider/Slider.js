import './slider.scss'
import "slick-carousel/slick/slick.css";

import  Sliders from "react-slick";

import { CardData } from '../../data/data'

export const Slider = () => {

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    adaptiveHeight: false,
    variableWidth: false,
    swipe: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  }

  return (
    <div className='service'>
      <Sliders { ...settings }>
        {CardData.map(data => (
          <div className="service__card" key={ data.id }>
            <p className="service__number">{ data.number }</p>
            <h3 className="service__title">{ data.title }</h3>
            <p className="service__description">{ data.description }</p>
            <a href={ data.href } className="service__link">{ data.link }</a>
          </div>
        ))}
      </Sliders>
    </div>
  )
}






