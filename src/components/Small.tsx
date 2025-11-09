/**
 * A type-safe React wrapper for the HTML `<small>` element.
 *
 * @remarks
 * Fine print, disclaimers, legal text.
 *
 * **Tip:** Use for copyright, legal notices
 *
 * @example
 * ```tsx
 * <Small>&copy; 2024 Company</Small>
 * ```
 */
export const Small = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['small']
>((props, ref) => {
  return <small ref={ref} {...props} />;
});

Small.displayName = 'Small';
