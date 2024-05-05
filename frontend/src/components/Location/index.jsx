import React, { useEffect, useState } from 'react';
import './Location.css';

const key = 'TO_BE_REPLACED';

const Location = () => {
  const [placeDetails, setPlaceDetails] = useState(null);
  
  useEffect(() => {
    // Place ID of the wedding location
    const placeId = 'PLACE_ID'; // Replace with the actual Place ID

    // Fetch place details using Place ID from Google Places API
    const request = {
      placeId: placeId,
      fields: ['name', 'geometry'],
    };

    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaceDetails(place);
      } else {
        console.error('Error fetching place details:', status);
      }
    });
  }, []);

  useEffect(() => {
    if (placeDetails) {
      // Initialize the map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: placeDetails.geometry.location,
        zoom: 15,
      });

      // Create custom marker icon
      const markerIcon = {
        url: './assets/hm.png', // URL of the custom marker icon
        scaledSize: new window.google.maps.Size(50, 50), // Size of the marker icon
        origin: new window.google.maps.Point(0, 0), // Origin of the marker icon (top-left corner)
        anchor: new window.google.maps.Point(25, 50), // Anchor point of the marker icon (center bottom)
      };

      // Add custom marker to the map
      const marker = new window.google.maps.Marker({
        position: placeDetails.geometry.location,
        map: map,
        title: placeDetails.name,
        icon: markerIcon,
      });

      return () => {
        // Cleanup function
        map.setMap(null);
      };
    }
  }, [placeDetails]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Location;
