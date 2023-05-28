interface Env {
    MURALS_DB: D1Database
}

interface IBio {
    id: number;
    artist_id: number;
    website: string;
    image_url: string;
    description: string;
    company_name: string;
}

const createBioTable = `CREATE TABLE IF NOT EXISTS bios (id INTEGER PRIMARY KEY, artist_id INTEGER, website TEXT, image_url TEXT, description TEXT, company_name TEXT)`
const insertBio = `INSERT INTO bios (id, artist_id, website, image_url, description, company_name) VALUES (?, ?, ?, ?, ?, ?)`;
const getBioByArtistId = `SELECT * FROM bios WHERE artist_id = ?`;

export const onRequest: PagesFunction<Env> = async (context) => {
    const q1 = context.env.MURALS_DB.prepare(createBioTable);
    await q1.run();

    switch (context.request.method) {
        case "GET":
            const artistId = new URL(context.request.url).searchParams.get("artist_id")
            const bioQ = context.env.MURALS_DB.prepare(getBioByArtistId).bind(artistId)
            const results = await bioQ.all()
            return new Response(JSON.stringify({
                data: results.results
            }), { status: 200 })
        case "POST":
            const body = await context.request.json<IBio>()
            const insert = context.env.MURALS_DB.prepare(insertBio)
            const prepared = insert.bind(body.id, body.artist_id, body.website, body.image_url, body.description, body.company_name)
            const result = await prepared.run()

            return new Response(JSON.stringify({
                data: result.results
            }), { status: 200 })
        default:
            const error = {
                error: "Method not allowed"
            }
            return new Response(JSON.stringify(error), { status: 405 })
    }
}