import { Tweet } from "../../entities/tweet";

export interface ITweetRepository {
  getTweets(since: Date, until: Date): Promise<Tweet[]>;
  saveTweets(tweets: Tweet[]): Promise<void>;
}
