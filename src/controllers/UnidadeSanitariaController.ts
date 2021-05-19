import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UnidadeSanitariaRepository } from "../repositories/UnidadeSanitariaRepository"; 


class UnidadeSanitariaController {

  async create(request: Request, response: Response){
    const { UsFacilityNationalCode, UsDisaCode, UsNome, UsProvincia, UsDistrito } = request.body;
    const unidadeSanitariaRepository = getCustomRepository(UnidadeSanitariaRepository);

    const unidadeSanitaria = unidadeSanitariaRepository.create({

        UsFacilityNationalCode,
        UsDisaCode,
        UsNome,
        UsProvincia,
        UsDistrito,
    })


    await unidadeSanitariaRepository.save(unidadeSanitaria);

    return response.json(unidadeSanitaria);

  }  

}

export { UnidadeSanitariaController };