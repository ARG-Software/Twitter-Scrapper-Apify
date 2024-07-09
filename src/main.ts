import { ApifyClient } from "apify-client";
import { APIFY_TOKEN } from "./index";
import { formatDate } from "./utils";
import { IScraper } from "./interfaces/scrapper/iscrapper";
import { ApifyScraper } from "./scrapers/apify/scraper";

export async function bootstrap() {
  const apifyClient = new ApifyClient({ token: APIFY_TOKEN });

  const sinceDate = new Date(1713215337000);
  const sinceFormatted = formatDate(sinceDate);

  const untilDate = new Date(1713215757000);
  const untilFormatted = formatDate(untilDate);

  const scrapper: IScraper = new ApifyScraper(APIFY_TOKEN as string);

  const input = {
    searchTerms: ["since:" + sinceFormatted, "until:" + untilFormatted],
  };

  // Starts an actor and waits for it to finish.
  const { defaultDatasetId } = await apifyClient.task("argsoftware/tweet-scraper-v2").call(input);
  // Fetches results from the actor's dataset.
  const { items } = await apifyClient.dataset(defaultDatasetId).listItems();
  console.log("items: ", items);
}
