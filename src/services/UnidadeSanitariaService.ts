import { getCustomRepository } from "typeorm";
import { UnidadeSanitariaRepository } from "../repositories/UnidadeSanitariaRepository"; 

interface IUnidadeSanitariaCreate{
    UsFacilityNationalCode: string;
    UsDisaCode: string;
    UsNome: string;
    UsProvincia: string;
    UsDistrito: string;

}


class UnidadeSanitariaService {

    async create({ UsFacilityNationalCode, UsDisaCode, UsNome, UsProvincia, UsDistrito }: IUnidadeSanitariaCreate) {
        const unidadeSanitariaRepository = getCustomRepository(UnidadeSanitariaRepository);

        const usAlreadyExists = await unidadeSanitariaRepository.findOne({UsFacilityNationalCode});

        if(usAlreadyExists){
            throw new Error("A Unidade sanitaria Ja existe!!!")
        }

        const unidadeSanitaria = unidadeSanitariaRepository.create({
    
            UsFacilityNationalCode,
            UsDisaCode,
            UsNome,
            UsProvincia,
            UsDistrito,
        });
    
    
        await unidadeSanitariaRepository.save(unidadeSanitaria);

        return unidadeSanitaria;

    }


}


export { UnidadeSanitariaService }