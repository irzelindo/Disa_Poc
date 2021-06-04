import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTipoProcessamento1622730940524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({

                name: "TipoProcessamento",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tipoProcessamento",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "status",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]


            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TipoProcessamento");
    }

}
