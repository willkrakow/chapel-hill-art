import { IMural } from "../types/murals"


type GetAllMuralsResponse = Promise<{
    data: IMural[]
}>

type CreateMuralResponse = Promise<{
    data: IMural
}>;

class Murals {
    static async getAll(){
        const res = await fetch('/api/murals')
        return res.json() as GetAllMuralsResponse
    }

    static async create(mural: IMural){
        const res = await fetch('/api/murals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mural)
        })
        return res.json() as CreateMuralResponse
    }
}

export default Murals