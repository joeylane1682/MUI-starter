# Project Instructions for Cursor AI

## Project Goal
Build a React + MUI project that includes a simple layout intelligence layer.

The goal is to create a pseudo layout engine that:
- uses MUI as the UI component library
- uses Yoga for layout calculation
- uses a typed layout tree as the source of truth
- keeps implementation simple, modular, and easy to extend

## Current Project Setup
This project already includes:
- Vite
- React
- MUI v7.3.9
- yoga-layout v3.2.1

Do not reinstall these packages.

## What We Are Building First
Start with the **Layout Tree** layer.

This layer should:
- define layout as a tree of nodes
- work well with React + MUI
- be written in TypeScript
- be serializable to JSON
- support future AI-driven layout generation

## Required Output Format
Use a **typed TypeScript object schema** for the layout tree.

Each node should support:
- `id`
- `type`
- `children`
- `layout`
- `props`
- `responsive`

Keep the schema simple and extendable.

## Allowed Initial Node Types
Only use these initial node types:
- `page`
- `section`
- `container`
- `stack`
- `grid`
- `component`

Do not add extra node types unless needed.

## MUI Mapping Rules
Use MUI primitives as render targets:
- `container` -> MUI `Container` or `Box`
- `stack` -> MUI `Stack`
- `grid` -> MUI `Grid`
- generic wrapper -> MUI `Box`

Keep phase 1 limited to:
- Box
- Stack
- Grid
- Container

Do not connect all MUI components yet.

## Yoga Usage Rules
Use Yoga only as the layout computation layer.

Yoga should:
- receive layout node data
- compute layout values
- support the layout tree structure

React + MUI should render the UI from the same tree.

Do not overcomplicate the Yoga integration.
Keep it minimal and functional.

## Folder Structure To Create
Create this minimum structure:

```text
src/
  layout/
    layoutTree.ts
    layoutTypes.ts
    yogaAdapter.ts
```

## File Responsibilities

### `layoutTypes.ts`
Define the TypeScript types for the layout tree.

### `layoutTree.ts`
Create the initial layout tree schema and export a sample tree.

### `yogaAdapter.ts`
Create a simple adapter that converts layout tree nodes into Yoga nodes.

## Implementation Rules
- Keep everything very lean
- Use clear TypeScript types
- Prefer simple functions over heavy abstractions
- Do not introduce unnecessary state management
- Do not introduce a database
- Do not introduce drag-and-drop
- Do not introduce visual editors
- Do not add layout heuristics yet
- Do not add constraint solving yet

## What Success Looks Like
Phase 1 is complete when:
- a typed layout tree exists
- Yoga can read that tree
- the structure is ready for later rendering with MUI
- the code is clean and easy to expand

## Important Constraints
- Keep the system modular
- Keep the first version small
- Optimize for AI readability and maintainability
- Avoid premature complexity
- Do not refactor unrelated project files

## Working Style
When making changes:
1. create only the minimum required files
2. keep code simple
3. explain changes clearly
4. avoid unnecessary architecture decisions
5. build this layer first before moving to renderer or rules engine

