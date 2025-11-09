/**
 * A type-safe React wrapper for the HTML `<em>` element.
 *
 * @remarks
 * Emphasis - stress emphasis.
 *
 * - Semantic emphasis that changes meaning
 * - Screen readers may use different voice/tone
 * - Use I for stylistic italic without emphasis
 *
 * **Pro Tips:**
 * - Use when emphasis changes meaning
 * - Prefer over I for semantic emphasis
 *
 * @example
 * ```tsx
 * <P>I <Em>love</Em> React</P>
 *
 * <Em>Never</Em> do this
 * ```
 */
export const Em = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['em']
>((props, ref) => {
  return <em ref={ref} {...props} />;
});

Em.displayName = 'Em';
