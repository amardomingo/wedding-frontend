import { APIProvider, AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';
import './Location.css';
import { API_KEY } from './secrets';

const styles = {
  container: isPortrait => ({
    width: isPortrait? '90vw' : '50vw',
    height: '50vh',
  })
}

const Location = () => {
  const mediaMatch = window.matchMedia('only screen and (max-width: 600px) and (orientation: portrait)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addEventListener("change", handler)
    return () => mediaMatch.removeEventListener("change", handler)
  })
  return (
  <div className="center-container">
    <div className="location-text">
      <div className='block-celebration'>
        <h2>Lugar</h2>
        <p>La celebración de la boda será en el Complejo La Cigüeña (Finca Los Acebos) a las 18:00 </p>
        <p>Ctra. Puente de Arganda a Chinchón, Km 2,5, Camino de Pajares y del Porcal, 460</p>
        <p>28500 Arganda del Rey, Madrid</p>
      </div>
      <div className='block-location'>
        <h2>Como llegar</h2>
        <h3>En coche</h3>
        <p>Salida 21 de la carretera A-3 en dirección Arganda del Rey</p>
        <h3>En autobus</h3>
        <p>Desde la plaza de neptuno en Madrid saldra un autobus hacia el recinto a las 17h</p>
      </div>
    </div>
    <div class="map-container">
    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <Map
        mapId={'7b94c075e1a2dbef'}
        style={styles.container(matches,)}
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
    </div>
  </div>
  )
};

export default Location;
