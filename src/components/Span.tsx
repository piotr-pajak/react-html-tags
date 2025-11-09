/**
 * A type-safe React wrapper for the HTML `<span>` element.
 *
 * @remarks
 * Generic inline container - like Div but for inline content.
 *
 * - No semantic meaning - purely for styling inline content
 * - Doesn't break text flow (inline element)
 * - Use Strong for importance, Em for emphasis (semantic alternatives)
 *
 * **Pro Tips:**
 * - Use for styling parts of text without semantic meaning
 * - Great for icons, badges, inline status indicators
 * - Prefer Strong/Em when the styling has semantic meaning
 *
 * @example
 * ```tsx
 * <P>Price: <Span className="highlight">${price}</Span></P>
 *
 * <Span className="badge badge-new">New</Span>
 *
 * <Span style={{ color: 'red', fontWeight: 'bold' }}>
 *   Error: {errorMessage}
 * </Span>
 * ```
 */
export const Span = React.forwardRef<
  HTMLSpanElement,
  JSX.IntrinsicElements['span']
>((props, ref) => {
  return <span ref={ref} {...props} />;
});

Span.displayName = 'Span';
