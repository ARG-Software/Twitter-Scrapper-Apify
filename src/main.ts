import { ApifyClient } from "apify-client";
import { APIFY_TOKEN } from "./index";
import { IScraper } from "./scraper/interfaces/iscrapper";
import { ApifyScraper } from "./scraper/scraper";
import { TwScrapeActor } from "./scraper/actors/twscrape.actor";

export async function bootstrap() {
  const apifyClient = new ApifyClient({ token: APIFY_TOKEN });

  const actor = new TwScrapeActor(apifyClient);

  const scrapper: IScraper = new ApifyScraper(actor);

  try {
    await scrapper.scrape();
  } catch (error) {
    console.error(error);
  }
}
