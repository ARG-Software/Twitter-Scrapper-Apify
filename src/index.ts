import { bootstrap } from "./main";
import dotenv from "dotenv";
dotenv.config();

export const APIFY_TOKEN = process.env.APIFY_TOKEN;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_KEY = process.env.SUPABASE_KEY;

(async () => {
  try {
    await bootstrap();
  } catch (error) {
    console.error("Error during bootstrap", error);
  }
})();
