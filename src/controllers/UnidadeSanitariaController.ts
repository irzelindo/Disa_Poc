import { Request, Response } from "express";
import { UnidadeSanitariaService } from "../services/UnidadeSanitariaService"




class UnidadeSanitariaController {

  async create(request: Request, response: Response){
    const { UsFacilityNationalCode, UsDisaCode, UsNome, UsProvincia, UsDistrito } = request.body;
    
    const unidadeSanitariaService = new UnidadeSanitariaService();

    try{

      const unidadeSanitaria = await unidadeSanitariaService.create({UsFacilityNationalCode, UsDisaCode, UsNome, UsProvincia, UsDistrito});
      return response.json(unidadeSanitaria);
    }catch (err){
      return response.status(400).json({
        message: err.message
      });
    }



  }  

}

export { UnidadeSanitariaController };