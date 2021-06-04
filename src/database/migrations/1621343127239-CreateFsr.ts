import {IsNull, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFsr1621343127239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "fsr",
                columns:[
                    {
                        name: "amostraPCR",
                        type: "varchar",
                       // generationStrategy: "increment",
                        isPrimary: true
                    },
                    {
                        name: "nrOrdem",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nrLab",
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
                        isNullable: false
                    },
                    {
                        name: "colheitaData",
                        type: "timestamp",
                        isNullable: false
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
                        name: "amostraPCRAnterior",
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
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "childNID",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "colheitaTipo_id",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "amostraTipo_id",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "processamentoTipo_id",
                        type: "varchar",
                        isNullable: false
                    },
                    
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
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
                    {
                        name: "FKtipoProcessamento",
                        referencedTableName: "TipoProcessamento",
                        referencedColumnNames:["id"],
                        columnNames:["processamentoTipo_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKcrianca",
                        referencedTableName: "crianca",
                        referencedColumnNames:["nid"],
                        columnNames:["childNID"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKtipoColheita",
                        referencedTableName: "tipoColheita",
                        referencedColumnNames:["id"],
                        columnNames:["colheitaTipo_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKtipoAmostra",
                        referencedTableName: "tipoAmostra",
                        referencedColumnNames:["id"],
                        columnNames:["amostraTipo_id"],
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
