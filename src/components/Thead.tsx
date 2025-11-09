/**
 * A type-safe React wrapper for the HTML `<thead>` element.
 *
 * @remarks
 * Table header group.
 *
 * - Contains header rows (Tr with Th)
 * - Improves accessibility and allows header repetition when printing
 *
 * **Pro Tips:**
 * - Use Th instead of Td in header rows
 *
 * @example
 * ```tsx
 * <Thead><Tr><Th>Name</Th><Th>Age</Th></Tr></Thead>
 * ```
 */
export const Thead = React.forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements['thead']
>((props, ref) => {
  return <thead ref={ref} {...props} />;
});

Thead.displayName = 'Thead';
