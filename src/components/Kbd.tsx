/**
 * A type-safe React wrapper for the HTML `<kbd>` element.
 *
 * @remarks
 * Keyboard input representation.
 *
 * **Tip:** Use for keyboard shortcuts
 *
 * @example
 * ```tsx
 * <Kbd>Ctrl</Kbd>+<Kbd>C</Kbd>
 * ```
 */
export const Kbd = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['kbd']
>((props, ref) => {
  return <kbd ref={ref} {...props} />;
});

Kbd.displayName = 'Kbd';
