/**
 * A type-safe React wrapper for the HTML `<menu>` element.
 *
 * @remarks
 * List of commands/options.
 *
 * **Tip:** Similar to Ul but for commands
 *
 * @example
 * ```tsx
 * <Menu><Li><Button>Option</Button></Li></Menu>
 * ```
 */
export const Menu = React.forwardRef<
  HTMLMenuElement,
  JSX.IntrinsicElements['menu']
>((props, ref) => {
  return <menu ref={ref} {...props} />;
});

Menu.displayName = 'Menu';
