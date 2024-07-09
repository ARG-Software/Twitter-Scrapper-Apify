import { ApifyClient } from "apify-client";
import { apifyToken } from "./config";
import { formatDate } from "./utils";

export async function startScrapper() {
    console.log("Apify: ", ApifyClient);
    const apifyClient = new ApifyClient({ token: apifyToken });
    console.log(apifyClient.token);

    const sinceDate = new Date(1713215337000);
    const sinceFormatted = formatDate(sinceDate);
    console.log("since:", sinceFormatted);

    const untilDate = new Date(1713215757000);
    const untilFormatted = formatDate(untilDate);
    console.log("until:", sinceFormatted);

    const input = {
      searchTerms: ["since:" + sinceFormatted, "until:" + untilFormatted],
    };

    // Starts an actor and waits for it to finish.
    const { defaultDatasetId } = await apifyClient.task("argsoftware/tweet-scraper-v2").call(input);
    // Fetches results from the actor's dataset.
    const { items } = await apifyClient.dataset(defaultDatasetId).listItems();
    console.log("items: ", items);
  } catch (error: unknown) {
    console.error("Error fetching root directory contents:", error);
  }
}
