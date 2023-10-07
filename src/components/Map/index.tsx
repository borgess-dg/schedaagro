import { MapContainer, TileLayer} from "react-leaflet";


export const Map = () => {

    return (
        <MapContainer
        className="h-[100vh] w-[100vw] absolute -z-10"
        zoom={13}
        center={[-18.61953, 46.8285]}
        zoomControl={false}
        attributionControl={false}
        >
            <TileLayer 
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            subdomains={['mt0','mt1','mt2','mt3']}
            maxZoom={20}
            />
        </MapContainer>
    );
}