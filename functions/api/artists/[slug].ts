interface Env {
    MURALS_DB: D1Database
}

const getArtistBySlug = `SELECT * FROM artists WHERE slug = ?`;

export const onRequest: PagesFunction<Env> = async (context) => {
    switch (context.request.method) {
        case "GET":
            console.log(context.params.slug)
            const artists = context.env.MURALS_DB.prepare(getArtistBySlug).bind(context.params.slug)
            const results = await artists.first()
            return new Response(JSON.stringify({
                data: results
            }), { status: 200 })
        default:
            const error = {
                error: "Method not allowed"
            }
            return new Response(JSON.stringify(error), { status: 405 })
    }
}