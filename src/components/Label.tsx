/**
 * A type-safe React wrapper for the HTML `<label>` element.
 *
 * @remarks
 * This component accepts all native HTML label attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard label properties including htmlFor, etc.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email Address</Label>
 *
 * <Label>
 *   Username
 *   <Input type="text" name="username" />
 * </Label>
 * ```
 */
export const Label = React.forwardRef<
  HTMLLabelElement,
  JSX.IntrinsicElements['label']
>((props, ref) => {
  return <label ref={ref} {...props} />;
});

Label.displayName = 'Label';
