/**
 * A type-safe React wrapper for the HTML `<div>` element.
 *
 * @remarks
 * This component accepts all native HTML div attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard div properties including className, style, onClick, etc.
 *
 * @example
 * ```tsx
 * <Div>
 *   <H1>Welcome</H1>
 *   <P>Content goes here</P>
 * </Div>
 *
 * <Div ref={divRef}>
 *   Scrollable content
 * </Div>
 * ```
 */
export const Div = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>((props, ref) => {
  return <div ref={ref} {...props} />;
});

Div.displayName = 'Div';
