# Project Rules

## 1. Project Vision

This repository is a production-grade learning platform built with Next.js App Router, TypeScript, and Tailwind CSS. It should provide clear, accessible, fast learning experiences while remaining easy to extend with new courses, lessons, notes, and resources.

Prioritize correctness, maintainability, accessibility, and predictable user experience over short-term implementation speed. Changes should preserve a clean separation between routing, features, shared UI, and content.

## 2. Folder Structure

- `src/app/` contains App Router routes, layouts, route-level metadata, and global styles. Keep route files focused on composition and data loading.
- `src/features/<feature>/` contains feature-specific components, types, utilities, and business logic. A feature must not import another feature's internals; promote genuinely shared code instead.
- `src/components/shared/` contains site-wide building blocks such as layout primitives and branding.
- `src/components/ui/` contains small, reusable, presentational primitives with no feature-specific knowledge.
- `src/content/` contains static, typed learning-platform content. Content modules must not render UI.
- `src/config/` contains centralized site configuration, navigation, social links, and shared metadata values.
- `src/lib/` contains framework-agnostic helpers.
- `src/providers/` contains React providers and their client boundaries.
- `public/` contains static assets referenced by absolute paths.

Do not create a new top-level source directory without a clear architectural reason. Colocate code with its feature until it is reused across features.

## 3. Naming Conventions

- Use `PascalCase` for React component files and exported component names: `CourseCard.tsx`, `CourseCard`.
- Use `camelCase` for functions, variables, data modules, and utility files: `getCourseBySlug.ts`.
- Use descriptive, singular names for types: `Course`, `Lesson`, `Note`.
- Use lowercase kebab-case for URL slugs and route segments.
- Use `index.ts` only as a narrow public export surface for a component or feature directory; do not use it to hide unrelated modules.
- Name booleans as questions or capabilities: `isLoading`, `hasAccess`, `canEdit`.
- Avoid ambiguous names such as `data`, `item`, or `utils` when a domain-specific name is practical.

## 4. Component Rules

- Default to Server Components. Add `"use client"` only when browser APIs, state, effects, event handlers, or a client-only library are required.
- Keep route pages thin: validate params, load data, set metadata where appropriate, and compose feature components.
- Components must have one clear responsibility. Extract a subcomponent when it is independently reusable or materially improves readability.
- Use `next/link` for internal navigation and `next/image` for image assets when appropriate.
- Provide meaningful `alt` text, semantic HTML, visible keyboard focus, and accessible names for interactive controls.
- Do not hard-code content that belongs in `src/content/` or site values that belong in `src/config/`.
- Do not duplicate a shared card, button, badge, or layout pattern. Extend an existing primitive or extract a reusable one when a pattern appears more than once.
- Keep client components small and pass serializable props from server components.

## 5. TypeScript Rules

- TypeScript strict mode is required. Do not use `any`, `@ts-ignore`, or unsafe type assertions to bypass errors.
- Define reusable domain types in the owning feature and import them from that canonical location.
- Type component props explicitly with a `Props` type or interface when they are non-trivial.
- Use `type` imports for type-only dependencies where supported.
- Validate dynamic route parameters and external data before using them. Render `notFound()` for missing static content.
- Prefer discriminated unions and explicit optional fields over loosely shaped objects.
- Keep content data type-checked with `satisfies` or explicit domain types.
- All new code must pass `npm run lint`, `npx tsc --noEmit`, and `npm run build` before it is considered complete.

## 6. Tailwind Rules

- Use Tailwind utilities as the primary styling mechanism.
- Reuse design tokens defined in `globals.css` such as `bg-background`, `bg-card`, `text-muted-foreground`, and `border-border` instead of repeating raw color values.
- Keep utility lists readable: group layout, spacing, typography, color, and state utilities consistently.
- Use responsive variants intentionally, starting with the mobile layout.
- Avoid arbitrary values unless a design token or standard utility cannot express the requirement.
- Extract repeated visual patterns into shared components rather than copying long utility strings.
- Preserve light and dark theme compatibility; do not introduce colors that only work in one theme without an intentional variant.

## 7. Git Workflow

- Create focused branches using the `codex/` prefix unless the team specifies another convention.
- Keep commits small and cohesive. Use imperative commit messages, for example: `feat: add course lesson navigation`.
- Do not commit generated output, local editor files, secrets, or build artifacts.
- Rebase or merge the current target branch as required by the team before opening a pull request.
- Pull requests must explain the user-facing change, note relevant validation, and identify follow-up work or known limitations.
- Never overwrite or discard unrelated working-tree changes.

## 8. Coding Standards

- Prefer simple, explicit code over clever abstractions.
- Use early returns for invalid states and keep nesting shallow.
- Keep imports ordered: framework/external packages, internal aliases, then relative imports.
- Remove dead code, stale comments, and commented-out implementations in the same change that makes them obsolete.
- Use comments to explain non-obvious decisions, not to narrate self-evident code.
- Avoid side effects during module initialization.
- Handle loading, empty, error, and not-found states for user-facing data flows.
- Do not introduce dependencies unless their benefit is clear and the capability cannot reasonably be implemented with existing project tooling.

## 9. Reusability Rules

- Treat course, lesson, note, and resource schemas as canonical domain contracts. Do not create parallel, incompatible models for the same entity.
- Centralize site identity, social links, and navigation in `src/config/` and consume those values everywhere.
- Create shared UI only after a component is used by more than one feature or is clearly a design-system primitive.
- Keep feature-specific UI inside its feature; do not make shared components depend on feature content or routing.
- Prefer composition and typed props over copy-pasting JSX and Tailwind class lists.
- When adding a new course or lesson, update the canonical content source, route generation, navigation, and validation together.

## 10. Definition of Done

A change is complete only when:

- The implementation satisfies the requested behavior and follows these rules.
- Types, imports, routes, links, and content references are valid.
- Responsive layout, keyboard navigation, and dark-mode appearance have been considered.
- New or changed UI has appropriate loading, empty, error, or not-found behavior where applicable.
- Reused patterns are implemented through the correct shared or feature-level abstraction.
- No unused files, exports, dependencies, or commented-out code were introduced.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass, or any pre-existing failure is explicitly documented.
- The change is documented in the pull request with validation results.
