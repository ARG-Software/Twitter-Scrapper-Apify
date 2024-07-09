import { startScrapper } from "./main";
import dotenv from "dotenv";

dotenv.config();

export const APIFY_TOKEN = process.env.APIFY_TOKEN;

try {
  startScrapper();
} catch (error: any) {
  console.error("Error scrapper:", error);
}
