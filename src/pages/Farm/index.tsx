import { useRef, useState } from "react";
import { MapEditor } from "../../components/MapEditor";
import { PagesContainer } from "../../components/PagesContainer";

export const FarmPage = () => {

    const latitudeRef = useRef<HTMLInputElement>(null);
    const longitudeRef = useRef<HTMLInputElement>(null);

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    const mapNavigate = () => {
        setLatitude(() => parseFloat(latitudeRef.current!.value));
        setLongitude(() => parseFloat(longitudeRef.current!.value));
        console.log(longitude)
    }

    return (
        <PagesContainer>
            <h1 className="text-[2em]">Fazendas</h1>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center mr-2">
                    <div className="flex flex-col justify-start">
                        <label>Nome:</label>
                        <input className="w-60 h-10 border-green-800 border rounded-lg pl-2 mb-4" placeholder="Nome da Fazenda"></input>
                    </div>
                    <div className="flex flex-col justify-start">
                        <label>Latitude:</label>
                        <input className="w-60 h-10 border-green-800 border rounded-lg pl-2 mb-4" placeholder="Latitude:" ref={latitudeRef}></input>
                    </div>
                    <div className="flex flex-col justify-start">
                        <label>Longitude:</label>
                        <input className="w-60 h-10 border-green-800 border rounded-lg pl-2 mb-4" placeholder="Longitude:" ref={longitudeRef}></input>
                    </div>
                    <button className="bg-green-950 text-white w-60 h-10 rounded-lg" onClick={mapNavigate}>Buscar</button>
                </div>
                <MapEditor farmRegister={true} latitude={latitude} longitude={longitude}></MapEditor>
            </div>
        </PagesContainer>
    );
}