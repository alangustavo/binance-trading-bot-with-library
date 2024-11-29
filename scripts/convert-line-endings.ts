// ./scripts/convert-line-endings.ts

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function convertLineEndings(directory: string) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and .git
      if (entry.name !== "node_modules" && entry.name !== ".git") {
        await convertLineEndings(fullPath);
      }
      continue;
    }

    // Skip binary files
    const isBinary = [
      ".png",
      ".jpg",
      ".gif",
      ".ico",
      ".mov",
      ".mp4",
      ".mp3",
      ".zip",
      ".tar",
      ".gz",
      ".7z",
    ].some((ext) => entry.name.endsWith(ext));

    if (isBinary) continue;

    try {
      const content = await readFile(fullPath, "utf8");
      // Replace CRLF with LF
      const converted = content.replace(/\r\n/g, "\n");
      await writeFile(fullPath, converted, "utf8");
      console.log(`Converted: ${fullPath}`);
    } catch (error) {
      console.error(`Error converting ${fullPath}:`, error);
    }
  }
}

// Start conversion from current directory
convertLineEndings(process.cwd())
  .then(() => console.log("Conversion complete!"))
  .catch(console.error);
