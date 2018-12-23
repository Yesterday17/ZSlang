import * as fs from "fs";
import * as path from "path";

function traversal(baseDir: string, addr: string[]): void {
  const dir = fs.readdirSync(baseDir);
  for (const content of dir) {
    const p = path.resolve(baseDir, content);
    const stat = fs.statSync(p);

    if (stat.isFile() && p.substr(p.length - 3) === ".zs") {
      addr.push(p);
    } else if (stat.isDirectory()) {
      traversal(p, addr);
    }
  }
}

const zfs = {
  normalize: (dir: string): string => {
    return path.normalize(dir);
  },
  stats: (p: string): string => {
    const type = fs.statSync(p);

    if (type.isFile()) {
      return "FILE";
    } else if (type.isDirectory()) {
      return "DIRECTORY";
    } else {
      return "UNKNOWN";
    }
  },
  exists: (dir: string): boolean => {
    return fs.existsSync(dir);
  },
  look: (dir: string): string[] => {
    const files: string[] = [];
    traversal(dir, files);
    return files;
  }
};

export { zfs };
