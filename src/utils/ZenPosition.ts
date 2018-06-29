import { ZenParsedFile } from "../ZenParsedFile";

export class ZenPosition {
  public file: ZenParsedFile;
  public line: number;
  public offset: number;
  public fileNameFallback: string;

  constructor(
    file: ZenParsedFile,
    line: number,
    offset: number,
    fileNameFallback: string
  ) {
    this.file = file;
    this.line = line;
    this.offset = offset;
    this.fileNameFallback = fileNameFallback;
  }

  public toString(): string {
    return `${this.file.filename}:${this.line}`;
  }
}
