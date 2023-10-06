import { MapContainer, TileLayer } from "react-leaflet";

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
            url='http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
            subdomains={['mt0','mt1','mt2','mt3']}
            maxZoom={20}
            />
        </MapContainer>
    );
}