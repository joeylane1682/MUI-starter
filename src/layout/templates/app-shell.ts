// AppShell blueprint: global header, page title bar, main content (full viewport width)

import type { LayoutNode } from "../layoutTypes";

export const appShellLayout: LayoutNode = {
  id: "root",
  type: "page",
  layout: {
    flexDirection: "column",
    padding: 0,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  children: [
    {
      id: "global-header",
      type: "section",
      layout: {
        flexDirection: "row",
        height: 64,
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: "stretch",
        justifyContent: "flex-start",
      },
      children: [],
    },
    {
      id: "application-title-bar",
      type: "section",
      layout: {
        flexDirection: "row",
        height: 48,
        paddingLeft: 24,
        paddingRight: 24,
        alignItems: "center",
      },
      children: [],
    },
    {
      id: "main-content",
      type: "section",
      layout: {
        flexDirection: "column",
        flexGrow: 1,
        padding: 24,
      },
      children: [],
    },
  ],
};

