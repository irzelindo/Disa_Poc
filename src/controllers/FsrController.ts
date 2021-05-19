import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { FsrRepository } from "../repositories/FsrRepository";




class Fsrcontroller {

    async create(request: Request, response: Response){
        const { amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
            colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
            amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode } = request.body;

        const fsrRepository = getCustomRepository(FsrRepository);

        const fsr = fsrRepository.create({ amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
            colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
            amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode })

        await fsrRepository.save(fsr);

        return response.json(fsr);
    }

}

export { Fsrcontroller };