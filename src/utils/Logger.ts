import * as fs from "fs";

export const logger = {
  /**
   * Only show log message when debuging.
   */
  log: (message: string) => {
    if (process.env.DEBUG) {
      console.log(message);
    }
  },
  /**
   * Error message always shows.
   */
  error: (message: string) => {
    console.error(message);
  }
};
