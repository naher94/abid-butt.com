import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.HEAD ||
    "gh-pages",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "",
  },

  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "",
    },
  },

  schema: {
    collections: [
      {
        name: "speaking",
        label: "Speaking Engagements",
        path: "_speaking",
        format: "md",
        fields: [
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
            options: [
              { value: "industry", label: "Industry" },
              { value: "academic", label: "Academic" },
            ],
          },
          {
            type: "string",
            name: "event_type",
            label: "Event Type",
            description: "e.g. Panelist, Speaker, Guest Lecturer, Adjunct Faculty",
            nameOverride: "event-type",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "event_name",
            label: "Event Name",
            required: true,
            nameOverride: "event-name",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "image_alt",
            label: "Image Alt Text",
            nameOverride: "image-alt",
          },
          {
            type: "string",
            name: "link",
            label: "Link",
          },
        ],
      },
      {
        name: "hospitality_talks",
        label: "Hospitality Talks",
        path: "_hospitality-talks",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Session Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "video",
            label: "YouTube URL",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
        ],
      },
      {
        name: "education",
        label: "Education",
        path: "_education",
        format: "md",
        fields: [
          {
            type: "string",
            name: "institution",
            label: "Institution",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "title",
            label: "Degree",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "City, State",
          },
        ],
      },
      {
        name: "roles",
        label: "Roles",
        path: "_roles",
        format: "md",
        fields: [
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true,
          },
          {
            type: "string",
            name: "role_title",
            label: "Role Title",
            required: true,
            nameOverride: "role-title",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "logo_alt",
            label: "Logo Alt Text",
            nameOverride: "logo-alt",
          },
          {
            type: "image",
            name: "brand_image",
            label: "Brand Image",
            nameOverride: "brand-image",
          },
          {
            type: "string",
            name: "brand_image_alt",
            label: "Brand Image Alt Text",
            nameOverride: "brand-image-alt",
          },
          {
            type: "number",
            name: "display_order",
            label: "Display Order",
            description: "Lower numbers appear first",
            nameOverride: "display-order",
          },
          {
            type: "string",
            name: "link",
            label: "Link",
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
        ],
      },
    ],
  },
});
