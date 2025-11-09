/**
 * A type-safe React wrapper for the HTML `<link>` element.
 *
 * @remarks
 * External resource link (usually in head).
 *
 * **Tip:** Use for stylesheets, icons, preloading
 *
 * @example
 * ```tsx
 * <Link rel="stylesheet" href="/style.css" />
 * ```
 */
export const Link = React.forwardRef<
  HTMLLinkElement,
  JSX.IntrinsicElements['link']
>((props, ref) => {
  return <link ref={ref} {...props} />;
});

Link.displayName = 'Link';
