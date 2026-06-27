import fs from "fs";
import path from "path";

interface KnowledgeSection {
  heading: string;
  content: string;
  keywords: string[];
}

// In-memory cache — parsed once on first request, never re-read from disk
let cachedSections: KnowledgeSection[] | null = null;

function parseKnowledge(): KnowledgeSection[] {
  if (cachedSections) return cachedSections;

  const filePath = path.join(process.cwd(), "src/data/knowledge.md");
  const raw = fs.readFileSync(filePath, "utf-8");

  const sections: KnowledgeSection[] = [];
  // Split by ## or ### headings
  const chunks = raw.split(/\n(?=#{1,3} )/);

  for (const chunk of chunks) {
    const lines = chunk.trim().split("\n");
    const headingLine = lines[0] ?? "";
    const heading = headingLine.replace(/^#+\s*/, "").trim();
    const content = lines.slice(1).join("\n").trim();

    if (!heading || !content) continue;

    // Extract lowercase keywords from heading + content for matching
    const raw_text = `${heading} ${content}`.toLowerCase();
    const keywords = raw_text
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 3);

    sections.push({ heading, content, keywords });
  }

  cachedSections = sections;
  return sections;
}

/**
 * Retrieves the top N most relevant sections for a given query using
 * lightweight keyword overlap scoring — no embeddings, no external APIs.
 */
export function retrieveRelevantSections(query: string, topN = 4): string {
  const sections = parseKnowledge();

  const queryWords = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);

  const scored = sections.map((section) => {
    let score = 0;
    for (const word of queryWords) {
      const matches = section.keywords.filter((k) => k.includes(word)).length;
      score += matches;
    }
    return { section, score };
  });

  const top = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map((s) => s.section);

  // If nothing matched, return first 3 sections as fallback context
  const selected = top.length > 0 ? top : sections.slice(0, 3);

  return selected
    .map((s) => `## ${s.heading}\n\n${s.content}`)
    .join("\n\n---\n\n");
}
