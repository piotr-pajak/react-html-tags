/**
 * A type-safe React wrapper for the HTML `<data>` element.
 *
 * @remarks
 * Machine-readable content.
 *
 * **Tip:** Use value for machine-readable data
 *
 * @example
 * ```tsx
 * <Data value="12345">Product Name</Data>
 * ```
 */
export const Data = React.forwardRef<
  HTMLDataElement,
  JSX.IntrinsicElements['data']
>((props, ref) => {
  return <data ref={ref} {...props} />;
});

Data.displayName = 'Data';
