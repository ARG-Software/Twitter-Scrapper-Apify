import Apify from "apify";

export class TwScrapeActor {
  private readonly _client: Apify.ApifyClient;

  constructor(client: Apify.ApifyClient) {
    this._client = client;
  }

  async process(input: any): Promise<Record<string | number, unknown>[]> {
    const { defaultDatasetId } = await this._client.task("argsoftware/tweet-scraper-v2").call(input);
    // Fetches results from the actor's dataset.
    const { items } = await this._client.dataset(defaultDatasetId).listItems();
    return items;
  }
}
