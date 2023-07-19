
import { postgres ,Pool} from "../deps.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
    sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
    sql = postgres({});
}


const CONCURRENT_CONNECTIONS = 3;
const connectionPool = new Pool({}, CONCURRENT_CONNECTIONS);

const executeQuery = async (query, params) => {
    const response = {};
    let client;

    try {
        client = await connectionPool.connect();
        const result = await client.queryObject(query, params);
        if (result.rows) {
            response.rows = result.rows;
        }
    } catch (e) {
        response.error = e;
    } finally {
        try {
            await client.release();
        } catch (e) {
            console.log(e);
        }
    }
    return response;
};

export { executeQuery ,sql};


