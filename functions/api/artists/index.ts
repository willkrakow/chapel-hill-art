interface Env {
    MURALS_DB: D1Database;
    R2_RENDERS: R2Bucket;
}

const getArtists = `SELECT * FROM artists`;

export const onRequest: PagesFunction<Env> = async (context) => {
    switch (context.request.method) {
        case "GET":
            const artists = context.env.MURALS_DB.prepare(getArtists)
            const {results: data} = await artists.all()
            return new Response(JSON.stringify({ data }), { status: 200 })
        default:
            return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 })
    }
}