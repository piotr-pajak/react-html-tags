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

**All 110+ HTML5 elements are now supported!** 🎉

### Document Structure & Semantic Elements
`<Article>`, `<Aside>`, `<Div>`, `<Footer>`, `<Header>`, `<Hgroup>`, `<Main>`, `<Nav>`, `<Search>`, `<Section>`

### Headings
`<H1>`, `<H2>`, `<H3>`, `<H4>`, `<H5>`, `<H6>`

### Text Content & Formatting
`<Abbr>`, `<Address>`, `<B>`, `<Bdi>`, `<Bdo>`, `<Blockquote>`, `<Cite>`, `<Code>`, `<Data>`, `<Del>`, `<Dfn>`, `<Em>`, `<I>`, `<Ins>`, `<Kbd>`, `<Mark>`, `<P>`, `<Pre>`, `<Q>`, `<S>`, `<Samp>`, `<Small>`, `<Span>`, `<Strong>`, `<Sub>`, `<Sup>`, `<Time>`, `<U>`, `<Var>`

### Lists
`<Dd>`, `<Dl>`, `<Dt>`, `<Li>`, `<Menu>`, `<Ol>`, `<Ul>`

### Links & Navigation
`<A>`, `<Area>`, `<Link>`, `<Map>`

### Forms & Input
`<Button>`, `<Datalist>`, `<Fieldset>`, `<Form>`, `<Input>`, `<Label>`, `<Legend>`, `<Meter>`, `<Optgroup>`, `<Option>`, `<Output>`, `<Progress>`, `<Select>`, `<Textarea>`

### Tables
`<Caption>`, `<Col>`, `<Colgroup>`, `<Table>`, `<Tbody>`, `<Td>`, `<Tfoot>`, `<Th>`, `<Thead>`, `<Tr>`

### Media & Graphics
`<Audio>`, `<Canvas>`, `<Img>`, `<Picture>`, `<Source>`, `<Svg>`, `<Track>`, `<Video>`

### Embedded Content
`<Embed>`, `<Iframe>`, `<Object>`, `<Param>`, `<Portal>`

### Interactive Elements
`<Details>`, `<Dialog>`, `<Summary>`

### Ruby Annotations
`<Rp>`, `<Rt>`, `<Ruby>`

### Figures
`<Figcaption>`, `<Figure>`

### Breaks & Separators
`<Br>`, `<Hr>`, `<Wbr>`

### Web Components & Special
`<Noscript>`, `<Slot>`, `<Template>`

All components support:
- ✅ Full TypeScript typing via `JSX.IntrinsicElements`
- ✅ Ref forwarding to underlying DOM elements
- ✅ All native HTML attributes
- ✅ Event handlers with proper typing
- ✅ Comprehensive JSDoc documentation

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

✅ **v0.1.0** - All standard HTML5 elements implemented (110+ components)

Future versions:
- 📦 Publish to npm registry
- 📚 Enhanced documentation site
- 🧪 Comprehensive test suite
- 🎨 Optional styled-components integration
- 🔧 Additional utility types and helpers
