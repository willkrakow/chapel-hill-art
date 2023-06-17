interface Env {
    MURALS_DB: D1Database;
    R2_RENDERS: R2Bucket;
}

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
    switch (context.request.method) {
        case "GET":
            const artists = context.env.MURALS_DB.prepare(getMurals)
            const results = await artists.all()
            return new Response(JSON.stringify({
                data: results.results
            }), { status: 200 })
        default:
            const error = {
                error: "Method not allowed"
            }
            return new Response(JSON.stringify(error), { status: 405 })
    }
}