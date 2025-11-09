/**
 * A type-safe React wrapper for the HTML `<area>` element.
 *
 * @remarks
 * Clickable area in image map.
 *
 * **Tip:** Always provide alt text
 *
 * @example
 * ```tsx
 * <Area shape="rect" coords="0,0,50,50" href="/link" alt="Region" />
 * ```
 */
export const Area = React.forwardRef<
  HTMLAreaElement,
  JSX.IntrinsicElements['area']
>((props, ref) => {
  return <area ref={ref} {...props} />;
});

Area.displayName = 'Area';
