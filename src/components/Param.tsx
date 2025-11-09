/**
 * A type-safe React wrapper for the HTML `<param>` element.
 *
 * @remarks
 * Parameter for Object element.
 *
 * **Tip:** Use as child of Object
 *
 * @example
 * ```tsx
 * <Param name="autoplay" value="true" />
 * ```
 */
export const Param = React.forwardRef<
  HTMLParamElement,
  JSX.IntrinsicElements['param']
>((props, ref) => {
  return <param ref={ref} {...props} />;
});

Param.displayName = 'Param';
