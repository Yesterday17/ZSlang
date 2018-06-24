import { ZenPosition } from "../utils/ZenPosition";

export class Token {
  public position: ZenPosition;
  public value: string;
  public type: number;

  constructor(position: ZenPosition, value: string, type: number) {
    this.position = position;
    this.value = value;
    this.type = type;
  }

  public toString(): string {
    return `${this.position.line}:${this.position.offset} (${this.type}) ${
      this.value
    }`;
  }
}
