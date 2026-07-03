import { defineMcp } from "@lovable.dev/mcp-js";
import getContactTool from "./tools/get-contact";
import getAboutTool from "./tools/get-about";
import listExperiencesTool from "./tools/list-experiences";

export default defineMcp({
  name: "om-shala-mcp",
  title: "Om Shala MCP",
  version: "0.1.0",
  instructions:
    "Tools for Om Shala — a sound-healing practice by Shrutika. Use these tools to look up contact details, learn about the guide, and list corporate/private experience tracks.",
  tools: [getContactTool, getAboutTool, listExperiencesTool],
});