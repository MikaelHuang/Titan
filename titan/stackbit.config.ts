import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models: [
        {
          name: "Blog",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "src/content/blog/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "excerpt", type: "string", required: true },
            { name: "publishDate", type: "date", required: true },
            { name: "publish", type: "boolean", required: false, default: true },
            { name: "categories", type: "list", items: { type: "string" }, required: true }
          ]
        },
        {
          name: "Team",
          type: "page",
          urlPath: "/team/{slug}",
          filePath: "src/content/team/{slug}.md",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "jobTitle", type: "string", required: true },
            { name: "email", type: "string", required: false },
            { name: "order", type: "number", required: false, default: 999 },
            { name: "publish", type: "boolean", required: false, default: true }
          ]
        },
        {
          name: "Legal",
          type: "page",
          urlPath: "/legal/{slug}",
          filePath: "src/content/legal/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "lastUpdated", type: "date", required: true }
          ]
        }
      ]
    })
  ]
});
