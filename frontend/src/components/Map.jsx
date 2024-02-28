import React from 'react'
import "/src/styles/map.css"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';

function Map() {
    // check figma file for About of upcoming events
    const center = [ 19.0667,72.826];
  return (
    <div className='map'>
      <div className="maps">
      <MapContainer>
  center={}
  zoom={10}
<TileLayer url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=bMEWXYfCjeUC5yYo4EOC" 
attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'>

</TileLayer>
</MapContainer>
      </div>

         

        </div>
  )
}

export default Map