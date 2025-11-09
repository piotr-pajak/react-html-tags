/**
 * A type-safe React wrapper for the HTML `<caption>` element.
 *
 * @remarks
 * Table title/caption.
 *
 * - Must be first child of Table
 * - Essential for accessibility - describes table purpose
 *
 * **Pro Tips:**
 * - Always include for accessibility
 * - Place as first child of Table
 *
 * @example
 * ```tsx
 * <Caption>Monthly Sales Report</Caption>
 * ```
 */
export const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  JSX.IntrinsicElements['caption']
>((props, ref) => {
  return <caption ref={ref} {...props} />;
});

Caption.displayName = 'Caption';
