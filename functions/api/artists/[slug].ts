interface Env {
    MURALS_DB: D1Database;
    R2_RENDERS: R2Bucket;
}

const getArtistBySlug = `SELECT * FROM artists WHERE slug = ?`;

export const onRequest: PagesFunction<Env> = async (context) => {
    switch (context.request.method) {
        case "GET":
            const artists = context.env.MURALS_DB.prepare(getArtistBySlug).bind(context.params.slug)
            const data = await artists.first()
            return new Response(JSON.stringify({ data }), { status: 200 })
        default:
            return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 })
    }
}