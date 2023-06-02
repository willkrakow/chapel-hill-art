import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import styled from "@emotion/styled";
import { useRouteLoaderData } from "react-router-dom";
import { IMuralJoined } from "../types/murals";
import List from "../components/common/list";
import { ListItem, ListItemText } from "../components/common/listItem";
import { MapContext } from "../contexts/Map";
import MapService from "../services/Maps";

const Container = styled.div`
  min-height: 60vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const DataContainer = styled.div`
  height: 100%;
  flex: 1 0 200px;
`;

const MapContainer = styled.div`
  flex: 1 0 500px;
  height: 100%;
  max-height: calc(100vh - 100px);
`;

interface MuralsLoaderData {
  data: IMuralJoined[];
}

const MapPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const data = useRouteLoaderData("root") as MuralsLoaderData;
  const [currentMural, setCurrentMural] = useState<IMuralJoined & {coords?: [number, number]} | null>(
    data.data?.[0]
  );

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

    console.log(import.meta.env.VITE_MAPBOX_STYLE);

    setMap(m);

    return () => {
      m.remove();
    };
  }, []);

  const getMuralDetails = async (mural: IMuralJoined) => {
    const muralAddress = `${mural.address1} ${mural.city}, ${mural.state} ${mural.zip}`;

    const selectedMuralData = await MapService.getCoords(muralAddress);
    return {
        ...mural,
        coords: selectedMuralData.data.features[0].center,
    }
  };

  const handleMoveCamera = (mural?: IMuralJoined) => async () => {
    if (!map || !mural) return;
    const mapData = await getMuralDetails(mural);
    console.log(mapData.coords);
    map.flyTo({
      center: mapData.coords,
      zoom: 19,
      bearing: -180,
      pitch: 85,
    });
    setCurrentMural(mapData);
  };

  return (
    <MapContext.Provider value={{ map }}>
      <Container>
        <DataContainer>
          <List>
            {data?.data &&
              data.data.map((mural) => {
                const isActive = currentMural?.id === mural.id;
                const className = isActive ? "active" : undefined;
                return (
                  <ListItem className={className} key={mural.id} onClick={handleMoveCamera(mural)}>
                    <ListItemText className={className}>
                      {mural.title}
                    </ListItemText>
                  </ListItem>
                );
              })}
          </List>
        </DataContainer>
        <MapContainer ref={containerRef} />
      </Container>
    </MapContext.Provider>
  );
};

export default MapPage;
