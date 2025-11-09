/**
 * A type-safe React wrapper for the HTML `<col>` element.
 *
 * @remarks
 * Table column properties.
 *
 * **Tip:** Use for column-wide styling
 *
 * @example
 * ```tsx
 * <Col span={2} style={{width: "30%"}} />
 * ```
 */
export const Col = React.forwardRef<
  HTMLTableColElement,
  JSX.IntrinsicElements['col']
>((props, ref) => {
  return <col ref={ref} {...props} />;
});

Col.displayName = 'Col';
