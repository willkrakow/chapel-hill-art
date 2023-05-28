export interface IMural {
    id: number;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    title: string;
    artist_id: number | null;
    image_url: string;
}

export type IMuralJoined = {
    artist_first_name: string;
    artist_last_name: string;
    artist_slug: string;
} & IMural