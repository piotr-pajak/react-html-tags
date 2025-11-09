/**
 * A type-safe React wrapper for the HTML `<dd>` element.
 *
 * @remarks
 * Description in description list.
 *
 * - Must be child of Dl
 * - Follows one or more Dt elements
 *
 * **Pro Tips:**
 * - Can have multiple descriptions per term
 *
 * @example
 * ```tsx
 * <Dd>Definition of the term</Dd>
 * ```
 */
export const Dd = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['dd']
>((props, ref) => {
  return <dd ref={ref} {...props} />;
});

Dd.displayName = 'Dd';
