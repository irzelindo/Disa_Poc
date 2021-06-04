import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { UnidadeSanitaria } from "./UnidadeSanitaria";


@Entity("fsr")
class FSR {
    //@PrimaryGeneratedColumn()
    @PrimaryColumn()
    amostraPCR: string;

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
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

}

export { FSR };