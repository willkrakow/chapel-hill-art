import { along, lineString } from "@turf/turf";
import {Map, MercatorCoordinate } from 'mapbox-gl';
interface CreateFrameHandlerProps {
    start?: number;
    targetRoute: any[];
    routeDistance: number;
    cameraRoute: any[];
    cameraRouteDistance: number;
}
export function createFrameHandler(map: Map, props: CreateFrameHandlerProps) {
    return function (time: number) {
        let start = props.start || time;
        // phase determines how far through the animation we are
        const phase = (time - start) / ANIMATION_DURATION;

        // phase is normalized between 0 and 1
        // when the animation is finished, reset start to loop the animation
        if (phase > 1) {
            // wait 1.5 seconds before looping
            setTimeout(() => (start = 0.0), 1500);
        }

        // use the phase to get a point that is the appropriate distance along the route
        // this approach syncs the camera and route positions ensuring they move
        // at roughly equal rates even if they don't contain the same number of points
        const alongRoute = along(
            lineString(props.targetRoute),
            props.routeDistance * phase
        ).geometry.coordinates;

        const alongCamera = along(
            lineString(props.cameraRoute),
            props.cameraRouteDistance * phase
        ).geometry.coordinates;

        const camera = map.getFreeCameraOptions();

        // set the position and altitude of the camera
        camera.position = MercatorCoordinate.fromLngLat(
            {
                lng: alongCamera[0],
                lat: alongCamera[1],
            },
            CAMERA_ALTITUDE
        );

        // tell the camera to look at a point along the route
        camera.lookAtPoint({
            lng: alongRoute[0],
            lat: alongRoute[1],
        });

        map.setFreeCameraOptions(camera);
    };
}
export const demoSource = {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 14,
} as const;

export const terrain = { source: "mapbox-dem", exaggeration: 2.5 } as const;
export const lineLayer = {
    type: "line",
    source: "trace",
    id: "line",
    paint: {
        "line-color": "black",
        "line-width": 5,
    },
    layout: {
        "line-cap": "round",
        "line-join": "round",
    },
} as const;

const ANIMATION_DURATION = 80000;
const CAMERA_ALTITUDE = 4000;