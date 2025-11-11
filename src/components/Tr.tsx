import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<tr>` element.
 *
 * @remarks
 * Table row.
 *
 * - Contains Td or Th cells
 *
 * **Pro Tips:**
 * - All rows should have same number of cells (or use colspan/rowspan)
 *
 * @example
 * ```tsx
 * <Tr><Td>Cell 1</Td><Td>Cell 2</Td></Tr>
 * ```
 */
export const Tr = React.forwardRef<
  HTMLTableRowElement,
  JSX.IntrinsicElements['tr']
>((props, ref) => {
  return <tr ref={ref} {...props} />;
});

Tr.displayName = 'Tr';
