import { ZenLexer } from "../lexer/ZenLexer";
import { zfs as fs } from "../utils/FileSystem";
import { logger } from "../utils/Logger";

export function parse(path: string) {
  const dir = fs.normalize(path);

  if (!fs.exists(dir)) {
    logger.error(`${dir} doesn't exist anymore!`);
    return;
  }

  const type = fs.stats(dir);

  if (type === "FILE") {
    // TODO: Parse the file directly here.
    // Since it's only a file, we don't need to care about its priority.
    // const content = fs.readFileSync(dir, { encoding: "utf8" });
    // console.log(content);
  } else if (type === "DIRECTORY") {
    logger.log(`Loading scripts in directory ${dir}:`);

    const files: string[] = fs.look(dir);

    // Add all files to array
    for (const file of files) {
      logger.log(`Found zs file: ${file}`);
      ZenLexer.parse(file);
    }
  } else {
    // A type not in ['FILE', 'INVENTORY'].
    logger.error(`Failed to Load ${type.toString()}: ${dir}!`);
  }
}
