import { defineStackbitConfig } from "@stackbit/types";
import GitContentSource from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"]
    })
  ],
  modelExtensions: [
    { name: "Page", type: "page", urlPath: "/{slug}" },
    { name: "Post", type: "page", urlPath: "/blog/{slug}" }
    // Tambahkan model lain jika perlu, misal:
    // { name: "Team", type: "page", urlPath: "/team/{slug}" }
  ]
});
