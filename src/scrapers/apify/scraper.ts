import { ApifyClient } from "apify";
import { IScraper } from "../../interfaces/scrapper/iscrapper";
import { Tweet } from "../../entities/tweet";
import { TwScrapeActor } from "./actors/twscrape.actor";

export class ApifyScraper implements IScraper {
  private client: ApifyClient;
  private actor: TwScrapeActor;

  constructor(apiToken: string) {
    this.client = new ApifyClient({ token: apiToken });
    this.actor = new TwScrapeActor(this.client);
  }

  async scrape(): Promise<Tweet[]> {
    const query = {
      query: "since:2021-01-01 until:2021-12-31",
      limit: 100,
      fromCursor: null,
    };
    const result = await this.actor.process("taskName", query);
    // const tweets: Tweet[] = result.map((item) => ({
    //   id: item.id,
    //   tweetId: item.tweetId,
    //   text: item.text,
    //   createdAt: new Date(item.createdAt as string),
    // }));

    return result as any;
  }
}
