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
        ui: {
          router: (props) => {

            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero key={i} {...block}/>
              }
              case "PageBlocksIntro": {
                return <Intro key={i} {...block}/>
              }
              case "PageBlocksAbout": {
                return <About key={i} {...block}/>
              }
            }


            switch (props.document._sys.relativePath) {
              case "home.md":{
                return "/";
              }
            }
            return props.document._sys.filename;
          },
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "intro",
                label: "Intro",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "about",
                label: "About",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                ],
              },
            ],
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
