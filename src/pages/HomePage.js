import { Feature } from '../components/Feature/Feature'
import { Map } from '../components/Map/Map'
import { Preview } from '../components/Preview/Preview'


export const HomePage = () => {
    return (
      <main className="main">
        <Preview />
        <Map />
        <Feature />
      </main>
    )
}