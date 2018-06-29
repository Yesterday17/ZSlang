/**
 * MIT License
 * Copyright (c) 2018 Yesterday17
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The project is even with bd8a3c31ac29e7a387e6bf01f0dbf36d58ed55d8
 */

import { zfs as fs } from "./utils/FileSystem";

(function main() {
  if (process.argv.length < 3) {
    // TODO: Add description here.
    return;
  }

  const dir = fs.normalize(process.argv[2]);

  if (!fs.exists(dir)) {
    // TODO: Add error message here.
    return;
  }

  const type = fs.stats(dir);

  if (type === "FILE") {
    // TODO: Parse the file here.
    // const content = fs.readFileSync(dir, { encoding: "utf8" });
    // console.log(content);
  } else if (type === "DIRECTORY") {
    // TODO: Check syntax error in a directory.
    // console.log(fs.readdirSync(dir, { encoding: "utf-8" }));
    const files: string[] = fs.look(dir);
    console.log(files);
    //
  } else {
    // TODO: Add error message here.
    // This shouldn't happen.
  }
})();
