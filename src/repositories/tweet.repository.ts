import { Tweet } from "../entities/tweet";
import { ITweetRepository } from "../interfaces/repositories/itweet.repository";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class TweetRepository implements ITweetRepository {
  private readonly _supabaseUrl: string;
  private readonly _supabaseKey: string;
  private readonly _repo: SupabaseClient;

  constructor(supabaseUrl: string, supabaseAnonKey: string) {
    this._supabaseUrl = supabaseUrl;
    this._supabaseKey = supabaseAnonKey;
    try {
      this._repo = createClient(this._supabaseUrl, this._supabaseKey);
    } catch (error) {
      console.error("Error creating Supabase client:", error);
      throw new Error("Failed to initialize TweetRepository");
    }
  }
  async getTweets(since: Date, until: Date): Promise<Tweet[]> {
    const { data, error } = await this._repo
      .from("tweets")
      .select("*")
      .gte("created_at", since)
      .lte("created_at", until);
    if (error) {
      throw error;
    }

    return data;
  }

  async saveTweets(tweets: Tweet[]): Promise<void> {
    const { error } = await this._repo.from("tweets").insert(tweets);
    if (error) {
      throw error;
    }
  }
}
