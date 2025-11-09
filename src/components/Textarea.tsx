/**
 * A type-safe React wrapper for the HTML `<textarea>` element.
 *
 * @remarks
 * This component accepts all native HTML textarea attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard textarea properties including value, onChange, rows, cols, etc.
 *
 * @example
 * ```tsx
 * <Textarea
 *   value={message}
 *   onChange={(e) => setMessage(e.target.value)}
 *   placeholder="Enter your message"
 *   rows={5}
 * />
 *
 * <Textarea name="description" required maxLength={500} />
 * ```
 */
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']
>((props, ref) => {
  return <textarea ref={ref} {...props} />;
});

Textarea.displayName = 'Textarea';
