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

   /* constructor(){
        let labprefix: string = "001";
        let pat1: string = "00000";
        let pat2: string = "0000";
        let pat3: string = "000";
        let pat4: string = "00";
        let pat5: string = "0";
        let code: number = 0;
        let codeamostra : string = "";
        if(!this.amostraPCR){
            code += 1;

            codeamostra = String(code);

            if(codeamostra.length === 1)






        }

    }*/

}

export { FSR };