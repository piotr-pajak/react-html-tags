/**
 * A type-safe React wrapper for the HTML `<code>` element.
 *
 * @remarks
 * Inline code fragment.
 *
 * - For short code snippets inline
 * - Use Pre + Code for multi-line code blocks
 * - Automatically uses monospace font
 *
 * **Pro Tips:**
 * - Wrap in Pre for code blocks
 * - Use for variable names, function names
 *
 * @example
 * ```tsx
 * <P>Use the <Code>useState</Code> hook</P>
 *
 * <Code>const x = 1;</Code>
 * ```
 */
export const Code = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['code']
>((props, ref) => {
  return <code ref={ref} {...props} />;
});

Code.displayName = 'Code';
