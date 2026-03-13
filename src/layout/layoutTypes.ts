/**
 * Typed layout tree schema.
 * JSON-serializable, single source of truth for layout.
 * MUI mapping (later): container -> Container/Box, stack -> Stack, grid -> Grid, generic -> Box.
 */

export type LayoutNodeType =
  | "page"
  | "section"
  | "container"
  | "stack"
  | "grid"
  | "component";

/** Yoga-friendly layout properties (pixels). */
export interface LayoutSpec {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  gap?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

/** Optional breakpoint-keyed overrides for future responsive behavior. */
export interface ResponsiveOverrides {
  [breakpoint: string]: Partial<LayoutSpec>;
}

export interface LayoutNode {
  id: string;
  type: LayoutNodeType;
  children?: LayoutNode[];
  layout?: LayoutSpec;
  props?: Record<string, unknown>;
  responsive?: ResponsiveOverrides;
}

/** Computed layout from Yoga (x = left, y = top). */
export interface ComputedLayout {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type ComputedLayoutMap = Record<string, ComputedLayout>;
