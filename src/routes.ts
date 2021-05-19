import { Router } from "express";
import { UnidadeSanitariaController } from "./controllers/UnidadeSanitariaController";


const routes = Router();

const unidadeSanitariaController = new UnidadeSanitariaController();

routes.post("/UnidadeSanitaria", unidadeSanitariaController.create);

export { routes };

