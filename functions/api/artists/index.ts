interface Env {
    MURALS_DB: D1Database
}

interface IArtist {
    id: number;
    first_name: string;
    last_name: string;
    slug: string;
}

const createArtistTable = `CREATE TABLE IF NOT EXISTS artists (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT)`
const createBioTable = `CREATE TABLE IF NOT EXISTS bios (id INTEGER PRIMARY KEY, artist_id INTEGER, website TEXT, image_url TEXT, description TEXT, company_name TEXT)`
const insertArtist = `INSERT INTO artists (id, first_name, last_name) VALUES (?, ?, ?)`;
const getArtists = `SELECT * FROM artists LEFT JOIN bios ON artists.id = bios.artist_id`;

export const onRequest: PagesFunction<Env> = async (context) => {
    const q1 = context.env.MURALS_DB.prepare(createArtistTable);
    const q2 = context.env.MURALS_DB.prepare(createBioTable);
    await q1.run();
    await q2.run();

    switch (context.request.method) {
        case "GET":
            const artists = context.env.MURALS_DB.prepare(getArtists)
            const results = await artists.all()
            return new Response(JSON.stringify({
                data: results.results
            }), { status: 200 })
        case "POST":
            const body = await context.request.json<IArtist>()
            const insert = context.env.MURALS_DB.prepare(insertArtist)
            const prepared = insert.bind(body.id, body.first_name, body.last_name)
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