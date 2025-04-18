import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

// Define the list of places you have visited
// Replace with your actual visited locations
const size = 0.5;
const color = '#9a5acc';

const homeLocation = { lat: 41.390205, lng: 2.154007, name: 'Barcelona' };

const visitedPlaces = [
  { lat: -1.2864, lng: 36.8172, name: 'Nairobi, Kenya', color: color, size: size }, // Using Nairobi for Kenya
  { lat: 9.9281, lng: -84.0907, name: 'San José, Costa Rica', color: color, size: size }, // Using San José for Costa Rica
  { lat: 45.9237, lng: 6.8694, name: 'Chamonix, France', color: color, size: size },
  { lat: 40.8518, lng: 14.2681, name: 'Naples, Italy', color: color, size: size },
  { lat: 45.4064, lng: 11.8768, name: 'Padova, Italy', color: color, size: size },
  { lat: 38.1157, lng: 13.3615, name: 'Palermo, Sicily', color: color, size: size }, // Using Palermo for Sicily
  { lat: 41.9028, lng: 12.4964, name: 'Rome, Italy', color: color, size: size },
  { lat: 45.4408, lng: 12.3155, name: 'Venice, Italy', color: color, size: size },
  { lat: 51.5074, lng: -0.1278, name: 'London, UK', color: color, size: size },
  { lat: 53.3498, lng: -6.2603, name: 'Dublin, Ireland', color: color, size: size },
  { lat: 41.1579, lng: -8.6291, name: 'Oporto, Portugal', color: color, size: size },
  { lat: 38.7223, lng: -9.1393, name: 'Lisbon, Portugal', color: color, size: size },
  { lat: 37.7412, lng: -25.6756, name: 'Ponta Delgada, Azores', color: color, size: size } // Using Ponta Delgada for Azores
];

const arcsData = visitedPlaces.map(place => ({
  startLat: homeLocation.lat,
  startLng: homeLocation.lng,
  endLat: place.lat,
  endLng: place.lng,
  color: place.color, // Use the same color as the destination point
  name: `${homeLocation.name} -> ${place.name}` // For tooltip
}));

// Combine home location with visited places for the points layer
const allPoints = [homeLocation, ...visitedPlaces];

function VisitedPlacesGlobe() {
  const globeEl = useRef();
  const [globeWidth, setGlobeWidth] = useState(window.innerWidth);
  const [globeHeight, setGlobeHeight] = useState(window.innerHeight);

  // Optional: Make globe responsive
  useEffect(() => {
    const handleResize = () => {
      setGlobeWidth(window.innerWidth);
      setGlobeHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Globe
      ref={globeEl}
      width={globeWidth}
      height={globeHeight}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Night map
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png" // Starry sky background

      // Points layer configuration
      pointsData={allPoints}
      pointLat={d => d.lat}
      pointLng={d => d.lng}
      pointLabel={d => d.name} // Tooltip text
      pointRadius={d => d.size} // Radius of the cylinder base
      pointAltitude={0} // Starting altitude (0 = on the surface)
      pointColor={d => d.color} // Color of the marker
      pointsTransitionDuration={1000} // Animation duration for points appearing

      arcsData={arcsData}
      arcLabel={d => d.name}
      arcStartLat={d => d.startLat}
      arcStartLng={d => d.startLng}
      arcEndLat={d => d.endLat}
      arcEndLng={d => d.endLng}
      arcDashLength={0.05} // Length of the dash
      arcDashGap={0.05} // Gap between dashes
      arcDashInitialGap={() => Math.random()} // Randomize start position
      arcDashAnimateTime={10000} // Speed of animation (lower is faster)
      arcColor={d => d.color}
      arcStroke={0.5} // Thickness of the arc line
      arcsTransitionDuration={500}
    />
  );
}

export default VisitedPlacesGlobe;