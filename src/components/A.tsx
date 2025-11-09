/**
 * A type-safe React wrapper for the HTML `<a>` element.
 *
 * @remarks
 * This component accepts all native HTML anchor attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard anchor properties including href, target, rel, etc.
 *
 * @example
 * ```tsx
 * <A href="/about">About Us</A>
 *
 * <A href="https://example.com" target="_blank" rel="noopener noreferrer">
 *   External Link
 * </A>
 * ```
 */
export const A = React.forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements['a']
>((props, ref) => {
  return <a ref={ref} {...props} />;
});

A.displayName = 'A';
