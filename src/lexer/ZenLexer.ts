import * as fs from "fs";
import { logger } from "../utils/Logger";

export const ZenLexer = {
  parse: (dir: string) => {
    const content: string = fs.readFileSync(dir, { encoding: "utf-8" });
    logger.log(content);
  }
};
