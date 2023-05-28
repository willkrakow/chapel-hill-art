import { useLoaderData } from "react-router-dom";
import { IArtist } from "../../types/artists";
import AdminArtistsList from "./artistsList";
import CreateArtist from "./createArtist";

interface ArtistLoaderData {
    data: IArtist[];
}

const AdminArtists = () => {
    const data = useLoaderData() as ArtistLoaderData;

    return (
        <div>
            <AdminArtistsList data={data.data} />
            <CreateArtist newId={data.data.length + 1} />
        </div>
    )
}

export default AdminArtists