import { getCustomRepository } from "typeorm";
import { FsrRepository } from "../repositories/FsrRepository";

interface IFsrCreate {

    amostraPCR: string;
    nrOrdem: string; 
    nrLabOrdem: string;
    childNID: string;
    childName: string;
    childDOB: Date;
    childGender: string;
    solicitanteNome: string;
    solicitacaoData: Date;
    colheitaData: Date;
    maeNome: string;
    maeNID: string;
    consentimento: string;
    contactoPrimario: string;
    contactoSecundario: string;
    maePTV: string;
    childARV: string;
    colheitaTipo: string;
    amostraPCRAnterior: string;
    amostraTipo: string;
    processamentoTipo: string;
    resultado: string;
    Us_FacilityNationalCode: string;
}

class FsrService {

    async create({ amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
        colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
        amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode }: IFsrCreate) {
        
        const fsrRepository = getCustomRepository(FsrRepository);
            
            const fsr = fsrRepository.create({
                amostraPCR, nrOrdem, nrLabOrdem, childNID, childName, childDOB, childGender, solicitanteNome, solicitacaoData,
                colheitaData, maeNome, maeNID, consentimento, contactoPrimario, contactoSecundario, maePTV, childARV, colheitaTipo,
                amostraPCRAnterior, amostraTipo, processamentoTipo, resultado, Us_FacilityNationalCode
            });

            await fsrRepository.save(fsr);
            return fsr;
        }




}

export { FsrService };



