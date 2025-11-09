/**
 * A type-safe React wrapper for the HTML `<span>` element.
 *
 * @remarks
 * This component accepts all native HTML span attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard span properties including className, style, onClick, etc.
 *
 * @example
 * ```tsx
 * <Span className="badge">New</Span>
 *
 * <Span style={{ color: 'red', fontWeight: 'bold' }}>
 *   Error: {errorMessage}
 * </Span>
 * ```
 */
export const Span = React.forwardRef<
  HTMLSpanElement,
  JSX.IntrinsicElements['span']
>((props, ref) => {
  return <span ref={ref} {...props} />;
});

Span.displayName = 'Span';
