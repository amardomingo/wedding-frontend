import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import { API_KEY } from './secrets';

const Location = () => (
  <APIProvider apiKey={API_KEY} libraries={['marker']}>
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
);

export default Location;
