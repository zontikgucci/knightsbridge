import './servicecard.scss'





export const ServiceСard = () => {

  return (
    <section className='map'>
      <div className="container">
        <div className="map__body">
          <div className="map__info">
            <h2 className="title map--title">на карте</h2>
            <div className='map__response'>
              <a href="#!" className="map__link">
                <p className="map__title">КРАСОТА И ЗДОРОВЬЕ</p>
                <span className='map__value'>7</span>
              </a>
              <a href="#!" className="map__link">
                <p className="map__title">Магазины</p>
                <span className='map__value'>7</span>
              </a>
              <a href="#!" className="map__link">
                <p className="map__title">обучение</p>
                <span className='map__value'>7</span>
              </a>
              <a href="#!" className="map__link">
                <p className="map__title">детсад</p>
                <span className='map__value'>7</span>
              </a>
              <a href="#!" className="map__link">
                <p className="map__title">отдых, развлечения</p>
                <span className='map__value'>7</span>
              </a>
            </div>
          </div>
          <div className="map__interactive">
          </div>
        </div>
      </div>
    </section>
  )
}