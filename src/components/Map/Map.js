import './map.scss'
import { YMaps, Map as Maps, Placemark } from '@pbe/react-yandex-maps';
import { MapDataMainTitle, MapData } from '../../data/data'

export const Map = () => {

  return (
    <section className='map'>
      <div className="container">
        <div className="map__body">
          <div className="map__info">
            <h2 className="title map--title">{ MapDataMainTitle }</h2>
            <div className='map__response'>
              {MapData.map(data => (
                <a href={ data.href } className="map__link" key={ data.id }>
                  <p className="map__title">{ data.title }</p>
                  <span className='map__value'>{ data.count }</span>
                </a>
              ))}
            </div>
          </div>
          <div className="map__interactive">
            <YMaps>
              <Maps defaultState={{ center: [54.30750285562347,48.3679966002379], zoom: 15 }} className="map__interactive">
                  <Placemark defaultGeometry={[54.30722656193709,48.366667862960405]}/>
              </Maps>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  )
}