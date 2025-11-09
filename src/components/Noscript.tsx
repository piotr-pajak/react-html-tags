/**
 * A type-safe React wrapper for the HTML `<noscript>` element.
 *
 * @remarks
 * Content for non-JavaScript browsers.
 *
 * **Tip:** Provide fallback for JS-required features
 *
 * @example
 * ```tsx
 * <Noscript>Please enable JavaScript</Noscript>
 * ```
 */
export const Noscript = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['noscript']
>((props, ref) => {
  return <noscript ref={ref} {...props} />;
});

Noscript.displayName = 'Noscript';
