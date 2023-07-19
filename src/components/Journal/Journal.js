import './journal.scss';

import { JournalData } from '../../data/Preview'

export const Journal = () => {

  return (
    <ul className="journal">
      { JournalData.map(data => (
        <li
          className={data.id % 2 ? 'journal__item' : 'journal__item journal__item--bg'}
          key={data.id}
        >
        <a href="#!" className="journal__link">
          <picture className="journal__picture">
            <img
              src={data.img}
              alt={data.alt}
              width={data.width}
              height={data.height}
              className="journal__image"
            />
          </picture>
          <p className="journal__text">
            {data.text.replace(/&nbsp;/g, '\u00a0')}
          </p>
        </a>
      </li>
      )) }
    </ul>
  )
}