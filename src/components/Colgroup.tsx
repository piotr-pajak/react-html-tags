/**
 * A type-safe React wrapper for the HTML `<colgroup>` element.
 *
 * @remarks
 * Group of table columns.
 *
 * **Tip:** Place before any tbody/thead/tfoot
 *
 * @example
 * ```tsx
 * <Colgroup><Col /><Col /></Colgroup>
 * ```
 */
export const Colgroup = React.forwardRef<
  HTMLTableColElement,
  JSX.IntrinsicElements['colgroup']
>((props, ref) => {
  return <colgroup ref={ref} {...props} />;
});

Colgroup.displayName = 'Colgroup';
