import './preview.scss'
import zaglushka from './img/zaglushka.jpg'
import journal1 from './img/journal1.png'
import journal2 from './img/journal2.png'

export const Preview = () => {
  return (
    <section className="preview">
      <div className="container">
        <h1 className='title preview--title'>Knightsbridge private park&nbsp;&mdash; элитный район Лондона в&nbsp;центре Москвы</h1>
      </div>
      <div className="preview__content">
        <div className="container">
          <div className="preview__description">
            <div className="preview__body">
              <ul className='info'>
                <li className='info__item'>
                  <h3 className="info__title">180 - 2048 <span>м<sup>2</sup></span></h3>
                  <p className="info__subtitle">Площадь объектов</p>
                </li>
                <li className='info__item'>
                  <h3 className="info__title">499</h3>
                  <p className="info__subtitle">Парковочных мест</p>
                </li>
                <li className='info__item'>
                  <h3 className="info__title">10 <span>мин</span></h3>
                  <p className="info__subtitle">До метро Фрунзенская</p>
                </li>
              </ul>
              <p className='preview__text'>
                Жилой комплекс из&nbsp;четырех клубных домов класса де-люкс в&nbsp;английском стиле, расположенный в&nbsp;собственном парке площадью 3&nbsp;га в&nbsp;районе Хамовники. Авторы интерьеров жилого копмлекса,и дизайна частного парка&nbsp;&mdash; дизайнеры мировой величины. Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и&nbsp;глава компании LINLEY, а&nbsp;настоящий английский парк для жителей
              </p>
            </div>
            <a href='#!' className="preview__more">Узнать подробнеe</a>
          </div>
          <div className="preview__visualization">
            <picture className="preview__picture">
              <img src={zaglushka} alt="zaglushka" className="preview__image" />
            </picture>
            <ul className="journal">
              <li className="journal__item">
                <a href="#!" className="journal__link">
                  <picture className="journal__picture">
                    <img src={journal1} alt="zaglushka" className="journal__image" />
                  </picture>
                  <p className="journal__text">Презентация ЖК&nbsp;Knightsbridge Private Рark</p>
                </a>
              </li>
              <li className="journal__item journal__item--bg">
                <a href="#!" className="journal__link ">
                  <picture className="journal__picture">
                    <img src={journal2} alt="zaglushka" className="journal__image" />
                  </picture>
                  <p className="journal__text">Типы <br /> планировок апартаментов</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}