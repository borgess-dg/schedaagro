import { useEffect } from "react";
import { FeatureGroup, MapContainer, TileLayer, useMap} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";


type MapEditorProps = {
    farmRegister ?: boolean,
    latitude: number,
    longitude: number
}

const MapNavigation = ({latitude, longitude}: MapEditorProps) => {
    const mapHook = useMap();

    useEffect(() => {
        mapHook.flyTo([latitude, longitude])
    }, [latitude, longitude])

    return null;
    
}

export const MapEditor = ({farmRegister = false, latitude, longitude}: MapEditorProps) => {

    const createMap = (e: Object) => {
        console.log(e);
    }

    return (
        <MapContainer
        className="h-[80vh] w-[80vw] rounded-lg"
        zoom={13}
        center={[latitude, longitude]}
        zoomControl={false}
        attributionControl={false}
        >
            <TileLayer 
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            maxZoom={20}
            />
            <MapNavigation latitude={latitude ? latitude : -17.223793430556352} longitude={longitude ? longitude : -46.87507889018336}/>
            <FeatureGroup>
                <EditControl
                    position="topright"
                    onCreated={createMap}
                    draw={{
                        rectangle: false,
                        polyline: false,
                        circlemarker: false,
                        marker: farmRegister,
                        circle: farmRegister ? false : true,
                        polygon: farmRegister ? false : true
                    }}
                />
            </FeatureGroup>
        </MapContainer>
    );
}

MapEditor.propTypes = {

}