import { Map } from "mapbox-gl";
import { createContext } from "react";

interface IMapContext {
  map: Map | null;
}

export const MapContext = createContext<IMapContext>({
  map: null,
});
