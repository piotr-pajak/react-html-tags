/**
 * A type-safe React wrapper for the HTML `<sup>` element.
 *
 * @remarks
 * Superscript text.
 *
 * **Tip:** Use for exponents, footnote markers
 *
 * @example
 * ```tsx
 * <P>x<Sup>2</Sup> + y<Sup>2</Sup></P>
 * ```
 */
export const Sup = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['sup']
>((props, ref) => {
  return <sup ref={ref} {...props} />;
});

Sup.displayName = 'Sup';
