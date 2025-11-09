/**
 * A type-safe React wrapper for the HTML `<h1>` element.
 *
 * @remarks
 * Main heading - highest level of document hierarchy.
 *
 * - Should be used once per page for the main title
 * - Screen readers use headings for navigation
 * - Search engines give more weight to H1 content
 *
 * **Pro Tips:**
 * - Only use one H1 per page
 * - Follow with H2 for subsections
 *
 * @example
 * ```tsx
 * <H1>Welcome to Our Website</H1>
 * ```
 */
export const H1 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1']
>((props, ref) => {
  return <h1 ref={ref} {...props} />;
});

H1.displayName = 'H1';
