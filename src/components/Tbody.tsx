/**
 * A type-safe React wrapper for the HTML `<tbody>` element.
 *
 * @remarks
 * Table body - main content rows.
 *
 * - Contains the main data rows
 * - Can have multiple Tbody elements for grouping
 *
 * **Pro Tips:**
 * - Use multiple Tbody to group related rows
 *
 * @example
 * ```tsx
 * <Tbody><Tr><Td>John</Td><Td>30</Td></Tr></Tbody>
 * ```
 */
export const Tbody = React.forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements['tbody']
>((props, ref) => {
  return <tbody ref={ref} {...props} />;
});

Tbody.displayName = 'Tbody';
