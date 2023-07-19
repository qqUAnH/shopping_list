import { sql } from "../database/database.js";

const create = async (name) => {
    await sql`INSERT INTO tasks (name) VALUES (${ name })`;
};