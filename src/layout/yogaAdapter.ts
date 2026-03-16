//YOGA TRANSLATION AND ENGINE
import Yoga, {
  FlexDirection,
  Edge,
  Align,
  Justify,
  Gutter,
  Wrap,
} from "yoga-layout";
import type {
  LayoutNode,
  LayoutSpec,
  ComputedLayoutMap,
} from "./layoutTypes";
import type { Node as YogaNode } from "yoga-layout";

//Convert layout spec into yoga properties
function applyLayoutSpec(yogaNode: YogaNode, spec: LayoutSpec | undefined): void {
  if (!spec) return;

  if (spec.flexDirection) {
    const map: Record<string, number> = {
      row: FlexDirection.Row,
      "row-reverse": FlexDirection.RowReverse,
      column: FlexDirection.Column,
      "column-reverse": FlexDirection.ColumnReverse,
    };
    yogaNode.setFlexDirection(map[spec.flexDirection] ?? FlexDirection.Column);
  }
  if (spec.padding != null) {
    yogaNode.setPadding(Edge.All, spec.padding);
  } else {
    if (spec.paddingTop != null) yogaNode.setPadding(Edge.Top, spec.paddingTop);
    if (spec.paddingRight != null) yogaNode.setPadding(Edge.Right, spec.paddingRight);
    if (spec.paddingBottom != null) yogaNode.setPadding(Edge.Bottom, spec.paddingBottom);
    if (spec.paddingLeft != null) yogaNode.setPadding(Edge.Left, spec.paddingLeft);
  }
  if (spec.gap != null) {
    yogaNode.setGap(Gutter.All, spec.gap);
  }
  if (spec.alignItems) {
    const map: Record<string, number> = {
      "flex-start": Align.FlexStart,
      center: Align.Center,
      "flex-end": Align.FlexEnd,
      stretch: Align.Stretch,
      baseline: Align.Baseline,
    };
    yogaNode.setAlignItems(map[spec.alignItems] ?? Align.Stretch);
  }
  if (spec.justifyContent) {
    const map: Record<string, number> = {
      "flex-start": Justify.FlexStart,
      center: Justify.Center,
      "flex-end": Justify.FlexEnd,
      "space-between": Justify.SpaceBetween,
      "space-around": Justify.SpaceAround,
      "space-evenly": Justify.SpaceEvenly,
    };
    yogaNode.setJustifyContent(map[spec.justifyContent] ?? Justify.FlexStart);
  }
  if (spec.flexGrow != null) {
    yogaNode.setFlexGrow(spec.flexGrow);
  }
  if (spec.width != null) {
    yogaNode.setWidth(spec.width);
  }
  if (spec.height != null) {
    yogaNode.setHeight(spec.height);
  }
  if (spec.minWidth != null) {
    yogaNode.setMinWidth(spec.minWidth);
  }
  if (spec.minHeight != null) {
    yogaNode.setMinHeight(spec.minHeight);
  }
  if (spec.flexWrap) {
    const map: Record<string, number> = {
      nowrap: Wrap.NoWrap,
      wrap: Wrap.Wrap,
      "wrap-reverse": Wrap.WrapReverse,
    };
    yogaNode.setFlexWrap(map[spec.flexWrap] ?? Wrap.NoWrap);
  }
}

//Converts tree node into Yoga node
export function layoutNodeToYogaNode(node: LayoutNode): YogaNode {
  const yogaNode = Yoga.Node.createDefault();
  applyLayoutSpec(yogaNode, node.layout);

  const children = node.children ?? [];
  for (let i = 0; i < children.length; i++) {
    const childYoga = layoutNodeToYogaNode(children[i]);
    yogaNode.insertChild(childYoga, i);
  }

  return yogaNode;
}

//Run yoga layout engine
export function computeLayout(
  rootYogaNode: YogaNode,
  width: number | "auto" = "auto",
  height: number | "auto" = "auto"
): void {
  rootYogaNode.calculateLayout(width, height);
}

//Extract yoga results
export function getComputedLayoutMap(
  layoutNode: LayoutNode,
  yogaNode: YogaNode
): ComputedLayoutMap {
  const layout = yogaNode.getComputedLayout();
  const map: ComputedLayoutMap = {
    [layoutNode.id]: {
      left: layout.left,
      top: layout.top,
      width: layout.width,
      height: layout.height,
    },
  };
  const children = layoutNode.children ?? [];
  for (let i = 0; i < children.length; i++) {
    const childLayout = children[i];
    const childYoga = yogaNode.getChild(i);
    Object.assign(map, getComputedLayoutMap(childLayout, childYoga));
  }
  return map;
}
