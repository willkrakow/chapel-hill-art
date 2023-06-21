interface Env {
    MURALS_DB: D1Database;
    R2_RENDERS: R2Bucket;
}

const getMuralById = `SELECT * FROM murals WHERE id = ?`;

export const onRequest: PagesFunction<Env> = async (context) => {
    switch (context.request.method) {
        case "GET":
            const murals = context.env.MURALS_DB.prepare(getMuralById).bind(context.params.id)
            const data = await murals.first()
            return new Response(JSON.stringify({ data }), { status: 200 })
        default:
            return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 })
    }
}