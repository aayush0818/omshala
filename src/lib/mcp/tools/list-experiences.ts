import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const experiences = {
  corporate: {
    audience: "Corporate organisations",
    offerings: [
      "Employee wellbeing sessions",
      "Leadership retreats",
      "Wellness initiatives",
      "Online and in-person sound baths",
    ],
    format:
      "Guided sound healing with Crystal Singing Bowls and voice, supported by breathwork and guided relaxation.",
  },
  private: {
    audience: "Individuals and small groups",
    occasions: [
      "Weddings",
      "Birthdays",
      "Anniversaries",
      "Intimate gatherings",
      "Personal retreats",
    ],
    format: "Bespoke sound healing experiences designed around the occasion and space.",
  },
};

export default defineTool({
  name: "list_experiences",
  title: "List experiences",
  description:
    "Lists Om Shala's two experience tracks (corporate and private) with audience and offerings. Pass a track to get just that one.",
  inputSchema: {
    track: z
      .enum(["corporate", "private", "all"])
      .optional()
      .describe("Which track to return. Defaults to 'all'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ track }) => {
    const key = track ?? "all";
    const result = key === "all" ? experiences : { [key]: experiences[key] };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});