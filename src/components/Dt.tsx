/**
 * A type-safe React wrapper for the HTML `<dt>` element.
 *
 * @remarks
 * Term in description list.
 *
 * - Must be child of Dl
 * - Can have multiple Dd descriptions
 *
 * **Pro Tips:**
 * - Follow with one or more Dd elements
 *
 * @example
 * ```tsx
 * <Dt>Term</Dt><Dd>Definition</Dd>
 * ```
 */
export const Dt = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['dt']
>((props, ref) => {
  return <dt ref={ref} {...props} />;
});

Dt.displayName = 'Dt';
