/**
 * A type-safe React wrapper for the HTML `<br>` element.
 *
 * @remarks
 * Line break.
 *
 * - Use sparingly - CSS is usually better
 * - Appropriate for poems, addresses, signatures
 * - Don't use for spacing - use CSS margin/padding
 *
 * **Pro Tips:**
 * - Use in addresses and poetry
 * - Avoid for spacing - use CSS instead
 *
 * @example
 * ```tsx
 * <Address>123 Street<Br />City, State</Address>
 *
 * <P>First line<Br />Second line</P>
 * ```
 */
export const Br = React.forwardRef<
  HTMLBRElement,
  JSX.IntrinsicElements['br']
>((props, ref) => {
  return <br ref={ref} {...props} />;
});

Br.displayName = 'Br';
