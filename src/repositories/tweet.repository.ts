import { EntityRepository, MikroORM } from "@mikro-orm/core";
import { Tweet } from "../entities/tweet";
import { ITweetRepository } from "../interfaces/repositories/itweet.repository";

export class TweetRepository implements ITweetRepository {
  private orm: MikroORM;
  private repo: EntityRepository<Tweet>;

  constructor(orm: MikroORM) {
    this.orm = orm;
    this.repo = this.orm.em.getRepository(Tweet);
  }
  async getTweets(since: Date, until: Date): Promise<Tweet[]> {
    try {
      const tweets = this.repo.find({
        createdAt: {
          $gte: since,
          $lt: until,
        },
      });
      return tweets;
    } catch (error) {
      console.error("Error fetching tweets:", error);
      throw error;
    }
  }

  async saveTweets(tweets: Tweet[]): Promise<void> {
    try {
      await this.repo.insertMany(tweets);
    } catch (error) {
      console.error("Error saving tweets:", error);
      throw error;
    }
  }
}
