import { Tweet } from "../../entities/tweet";

export interface IScraper {
  scrape(): Promise<Tweet[]>;
}
