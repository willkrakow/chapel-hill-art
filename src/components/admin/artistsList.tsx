import { IArtist } from "../../types/artists";
import { ListItem, ListItemTitle } from "../common/listItem";
import EditArtistBio from "./editArtistBio";

interface IAdminArtistsList {
    data: IArtist[];
}
const AdminArtistsList = ({data}: IAdminArtistsList) => {
    return (
        <div>
            <ul>
                {data.map((artist) => (
                    <ListItem key={artist.id}>
                        <ListItemTitle>
                            {artist.first_name} {artist.last_name}
                        </ListItemTitle>
                        <EditArtistBio artist={artist} />
                    </ListItem>
                ))}
            </ul>
        </div>
    )
}

export default AdminArtistsList