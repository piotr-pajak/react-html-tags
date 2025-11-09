/**
 * A type-safe React wrapper for the HTML `<button>` element.
 *
 * @remarks
 * This component accepts all native HTML button attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard button properties including type, disabled, onClick, etc.
 *
 * @example
 * ```tsx
 * <Button type="submit" disabled={isLoading}>
 *   Save Changes
 * </Button>
 *
 * <Button onClick={() => setCount(count + 1)}>
 *   Count: {count}
 * </Button>
 * ```
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements['button']
>((props, ref) => {
  return <button ref={ref} {...props} />;
});

Button.displayName = 'Button';
