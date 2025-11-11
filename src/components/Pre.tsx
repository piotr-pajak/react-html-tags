import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<pre>` element.
 *
 * @remarks
 * Preformatted text - preserves whitespace and line breaks.
 *
 * - Whitespace and line breaks are preserved
 * - Often combined with Code for code blocks
 * - Useful for ASCII art, code, terminal output
 *
 * **Pro Tips:**
 * - Combine with Code for syntax highlighting
 * - Line breaks are preserved
 *
 * @example
 * ```tsx
 * <Pre><Code>function hello() {{
  return "Hi";
}}</Code></Pre>
 *
 * <Pre>  Formatted
     Text</Pre>
 * ```
 */
export const Pre = React.forwardRef<
  HTMLPreElement,
  JSX.IntrinsicElements['pre']
>((props, ref) => {
  return <pre ref={ref} {...props} />;
});

Pre.displayName = 'Pre';
