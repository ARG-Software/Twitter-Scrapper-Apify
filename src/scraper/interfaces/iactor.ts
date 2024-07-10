import { Tweet } from "../../entities/tweet";

export interface IActor {
  process(task: string, input: any): Promise<Tweet[]>;
}
