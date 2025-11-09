/**
 * A type-safe React wrapper for the HTML `<sub>` element.
 *
 * @remarks
 * Subscript text.
 *
 * **Tip:** Use for chemical formulas, mathematical notation
 *
 * @example
 * ```tsx
 * <P>H<Sub>2</Sub>O</P>
 * ```
 */
export const Sub = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['sub']
>((props, ref) => {
  return <sub ref={ref} {...props} />;
});

Sub.displayName = 'Sub';
