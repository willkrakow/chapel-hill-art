import { IMural } from "../../types/murals";
import { ListItem, ListItemText, ListItemTitle } from "../common/listItem";

interface MuralListLoaderData {
    data: IMural[];
}

const AdminMuralList = ({ data }: MuralListLoaderData) => {
    return (
        <div>
            <ul>
                {data.map((mural) => (
                    <ListItem key={mural.id}>
                        <ListItemTitle>
                        {mural.title}
                        </ListItemTitle>
                        <ListItemText>
                            {mural.address1}
                        </ListItemText>
                        {mural.address2 && (
                            <ListItemText>
                                {mural.address2}
                            </ListItemText>
                        )}
                        <ListItemText>
                            {mural.city}, {mural.state} {mural.zip}
                        </ListItemText>
                        <ListItemText>
                            {mural.image_url}
                        </ListItemText>
                        <ListItemText>
                            {mural.artist_id}
                        </ListItemText>
                    </ListItem>
                ))}
            </ul>
        </div>
    )
}

export default AdminMuralList