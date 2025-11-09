/**
 * A type-safe React wrapper for the HTML `<h1>` element.
 *
 * @remarks
 * This component accepts all native HTML h1 attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard heading properties including className, style, etc.
 *
 * @example
 * ```tsx
 * <H1>Page Title</H1>
 *
 * <H1 className="hero-title">
 *   Welcome to Our Website
 * </H1>
 * ```
 */
export const H1 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1']
>((props, ref) => {
  return <h1 ref={ref} {...props} />;
});

H1.displayName = 'H1';
