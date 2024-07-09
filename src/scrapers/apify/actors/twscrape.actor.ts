import Apify from "apify";

export class TwScrapeActor {
  private readonly _client: Apify.ApifyClient;
  //   private readonly _tasks: Array<string>;

  constructor(client: Apify.ApifyClient) {
    this._client = client;
    // this._tasks = ["argsoftware/tweet-scraper-v2"];
  }

  async process(task: string, input: any): Promise<Record<string | number, unknown>[]> {
    const { defaultDatasetId } = await this._client.task(task).call(input);
    // Fetches results from the actor's dataset.
    const { items } = await this._client.dataset(defaultDatasetId).listItems();
    return items;
  }
}
