import { Sliders } from '../Sliders/Sliders'
import './feature.scss'

import { FeatureData } from '../../data/Feature'

export const Feature = () => {

  const { title, subtitle } = FeatureData
    return (
      <section className="feature">
        <div className="container">
          <h2 className="title feature--title">{title}</h2>
          <p className="feature__subtitle">{subtitle}</p>
          <Sliders />
        </div>
      </section>
    )
}