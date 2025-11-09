/**
 * A type-safe React wrapper for the HTML `<mark>` element.
 *
 * @remarks
 * Highlighted/marked text for reference.
 *
 * - Used for search result highlighting
 * - Indicates relevance, not importance
 * - Default yellow background
 *
 * **Pro Tips:**
 * - Perfect for search result highlighting
 * - Different from Strong (importance)
 *
 * @example
 * ```tsx
 * <P>Search results for <Mark>React</Mark></P>
 *
 * <Mark>Highlighted text</Mark>
 * ```
 */
export const Mark = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['mark']
>((props, ref) => {
  return <mark ref={ref} {...props} />;
});

Mark.displayName = 'Mark';
