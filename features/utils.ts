import * as fs from 'fs';
import * as path from 'path';

interface DirectoryMap {
  [key: string]: string[];
}

function buildDirectoryMap(rootPath: string): DirectoryMap {
  const directoryMap: DirectoryMap = {};

  function traverse(currentPath: string) {
    const items = fs.readdirSync(currentPath);

    directoryMap[currentPath] = [];

    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        directoryMap[currentPath].push(item);
        traverse(itemPath); // Recursive call for subdirectories
      }
    }
  }

  traverse(rootPath);
  return directoryMap;
}

export {
  buildDirectoryMap,
}