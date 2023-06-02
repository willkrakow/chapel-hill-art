import axios from "axios";
import { DirectionsResponse, GeocodeResponse } from "../types/mapbox";

type TransportationMode = "walking" | "driving" | "driving-traffic" | "cycling";
class MapService {
    static client = axios.create({
        baseURL: "https://api.mapbox.com",
        params: {
            access_token: import.meta.env.VITE_MAPBOX_TOKEN,
        },
        headers: {
            "Content-Type": "application/json"
        }
    })

    static async getDirections(startCoord: [number, number], endCoord: [number, number], mode: TransportationMode = "walking") {
        return this.client.get<DirectionsResponse>(`/directions/v5/mapbox/${mode}/${startCoord[0]},${startCoord[1]};${endCoord[0]},${endCoord[1]}`, {
            params: { geometries: "geojson", steps: true }
        })
    }

    static getCoords(address: string){
        return this.client.get<GeocodeResponse>(`/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`, {
            params: {
                country: "us",
                types: "address",
                autocomplete: true,
                fuzzyMatch: true,
                limit: 1,
                language: "en",
            }
        })
    }
}

export default MapService;