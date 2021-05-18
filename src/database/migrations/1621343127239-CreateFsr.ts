import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFsr1621343127239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "fsr",
                columns:[
                    {
                        name: "id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name: "nrOrdem",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nrLabOrdem",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "childNID",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "childName",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "childDOB",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "childGender",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "solicitanteNome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "solicitacaoData",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "colheitaData",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "maeNome",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "maeNID",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "consentimento",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "contactoPrimario",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "contactoSecundario",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "maePTV",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "childARV",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "colheitaTipo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "amostraPCRAnterior",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "amostraTipo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "processamentoTipo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "resultado",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "Us_FacilityNationalCode",
                        type: "varchar"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                    
                ],
                foreignKeys:[
                    {
                        name: "FKUnidadeSanitaria",
                        referencedTableName: "unidadeSanitaria",
                        referencedColumnNames:["UsFacilityNationalCode"],
                        columnNames:["Us_FacilityNationalCode"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ],

            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fsr");
    }

}
