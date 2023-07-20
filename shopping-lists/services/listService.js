import { executeQuery} from "../database/database.js";
import {redirectTo} from "../utils/requestsUtils";

//TODO:Change to execute Query
const create = async (name) => {
    await executeQuery(`INSERT INTO tasks (name) VALUES (${ name })`, {name :name});
    redirectTo("/lists")
};

const findActiveList = async () => {
    const result = await executeQuery("SELECT * FROM shopping_list WHERE active = TRUE" );
    return result.rows;
}


export { create, findActiveList}