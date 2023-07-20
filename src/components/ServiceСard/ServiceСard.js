import './servicecard.scss'
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';



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
            <YMaps>
              <Map defaultState={{ center: [54.30750285562347,48.3679966002379], zoom: 15 }} className="map__interactive">
                  <Placemark defaultGeometry={[54.30722656193709,48.366667862960405]}/>
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  )
}