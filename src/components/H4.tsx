/**
 * A type-safe React wrapper for the HTML `<h4>` element.
 *
 * @remarks
 * Fourth-level heading.
 *
 * - Used for subsections under H3
 *
 * **Pro Tips:**
 * - Use sparingly
 * - Maintain hierarchy
 *
 * @example
 * ```tsx
 * <H4>Technical Details</H4>
 * ```
 */
export const H4 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h4']
>((props, ref) => {
  return <h4 ref={ref} {...props} />;
});

H4.displayName = 'H4';
