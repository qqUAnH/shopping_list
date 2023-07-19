import { serve } from "./deps.js";
import { configure } from "./deps.js";
import * as taskController from "./controllers/listController.js";
import * as workEntryController from "./controllers/itemController.js";
import * as requestUtils from "./utils/requestUtils.js"

const handleRequest = async (request) => {
  console.log("Responding with Hello world!");
  return new Response("Hello world!");
};

serve(handleRequest, { port: 7777 });
