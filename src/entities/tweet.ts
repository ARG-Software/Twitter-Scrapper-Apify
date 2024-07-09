import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Tweet {
  @PrimaryKey()
  id!: number;

  @Property()
  tweetId!: string;

  @Property()
  text!: string;

  @Property()
  createdAt = new Date();
}

