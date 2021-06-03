import { Request, Response } from "express";
import { FsrService } from "../services/FsrService"




class Fsrcontroller {

    async create(request: Request, response: Response){
        const { amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
            colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
            amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode } = request.body;

        const fsrService = new FsrService();

        const fsr = await fsrService.create({ amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
            colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
            amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode })

        return response.json(fsr);
    }

}

export { Fsrcontroller };