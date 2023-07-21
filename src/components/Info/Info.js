import './info.scss';

import { InfoData } from '../../data/Preview'

export const Info = ({ isDesktop }) => {

  const filteInfo = !isDesktop ? InfoData.filter(item => item.id !== 4) : InfoData
  
    return (
      <ul className='info'>
        {filteInfo.map(data => (
          <li className='info__item' key={data.id}>
            <h3 className="info__title">
              { isDesktop && data.titleAlternative  ? data.titleAlternative:  data.title }
              {data.min && data.pow ? (
                <span>
                  {data.min}<sup>{data.pow}</sup>
                </span>
              ) : data.min ? (
                <span>{data.min}</span>
              ) : null}
            </h3>
            <p className="info__subtitle">{data.subtitle}</p>
          </li>
        ))}
      </ul>
    )
}