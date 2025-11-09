/**
 * A type-safe React wrapper for the HTML `<optgroup>` element.
 *
 * @remarks
 * Group of options in Select.
 *
 * **Tip:** Use to organize long option lists
 *
 * @example
 * ```tsx
 * <Optgroup label="Fruits"><Option>Apple</Option></Optgroup>
 * ```
 */
export const Optgroup = React.forwardRef<
  HTMLOptGroupElement,
  JSX.IntrinsicElements['optgroup']
>((props, ref) => {
  return <optgroup ref={ref} {...props} />;
});

Optgroup.displayName = 'Optgroup';
