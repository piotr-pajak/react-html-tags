# @olympo/react-html-tags

Type-safe React components for all HTML tags with full native attribute support.

## Overview

`@olympo/react-html-tags` provides React components that wrap standard HTML elements with complete TypeScript support. Each component accepts all native HTML attributes for its corresponding tag and supports ref forwarding to the underlying DOM element.

## Features

- **Full TypeScript Support**: All components are fully typed using `JSX.IntrinsicElements`
- **Ref Forwarding**: Access underlying DOM elements via refs
- **Native Attributes**: All standard HTML attributes are supported
- **Zero Dependencies**: Only requires React 19+ as a peer dependency
- **Tree-shakeable**: Import only what you need
- **Lightweight**: Minimal wrapper around native HTML elements

## Installation

```bash
npm install @olympo/react-html-tags
# or
yarn add @olympo/react-html-tags
# or
pnpm add @olympo/react-html-tags
# or
bun add @olympo/react-html-tags
```

## Usage

```tsx
import { Div, Button, Input, Span } from '@olympo/react-html-tags';

function MyComponent() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');

  return (
    <Div className="container">
      <Span style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Welcome!
      </Span>

      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
        className="input-field"
      />

      <Button
        type="button"
        onClick={() => inputRef.current?.focus()}
        disabled={!value}
      >
        Submit
      </Button>
    </Div>
  );
}
```

## Available Components

Currently available components:

- `<A>` - Wraps `<a>` (anchor/link)
- `<Button>` - Wraps `<button>`
- `<Div>` - Wraps `<div>`
- `<Form>` - Wraps `<form>`
- `<H1>` - Wraps `<h1>` (heading)
- `<Input>` - Wraps `<input>`
- `<Label>` - Wraps `<label>`
- `<P>` - Wraps `<p>` (paragraph)
- `<Span>` - Wraps `<span>`
- `<Textarea>` - Wraps `<textarea>`

More components will be added in future releases following the same pattern.

## TypeScript Benefits

All components provide full IntelliSense and type checking:

```tsx
import { Input, Div } from '@olympo/react-html-tags';

// ✅ All native attributes are supported and type-checked
<Input type="email" required maxLength={100} />

// ✅ Ref forwarding is properly typed
const divRef = React.useRef<HTMLDivElement>(null);
<Div ref={divRef} />

// ❌ TypeScript error: invalid attribute
<Input invalidProp="value" />
```

## Examples

For more examples, see the [docs/example.tsx](./docs/example.tsx) file which includes:

- Login form with input validation
- Interactive card component
- Counter button with ref manipulation

## Development

This library uses Bun for development:

```bash
# Install dependencies
bun install

# Run type checking
bun run typecheck

# Build the library
bun run build
```

## Contributing

Contributions are welcome! We'd love your help making this library better.

Please read our [Contributing Guide](./CONTRIBUTING.md) to learn about:

- How to set up your development environment
- Our code standards and component patterns
- The pull request process
- GitHub labels and issue tracking
- Component priority list

Quick guidelines:

1. All components follow the established pattern
2. TypeScript types are properly defined
3. JSDoc comments are included
4. Components remain lightweight wrappers

For detailed instructions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT

## Roadmap

Future versions will include components for all standard HTML5 elements:

- Semantic elements: `<Section>`, `<Article>`, `<Header>`, `<Footer>`, `<Nav>`, `<Main>`, etc.
- Form elements: `<Form>`, `<Label>`, `<Select>`, `<Textarea>`, etc.
- Text elements: `<P>`, `<H1>`-`<H6>`, `<A>`, etc.
- Media elements: `<Img>`, `<Video>`, `<Audio>`, etc.
- Table elements: `<Table>`, `<Tr>`, `<Td>`, `<Th>`, etc.
- List elements: `<Ul>`, `<Ol>`, `<Li>`, etc.
- And more...
