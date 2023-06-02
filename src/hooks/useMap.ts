import { useContext } from "react";
import { MapContext } from "../contexts/Map";

const useMap = () => useContext(MapContext);

export default useMap;