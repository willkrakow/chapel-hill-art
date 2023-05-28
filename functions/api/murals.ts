interface Env {
    MURALS_DB: D1Database
}

interface IMural {
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

const createMuralsTable = `CREATE TABLE IF NOT EXISTS murals (id INTEGER PRIMARY KEY, address1 TEXT, address2 TEXT, city TEXT, state TEXT, zip INTEGER, title TEXT, artist_id INTEGER, image_url TEXT)`
const insertMural = `INSERT INTO murals (id, address1, address2, city, state, zip, title, artist_id, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const getMurals = `SELECT
    murals.id as id,
    murals.address1,
    murals.address2,
    murals.city,
    murals.state,
    murals.zip,
    murals.title,
    murals.artist_id,
    murals.image_url,
    artists.image_url as artist_image_url,
    artists.first_name as artist_first_name,
    artists.last_name as artist_last_name,
    artists.slug as artist_slug
FROM murals
LEFT JOIN artists
    ON murals.artist_id = artists.id`;

export const onRequest: PagesFunction<Env> = async (context) => {
    const s = context.env.MURALS_DB.prepare(createMuralsTable);
    await s.run();

    switch (context.request.method) {
        case "GET":
            const artists = context.env.MURALS_DB.prepare(getMurals)
            const results = await artists.all()
            return new Response(JSON.stringify({
                data: results.results
            }), { status: 200 })
        case "POST":
            const body = await context.request.json<IMural>()
            const insert = context.env.MURALS_DB.prepare(insertMural)
            const prepared = insert.bind(body.id, body.address1, body.address2, body.city, body.state, body.zip, body.title, body.artist_id, body.image_url)
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