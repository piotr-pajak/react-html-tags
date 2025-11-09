/**
 * A type-safe React wrapper for the HTML `<h2>` element.
 *
 * @remarks
 * Second-level heading - major sections under H1.
 *
 * - Used for main sections within the page
 * - Should appear after H1, not before
 * - Multiple H2 elements are common and expected
 *
 * **Pro Tips:**
 * - Use after H1 for major sections
 * - Can have multiple H2s per page
 *
 * @example
 * ```tsx
 * <H2>Features</H2>
 *
 * <H2>Pricing</H2>
 * ```
 */
export const H2 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2']
>((props, ref) => {
  return <h2 ref={ref} {...props} />;
});

H2.displayName = 'H2';
