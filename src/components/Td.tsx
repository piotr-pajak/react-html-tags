/**
 * A type-safe React wrapper for the HTML `<td>` element.
 *
 * @remarks
 * Table data cell.
 *
 * - Contains actual data
 * - Use colspan/rowspan for merged cells
 *
 * **Pro Tips:**
 * - Use headers attribute to associate with multiple Th cells
 *
 * @example
 * ```tsx
 * <Td>Data</Td>
 *
 * <Td colspan={2}>Merged</Td>
 *
 * <Td headers="header-id">Data</Td>
 * ```
 */
export const Td = React.forwardRef<
  HTMLTableCellElement,
  JSX.IntrinsicElements['td']
>((props, ref) => {
  return <td ref={ref} {...props} />;
});

Td.displayName = 'Td';
