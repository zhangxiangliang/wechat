import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", default: "" })
  username: string;

  @Column({ type: "varchar", default: "", unique: true })
  email: string;

  @Column({ type: "varchar", default: "" })
  password: string;

  @Column({ type: "varchar", default: "", unique: true })
  openid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
