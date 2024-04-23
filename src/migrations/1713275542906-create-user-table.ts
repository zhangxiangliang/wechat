import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1713275542906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "username",
            type: "varchar",
            isNullable: true,
            default: "''",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: true,
            default: "''",
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
            default: "''",
          },
          {
            name: "openid",
            type: "varchar",
            isUnique: true,
            isNullable: true,
            default: "''",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
