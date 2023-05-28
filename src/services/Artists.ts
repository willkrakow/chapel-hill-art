import { IArtist } from "../types/artists";
type GetAllArtistsResponse = Promise<{
    data: IArtist[];
}>

type CreateArtistResponse = Promise<{
    data: IArtist;
}>;

class Artists {
    static async getAll() {
        const res = await fetch('/api/artists');
        return res.json() as GetAllArtistsResponse;
    }

    static async create(artist: IArtist) {
        const res = await fetch('/api/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artist)
        });
        return res.json() as CreateArtistResponse;
    }

    static async createBio(artist: IArtist) {
        const res = await fetch('/api/bio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artist)
        });
        return res.json() as CreateArtistResponse;
    }

    static async getBySlug(slug: string){
        return fetch(`/api/artists/${slug}`).then(res => res.json()) as Promise<{ data: IArtist }>;
    }
}

export default Artists;