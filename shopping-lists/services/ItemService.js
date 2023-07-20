import { sql,executeQuery } from "../database/database.js";
const createWorkEntry = async (taskId) => {
    await sql`INSERT INTO
    work_entries (task_id, started_on)
    VALUES (${taskId}, NOW())`;
};

const findCurrentWorkEntry = async (taskId) => {
    const rows = await sql`SELECT * FROM work_entries
    WHERE task_id = ${ taskId } AND finished_on IS NULL`;

    if (rows && rows.length > 0) {
        return rows[0];
    }

    return false;
};

const finishWorkEntry = async (id) => {
    await sql`UPDATE work_entries
    SET finished_on = NOW() WHERE id = ${ id }`;
};