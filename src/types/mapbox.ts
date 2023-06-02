export interface GeocodeResponse {
    type: string;
    query: string[];
    features: {
        id: string;
        type: string;
        place_type: string[];
        relevance: number;
        properties: {
            accuracy: "rooftop" | string;
            mapbox_id: string;
        },
        text_en: string;
        place_name_en: string;
        text: string;
        place_name: string;
        center: [number, number];
        geometry: {
            type: string;
            coordinates: [number, number]
        },
        address: string;
        context: {
            id: string;
            mapbox_id: string;
            text_en: string;
            text: string;
        }[];
    }[];
}

export interface DirectionsResponse {
    routes: {
        weight_name: string;
        weight: number;
        duration: number;
        distance: number;
        legs: {
            via_waypoints: unknown[];
            admins: {
                iso_3166_1_alpha3: string;
                iso_3166_1: string;
            },
            weight: number;
            duration: number;
            steps: {
                intersections: {
                    bearings: number[]
                    entry: boolean[]
                    mapbox_streets_v8: {
                     class: string;
                    },
                    is_urban: boolean;
                    admin_index: number
                    out: number;
                    geometry_index: number;
                    location: [number, number];
                }[];
                maneuver: {
                    bearing_after: number;
                    bearing_before: number;
                    location: [number, number];
                    type: string;
                    instruction: string;
                    modifier?: string;
                };
                geometry: {
                    coordinates: [number, number][];
                    type: string
                }[];
            }[];
            distance: number;
            summary: string;
        }[];
    }[];
}