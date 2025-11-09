/**
 * A type-safe React wrapper for the HTML `<input>` element.
 *
 * @remarks
 * This component accepts all native HTML input attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard input properties including type, value, onChange, placeholder, etc.
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   value={email}
 *   onChange={(event) => setEmail(event.target.value)}
 *   placeholder="Enter your email"
 *   required
 * />
 *
 * <Input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
 * ```
 */
export const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>((props, ref) => {
  return <input ref={ref} {...props} />;
});

Input.displayName = 'Input';
