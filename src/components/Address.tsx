/**
 * A type-safe React wrapper for the HTML `<address>` element.
 *
 * @remarks
 * Contact information.
 *
 * **Tip:** Use for author/contact info
 *
 * @example
 * ```tsx
 * <Address>contact@example.com</Address>
 * ```
 */
export const Address = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['address']
>((props, ref) => {
  return <address ref={ref} {...props} />;
});

Address.displayName = 'Address';
