/**
 * A type-safe React wrapper for the HTML `<details>` element.
 *
 * @remarks
 * Disclosure widget - collapsible content.
 *
 * - Must contain Summary as first child
 * - Great for FAQ, "show more" sections
 * - Can be controlled with open attribute
 *
 * **Pro Tips:**
 * - Use for progressive disclosure
 * - Summary must be first child
 *
 * @example
 * ```tsx
 * <Details><Summary>More info</Summary><P>Hidden content</P></Details>
 *
 * <Details open><Summary>Expanded</Summary>Content</Details>
 * ```
 */
export const Details = React.forwardRef<
  HTMLDetailsElement,
  JSX.IntrinsicElements['details']
>((props, ref) => {
  return <details ref={ref} {...props} />;
});

Details.displayName = 'Details';
