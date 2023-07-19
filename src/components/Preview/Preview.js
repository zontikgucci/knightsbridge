import './preview.scss'
import { useMediaQuery } from 'react-responsive'

import { Info } from '../Info/Info'
import { Journal } from '../Journal/Journal'

import { PreviewData } from '../../data/Preview'

export const Preview = () => {

  const {
    title,
    titleAlternative,
    text,
    more,
    img,
    alt,
    width,
    height
  } = PreviewData

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  return (
    <section className="preview">
      <div className="container">
        <h1 className='title preview--title'>
          {isDesktop ? titleAlternative : title}
        </h1>
      </div>
      <div className="preview__content">
        <div className="container">
          <div className="preview__description">
            <div className="preview__body">
              <Info
                isDesktop={ isDesktop }
              />
              <p className='preview__text'>{text}</p>
            </div>
            <a href='#!' className="preview__more">{more}</a>
          </div>
          <div className="preview__visualization">
            <picture className="preview__picture">
              <img
                src={img}
                alt={alt}
                width={width}
                height={height}
                className="preview__image"
              />
            </picture>
            <Journal />
          </div>
        </div>
      </div>
    </section>
  )
}