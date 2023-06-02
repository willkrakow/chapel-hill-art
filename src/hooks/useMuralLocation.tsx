import { useEffect, useState } from "react"
import { IMural } from "../types/murals"
import axios from "axios";
import MapService from "../services/Maps";

const useMuralLocation = (id: string) => {
    const [muralData, setMuralData] = useState<IMural & {coords: unknown} | null>(null);

    useEffect(() => {
        const getMural = async () => {
            const {data} = await axios.get<IMural>(`/api/murals/${id}`);
            const coords = await MapService.getCoords(`${data.address1} ${data.city} ${data.state} ${data.zip}`);
            setMuralData({...data, coords});
        }

        getMural();
    }, [id]);

    return muralData;
}

export default useMuralLocation;