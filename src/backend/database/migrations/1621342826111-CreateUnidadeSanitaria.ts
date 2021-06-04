import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUnidadeSanitaria1621342826111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "unidadeSanitaria",
                columns:[
                    
                    {
                        name: "UsFacilityNationalCode",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "UsDisaCode",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "UsNome",
                        type: "varchar",
                    },
                    {
                        name: "UsProvincia",
                        type: "varchar",
                    },
                    {
                        name: "UsDistrito",
                        type: "varchar",
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
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("unidadeSanitaria");
    }

}
