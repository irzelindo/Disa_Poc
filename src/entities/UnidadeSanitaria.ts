import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("unidadeSanitaria")
class UnidadeSanitaria {

    @PrimaryColumn()
    UsFacilityNationalCode: string;

    @Column()
    UsDisaCode: string;
    
    @Column()
    UsNome: string;

    @Column()
    UsProvincia: string;

    @Column()
    UsDistrito: string;

    @CreateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;


}

export { UnidadeSanitaria } 