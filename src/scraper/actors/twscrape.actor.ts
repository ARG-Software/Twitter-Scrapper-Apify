import { ApifyClient } from "apify";
import { IActor } from "../interfaces/iactor";
import { Tweet } from "../../entities/tweet";

export class TwScrapeActor implements IActor {
  private readonly _client: ApifyClient;
  //   private readonly _tasks: Array<string>;

  constructor(client: ApifyClient) {
    this._client = client;
    // this._tasks = ["argsoftware/tweet-scraper-v2"];
  }

  async process(task: string, input: any): Promise<Tweet[]> {
    const { defaultDatasetId } = await this._client.task(task).call(input);
    // Fetches results from the actor's dataset.
    const { items } = await this._client.dataset(defaultDatasetId).listItems();
    return items as any;
  }
}
