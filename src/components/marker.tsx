import { useEffect, useRef } from "react";
import useMap from "../hooks/useMap"
import mapboxgl from "mapbox-gl";
import styled from "@emotion/styled";

const StyledMarker = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    border: none;
    display: block;
`;

interface MapMarkerProps {
    lngLat: [number, number];
    onClick?: () => void;
    anchor: "bottom" | "bottom-left"
 | "bottom-right"
}

const MapMarker = (props: MapMarkerProps) => {
    const {map} = useMap();
    const markerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      map?.on("load", () => {
        if (markerRef.current === null) return;

        const marker = new mapboxgl.Marker({
          element: markerRef.current,
          anchor: props.anchor,
        });

        marker.setLngLat(props.lngLat);
        marker.addTo(map!);
      });
    }, [map, markerRef.current]);

    useEffect(() => {
        return () => markerRef?.current?.remove();
    }, [])

    const handleClick = () => {
      map?.flyTo({
        center: props.lngLat,
        zoom: 14.53,
        pitch: 65,
        bearing: -180,
        essential: true,
        animate: true,
        curve: 1,
      });

      if (props.onClick) props.onClick();
    };


    return <StyledMarker ref={markerRef} onClick={handleClick} className="marker" />
}


export default MapMarker;