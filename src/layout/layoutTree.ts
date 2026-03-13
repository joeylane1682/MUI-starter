import type { LayoutNode } from "./layoutTypes";

/**
 * Sample layout tree exercising all node types.
 * Ready for Yoga adapter and later MUI rendering.
 */
export const sampleLayoutTree: LayoutNode = {
  id: "root",
  type: "page",
  layout: {
    flexDirection: "column",
    padding: 24,
    gap: 16,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  children: [
    {
      id: "hero",
      type: "section",
      layout: {
        flexDirection: "column",
        padding: 16,
        gap: 8,
      },
      children: [
        {
          id: "hero-container",
          type: "container",
          layout: { padding: 12 },
          children: [
            {
              id: "hero-stack",
              type: "stack",
              layout: {
                flexDirection: "column",
                gap: 8,
                alignItems: "center",
              },
              children: [
                {
                  id: "hero-title",
                  type: "component",
                  layout: {},
                  props: { variant: "h1" },
                  children: [],
                },
                {
                  id: "hero-actions",
                  type: "stack",
                  layout: {
                    flexDirection: "row",
                    gap: 8,
                    justifyContent: "center",
                  },
                  children: [
                    { id: "btn-primary", type: "component", props: { label: "Primary" }, children: [] },
                    { id: "btn-secondary", type: "component", props: { label: "Secondary" }, children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "content-grid",
      type: "section",
      layout: { flexDirection: "column", gap: 16 },
      children: [
        {
          id: "cards-grid",
          type: "grid",
          layout: {
            flexDirection: "row",
            gap: 16,
            justifyContent: "space-between",
          },
          children: [
            { id: "card-1", type: "component", props: { name: "Card1" }, children: [] },
            { id: "card-2", type: "component", props: { name: "Card2" }, children: [] },
            { id: "card-3", type: "component", props: { name: "Card3" }, children: [] },
          ],
        },
      ],
    },
  ],
};
