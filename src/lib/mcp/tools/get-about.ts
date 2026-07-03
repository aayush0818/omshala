import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_about_shrutika",
  title: "About Shrutika",
  description: "Returns a short biography of Shrutika, the founder and guide behind Om Shala.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const bio = {
      name: "Shrutika",
      role: "Meditation Teacher & Indian Classical Singer",
      practice: "Nada Yoga — the yoga of sound and music",
      instruments: ["Crystal Singing Bowls", "Voice"],
      supports: ["Breathwork", "Guided Relaxation"],
      philosophy:
        "Pure sound pulls you inward and brings deep relaxation. In this state, the body is guided back to its natural rhythm and the mind returns to centre.",
      approach: "Intuitive, somatic — profound relaxation as the gateway to the inner life.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(bio, null, 2) }],
      structuredContent: bio,
    };
  },
});