import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { UnidadeSanitaria } from "./UnidadeSanitaria";


@Entity("fsr")
class FSR {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nrOrdem: string; 

    @Column()
    nrLabOrdem: string;

    @Column() 
    childNID: string;

    @Column() 
    childName: string;

    @Column()
    childDOB: Date;

    @Column() 
    childGender: string;

    @Column() 
    solicitanteNome: string;

    @Column() 
    solicitacaoData: Date;

    @Column() 
    colheitaData: Date;

    @Column()
    maeNome: string;

    @Column()
    maeNID: string;

    @Column()
    consentimento: string;

    @Column()
    contactoPrimario: string;

    @Column()
    contactoSecundario: string;

    @Column()
    maePTV: string;

    @Column()
    childARV: string;

    @Column()
    colheitaTipo: string;

    @Column()
    amostraPCRAnterior: string;

    @Column()
    amostraTipo: string;

    @Column()
    processamentoTipo: string;

    @Column()
    resultado: string;

    @Column()
    Us_FacilityNationalCode: string;


    @ManyToOne(() => UnidadeSanitaria)
    @JoinColumn({name: "Us_FacilityNationalCode"})
    unidadeSanitaria: UnidadeSanitaria

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }

    }


}

export { FSR };