import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import { API_KEY } from './secrets';
import './Location.css';

const Location = () => (
  <div className="center-container">
    <div className='block-celebration'>
      <p>La celebración de la boda será en el Complejo La Cigüeña (Finca Los Acebos) a las 18:00 </p>
      <p>Ctra. Puente de Arganda a Chinchón, Km 2,5, Camino de Pajares y del Porcal, 460</p>
      <p>28500 Arganda del Rey, Madrid</p>
    </div>
    <APIProvider apiKey={API_KEY} libraries={['marker']} className='map-container'>
      <Map
        mapId={'7b94c075e1a2dbef'}
        style={{width: '50vw', height: '50vh'}}
        defaultCenter={{lat: 40.29219436645508, lng: -3.513371467590332}}
        defaultZoom={14}
        gestureHandling={'greedy'}
        disableDefaultUI={true}>
        <AdvancedMarker
            position={{lat: 40.29219436645508, lng: -3.513371467590332}}
            title={'AdvancedMarker with customized pin.'}>
            <Pin
              background={'#22ccff'}
              borderColor={'#1e89a1'}
              glyphColor={'#0f677a'}></Pin>
          </AdvancedMarker>
        </Map>
    </APIProvider>
    <div className='block-location'>
      <p>Como llegar en coche:</p>
      <p>Salida 21 de la carreter A-3 en dirección Arganda del Rey</p>
    </div>
  </div>
);

export default Location;
