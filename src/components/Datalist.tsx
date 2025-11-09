/**
 * A type-safe React wrapper for the HTML `<datalist>` element.
 *
 * @remarks
 * List of pre-defined options for input.
 *
 * **Tip:** Provides autocomplete suggestions
 *
 * @example
 * ```tsx
 * <Input list="colors" /><Datalist id="colors"><Option>Red</Option></Datalist>
 * ```
 */
export const Datalist = React.forwardRef<
  HTMLDataListElement,
  JSX.IntrinsicElements['datalist']
>((props, ref) => {
  return <datalist ref={ref} {...props} />;
});

Datalist.displayName = 'Datalist';
