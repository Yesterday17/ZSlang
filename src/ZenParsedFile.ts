export class ZenParsedFile {
  public filename: string;
  public classname: string;
  public imports: string[];
  public functions: [[string, string]];

  constructor(
    filename: string,
    classname: string,
    imports: string[],
    functions: [[string, string]]
  ) {
    this.filename = filename;
    this.classname = classname;
    this.imports = imports;
    this.functions = functions;
  }
}
