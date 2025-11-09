/**
 * A type-safe React wrapper for the HTML `<label>` element.
 *
 * @remarks
 * Caption for form control - improves accessibility.
 *
 * - Essential for accessibility - screen readers announce the label
 * - Clicking label focuses/activates the associated control
 * - Use htmlFor or wrap the input
 *
 * **Pro Tips:**
 * - Always use labels with inputs
 * - Use htmlFor to associate with control
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label><Input id="email" />
 *
 * <Label>Name<Input type="text" /></Label>
 * ```
 */
export const Label = React.forwardRef<
  HTMLLabelElement,
  JSX.IntrinsicElements['label']
>((props, ref) => {
  return <label ref={ref} {...props} />;
});

Label.displayName = 'Label';
