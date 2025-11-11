import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<table>` element.
 *
 * @remarks
 * Tabular data representation.
 *
 * - Use only for tabular data, not for layout
 * - Include Caption for accessibility
 * - Use Thead, Tbody, Tfoot for structure
 *
 * **Pro Tips:**
 * - Always add Caption
 * - Use Th for headers with scope attribute
 *
 * @example
 * ```tsx
 * <Table><Caption>Sales Data</Caption><Thead>...</Thead><Tbody>...</Tbody></Table>
 * ```
 */
export const Table = React.forwardRef<
  HTMLTableElement,
  JSX.IntrinsicElements['table']
>((props, ref) => {
  return <table ref={ref} {...props} />;
});

Table.displayName = 'Table';
