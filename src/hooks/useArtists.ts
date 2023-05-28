import { useEffect, useState } from "react"
import { IArtist } from "../types/artists"
import Artists from "../services/Artists"

const useArtists = () => {
    const [artists, setArtists] = useState<IArtist[]>([])

    useEffect(() => {
        (async () => {
            const res = await Artists.getAll();
            setArtists(res.data)
        })()
    }, [])

    return artists
}

export default useArtists