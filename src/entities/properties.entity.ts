import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  value: number;

  @Column("int")
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses) @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories)
  category: Categories;

  @OneToMany(() => SchedulesUserProperties, schedulesUserProperties => schedulesUserProperties.property)
  schedulesUser: SchedulesUserProperties[];

}

export { Properties }
