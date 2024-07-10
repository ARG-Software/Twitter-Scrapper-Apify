import { IScraper } from "./interfaces/iscrapper";
import { Tweet } from "../entities/tweet";
import { IActor } from "./interfaces/iactor";
import { formatDate } from "../utils";

export class ApifyScraper implements IScraper {
  private readonly _actor: IActor;

  constructor(actor: IActor) {
    this._actor = actor;
  }

  async scrape(): Promise<Tweet[]> {
    const sinceDate = new Date(1713215337000);
    const sinceFormatted = formatDate(sinceDate);

    const untilDate = new Date(1713215757000);
    const untilFormatted = formatDate(untilDate);

    const input = {
      searchTerms: ["since:" + sinceFormatted, "until:" + untilFormatted],
    };

    const query = {
      query: "since:2021-01-01 until:2021-12-31",
      limit: 100,
      fromCursor: null,
    };
    const result = await this._actor.process("taskName", query);

    return result as any;
  }
}
