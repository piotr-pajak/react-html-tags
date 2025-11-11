import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<tfoot>` element.
 *
 * @remarks
 * Table footer group.
 *
 * - Perfect for totals, summaries
 * - Can appear before Tbody in HTML5
 *
 * **Pro Tips:**
 * - Use for summary rows
 *
 * @example
 * ```tsx
 * <Tfoot><Tr><Td>Total</Td><Td>$100</Td></Tr></Tfoot>
 * ```
 */
export const Tfoot = React.forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements['tfoot']
>((props, ref) => {
  return <tfoot ref={ref} {...props} />;
});

Tfoot.displayName = 'Tfoot';
