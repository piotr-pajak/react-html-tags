/**
 * A type-safe React wrapper for the HTML `<bdo>` element.
 *
 * @remarks
 * Bidirectional override.
 *
 * **Tip:** Force text direction
 *
 * @example
 * ```tsx
 * <Bdo dir="rtl">Text</Bdo>
 * ```
 */
export const Bdo = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['bdo']
>((props, ref) => {
  return <bdo ref={ref} {...props} />;
});

Bdo.displayName = 'Bdo';
