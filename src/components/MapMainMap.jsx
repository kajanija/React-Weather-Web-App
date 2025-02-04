import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useGlobalState } from '../data/globalStates';

function MapMainMap() {
    const [cities, setCities] = useGlobalState("cities");
    const [allData, setAllData] = useGlobalState("all");

    useEffect(() => {
        const getCities = async () => {
            if (activeCity >= 0 && activeCity < cities.length) {

                setCities(cities);

                const allCitiesData = await fetchAllCitiesData();
                setAllData(allCitiesData);

              }
        }
    },[cities,setCities]);
    
    return (
        <div className='mt-5 w-full h-120 bg-green-500 rounded-2xl z-2'>  
            <MapContainer className='w-full h-full rounded-2xl' center={[51.505, -0.09]} zoom={3}>
                <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                {
                    allData?.map((city,index) => (
                        <Marker key={city?.dt} position={[city?.coord?.lat,city?.coord?.lon,]}>
                            <Popup>
                                <p className='text-secondary text-2xl font-bold'>{city?.name}</p>
                            </Popup>
                        </Marker>
                    ))
                }
                
            </MapContainer>     
        </div>
    )
}

export default MapMainMap