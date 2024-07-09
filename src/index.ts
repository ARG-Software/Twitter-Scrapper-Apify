import { startScrapper } from "./main";

try {
  startScrapper();
} catch (error: any) {
  console.error("Error scrapper:", error);
}
