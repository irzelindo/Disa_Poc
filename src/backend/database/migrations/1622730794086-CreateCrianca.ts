import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCrianca1622730794086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "crianca",
                columns:[
                    {
                        name: "nid",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable:false
                    },
                    {
                        name: "dataNascimento",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "sexo",
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


                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("crianca");
    }

}
