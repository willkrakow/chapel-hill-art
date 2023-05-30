import { createContext, useContext, useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import styled from "@emotion/styled";
import MapMarker from "../components/marker";

interface IMapContext {
  map: Map | null;
}

export const MapContext = createContext<IMapContext>({
  map: null,
});

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
`;

export const MapProvider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const m = new mapboxgl.Map({
      container: containerRef.current!,
      zoom: 14.53,
      center: [-79.057307, 35.912583],
      pitch: 65,
      bearing: -180,
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: import.meta.env.VITE_MAPBOX_STYLE,
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    });

    setMap(m);

    return () => {
      m.remove();
    };
  }, []);

  return (
    <MapContext.Provider value={{ map }}>
      <Container>
        <MapContainer ref={containerRef}>
          <MapMarker lngLat={[-79.057307, 35.912583]} anchor="bottom" />
          <MapMarker lngLat={[-79.057407, 35.918683]} anchor="bottom" />
        </MapContainer>
      </Container>
    </MapContext.Provider>
  );
};

export const useMap = () => useContext(MapContext);
