import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({

  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID || "",
  branch: process.env.VERCEL_GIT_COMMIT_REF || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        fields: [
          {
            label: "Header",
            name: "header",
            type: "object",
            required: true,
            fields: [
              {
                label: 'Author',
                name: 'author',
                type: 'string',
              },
              {
                label: 'Role',
                name: 'role',
                type: 'string',
              },
              {
                label: 'Quote',
                name: 'quote',
                type: 'string',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
