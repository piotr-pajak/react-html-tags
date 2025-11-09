/**
 * A type-safe React wrapper for the HTML `<p>` element.
 *
 * @remarks
 * Paragraph - the fundamental unit of text content.
 *
 * - Represents a paragraph of text
 * - Browsers add margin by default (usually top and bottom)
 * - Cannot contain block-level elements (use Div for that)
 *
 * **Pro Tips:**
 * - Use for body text, descriptions, explanations
 * - Don't use just for spacing (use CSS margin instead)
 * - Can contain inline elements (Span, Strong, Em, A, etc.)
 *
 * @example
 * ```tsx
 * <P>This is a paragraph of text with <Strong>important</Strong> content.</P>
 *
 * <P className="lead">
 *   Introductory paragraph with larger text.
 * </P>
 *
 * <Article>
 *   <P>First paragraph...</P>
 *   <P>Second paragraph...</P>
 * </Article>
 * ```
 */
export const P = React.forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>((props, ref) => {
  return <p ref={ref} {...props} />;
});

P.displayName = 'P';
