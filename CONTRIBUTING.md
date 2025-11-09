# Contributing to @olympo/react-html-tags

Thank you for your interest in contributing to `@olympo/react-html-tags`! We welcome contributions from the community.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding New Components](#adding-new-components)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [GitHub Labels](#github-labels)
- [Code of Conduct](#code-of-conduct)

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/react-html-tags.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Submit a pull request

## Development Setup

This project uses [Bun](https://bun.sh) for development. Make sure you have Bun installed.

```bash
# Install dependencies
bun install

# Run type checking
bun run typecheck

# Build the library
bun run build
```

## Project Structure

```
react-html-tags/
├── src/
│   ├── components/     # All HTML tag components
│   │   ├── Button.tsx
│   │   ├── Div.tsx
│   │   └── ...
│   ├── globals.d.ts   # Global type declarations
│   └── index.ts       # Main export file
├── docs/
│   └── example.tsx    # Usage examples
├── dist/              # Build output (generated)
└── README.md
```

## Adding New Components

When adding a new HTML tag component, follow these steps:

### 1. Create the Component File

Create a new file in `src/components/` following the naming pattern: `TagName.tsx`

Example for `<section>`:

```tsx
/**
 * A type-safe React wrapper for the HTML `<section>` element.
 *
 * @remarks
 * This component accepts all native HTML section attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard section properties including className, style, etc.
 *
 * @example
 * ```tsx
 * <Section className="hero">
 *   <H1>Welcome</H1>
 * </Section>
 *
 * <Section ref={sectionRef} aria-label="Main content">
 *   Content here
 * </Section>
 * ```
 */
export const Section = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['section']
>((props, ref) => {
  return <section ref={ref} {...props} />;
});

Section.displayName = 'Section';
```

### 2. Component Requirements

Each component must:

- Use `React.forwardRef` for ref forwarding
- Use `JSX.IntrinsicElements['tagname']` for TypeScript typing
- Include comprehensive JSDoc comments
- Include at least 2 practical usage examples
- Set `displayName` property
- Be a pure wrapper with no additional logic

### 3. Update Exports

Add the component to `src/index.ts` in **alphabetical order**:

```tsx
export { Section } from './components/Section';
```

### 4. Update Documentation

Add the component to the "Available Components" section in `README.md`:

```markdown
- `<Section>` - Wraps `<section>` (semantic section)
```

## Code Standards

### TypeScript

- All code must be fully typed
- No `any` types unless absolutely necessary
- Use `JSX.IntrinsicElements` for HTML element props

### JSDoc

- Every component must have JSDoc comments
- Include `@remarks` section
- Include at least 2 `@example` blocks
- Examples should be realistic and concise

### Code Style

- Use 2 spaces for indentation
- No semicolons (unless required)
- Use single quotes for strings
- Keep components simple and pure

### Naming Conventions

- Component files: PascalCase (e.g., `Button.tsx`, `H1.tsx`)
- Component names: Match HTML tag names in PascalCase
- Exports: Named exports only

## Testing

Before submitting a PR, ensure:

```bash
# Type checking passes
bun run typecheck

# Build succeeds
bun run build

# No errors in the build output
ls -la dist/
```

## Pull Request Process

1. **Update your branch** with the latest changes from `main`
2. **Run type checking** and **build** to ensure no errors
3. **Update documentation** if you've added new components
4. **Write a clear PR description** explaining:
   - What you changed
   - Why you changed it
   - Any breaking changes
5. **Reference any related issues** using `#issue-number`
6. **Wait for review** - a maintainer will review your PR

### PR Title Format

Use conventional commit format:

- `feat: add Section component`
- `fix: correct Input ref forwarding`
- `docs: update README examples`
- `chore: update dependencies`

## GitHub Labels

We use the following labels to organize issues and pull requests:

### Type Labels

- 🏷️ **`component`** - New component request or component-related changes
- 🏷️ **`bug`** - Something isn't working correctly
- 🏷️ **`enhancement`** - Improvement to existing functionality
- 🏷️ **`documentation`** - Documentation improvements or additions
- 🏷️ **`typescript`** - TypeScript type definitions or type-related issues

### Status Labels

- 🏷️ **`good first issue`** - Good for newcomers to the project
- 🏷️ **`help wanted`** - Extra attention needed from the community
- 🏷️ **`priority: high`** - High priority issue or PR
- 🏷️ **`priority: low`** - Low priority issue or PR
- 🏷️ **`wip`** - Work in progress, not ready for review

### Resolution Labels

- 🏷️ **`duplicate`** - This issue or PR already exists
- 🏷️ **`wontfix`** - This will not be worked on
- 🏷️ **`invalid`** - This doesn't seem right or is not relevant
- 🏷️ **`question`** - Further information is requested

### Area Labels

- 🏷️ **`build`** - Build system or compilation issues
- 🏷️ **`dependencies`** - Dependency updates or issues
- 🏷️ **`examples`** - Related to example code or documentation examples

## Component Status

✅ **All 110+ standard HTML5 elements are now implemented!**

### Implemented Components

All modern HTML5 elements are fully supported, including:

- **Document Structure**: Article, Aside, Div, Footer, Header, Main, Nav, Section, etc.
- **Headings**: H1-H6
- **Text Formatting**: Abbr, B, Code, Em, I, Mark, Small, Strong, etc.
- **Lists**: Ul, Ol, Li, Dl, Dt, Dd, Menu
- **Forms**: Button, Input, Select, Textarea, Form, Label, Fieldset, etc.
- **Tables**: Table, Thead, Tbody, Tr, Td, Th, Caption, etc.
- **Media**: Audio, Video, Img, Picture, Canvas, Svg
- **Interactive**: Details, Summary, Dialog
- **And many more!**

### Future Enhancements

While all HTML elements are implemented, we welcome contributions for:

- 🧪 Test coverage improvements
- 📚 Documentation enhancements
- 🎨 Usage examples
- 🐛 Bug fixes and type improvements
- 🔧 Build system optimizations

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers warmly
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

## Questions?

If you have questions about contributing, please:

1. Check existing [GitHub Issues](https://github.com/piotr-pajak/react-html-tags/issues)
2. Open a new issue with the `question` label
3. Reach out to the maintainers

---

Thank you for contributing to @olympo/react-html-tags! 🎉
