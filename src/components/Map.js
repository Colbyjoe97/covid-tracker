import React from 'react'
import "./Map.css";
import { showDataOnMap } from '../util'
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
// npm i react-leaflet leaflet

function Map({ countries, casesType, center, zoom }) {
    function ChangeView({ center, zoom }) { // Updates map coords
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    return (
        <div className="map">
            <LeafletMap
             casesType={casesType}
             center={center}
             zoom={zoom}
            //  scrollWheelZoom={false}
            >
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>
                </TileLayer>

                {/* Loop through countries to draw circles on hotspot covid areas */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map