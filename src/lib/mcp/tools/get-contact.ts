import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Returns Om Shala's public contact details: email, WhatsApp, and location.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      brand: "Om Shala",
      email: "omshala.official@gmail.com",
      whatsapp: "+91 74003 61681",
      location: "Bandra West, Mumbai",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});