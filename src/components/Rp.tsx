/**
 * A type-safe React wrapper for the HTML `<rp>` element.
 *
 * @remarks
 * Ruby fallback parenthesis.
 *
 * **Tip:** Fallback for browsers without ruby support
 *
 * @example
 * ```tsx
 * <Rp>(</Rp><Rt>text</Rt><Rp>)</Rp>
 * ```
 */
export const Rp = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['rp']
>((props, ref) => {
  return <rp ref={ref} {...props} />;
});

Rp.displayName = 'Rp';
