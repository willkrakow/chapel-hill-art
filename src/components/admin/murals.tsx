import { IMural } from "../../types/murals"
import { getNewId } from "../../utils";
import CreateMural from "./createMural"
import AdminMuralList from "./muralList"
import { useLoaderData } from "react-router-dom"

interface MuralListLoaderData {
    data: IMural[];
}

const AdminMurals = () => {
    const murals = useLoaderData() as MuralListLoaderData;
    const newId = getNewId(murals.data);

    return (
        <div>
            <AdminMuralList data={murals.data} />
            <CreateMural newId={newId} />
        </div>
    )
}

export default AdminMurals