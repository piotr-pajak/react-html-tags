/**
 * A type-safe React wrapper for the HTML `<div>` element.
 *
 * @remarks
 * Generic container with no semantic meaning - use for layout and grouping.
 *
 * - No semantic meaning - purely for styling and layout
 * - Prefer semantic elements (Section, Article, Nav) when appropriate
 * - Use for grouping elements that don't have a better semantic container
 *
 * **Pro Tips:**
 * - Avoid "div soup" - use semantic HTML when possible
 * - Use for flexbox/grid layouts and styling containers
 * - Consider Section, Article, or Nav for meaningful content groups
 *
 * @example
 * ```tsx
 * <Div className="container">
 *   <H1>Welcome</H1>
 *   <P>Content goes here</P>
 * </Div>
 *
 * <Div ref={divRef} style={{ display: 'flex', gap: '1rem' }}>
 *   <Div>Column 1</Div>
 *   <Div>Column 2</Div>
 * </Div>
 * ```
 */
export const Div = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>((props, ref) => {
  return <div ref={ref} {...props} />;
});

Div.displayName = 'Div';
