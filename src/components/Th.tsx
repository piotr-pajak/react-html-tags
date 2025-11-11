import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<th>` element.
 *
 * @remarks
 * Table header cell.
 *
 * - Use scope attribute for accessibility
 * - Helps screen readers associate data with headers
 *
 * **Pro Tips:**
 * - Always use scope attribute
 * - Use in Thead or as first cell in row
 *
 * @example
 * ```tsx
 * <Th scope="col">Column Header</Th>
 *
 * <Th scope="row">Row Header</Th>
 * ```
 */
export const Th = React.forwardRef<
  HTMLTableCellElement,
  JSX.IntrinsicElements['th']
>((props, ref) => {
  return <th ref={ref} {...props} />;
});

Th.displayName = 'Th';
