interface Env {
    MURALS_DB: D1Database
}

const getMuralById = `SELECT * FROM murals WHERE id = ?`;

export const onRequest: PagesFunction<Env> = async (context) => {
    switch (context.request.method) {
        case "GET":
            console.log(context.params.id)
            const murals = context.env.MURALS_DB.prepare(getMuralById).bind(context.params.id)
            const data = await murals.first()
            return new Response(JSON.stringify({ data }), { status: 200 })
        default:
            return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 })
    }
}