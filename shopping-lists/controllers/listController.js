import { renderFile } from "../deps.js"
import * as listService from "../services/listService.js";
import {redirectTo} from "../utils/requestsUtils.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");
    await listService.create(name);
    return redirectTo("/lists");
};
const viewLists = async (request) => {
    const data = {
        tasks: await listService.findActiveList(),
    };
    return new Response(await renderFile("lists.eta", data), responseDetails);
};

export { addList, viewLists };