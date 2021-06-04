import { Router } from "express";
import { Fsrcontroller } from "./controllers/FsrController";
import { UnidadeSanitariaController } from "./controllers/UnidadeSanitariaController";


const routes = Router();

const unidadeSanitariaController = new UnidadeSanitariaController();
const fsrController              = new Fsrcontroller();

routes.post("/UnidadeSanitaria", unidadeSanitariaController.create);
routes.post("/fsr", fsrController.create);

export { routes };

