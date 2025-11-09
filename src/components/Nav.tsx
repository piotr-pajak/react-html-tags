/**
 * A type-safe React wrapper for the HTML `<nav>` element.
 *
 * @remarks
 * Navigation links section.
 *
 * - Reserved for major navigation blocks
 * - Not all link groups need to be in Nav
 * - Screen readers can jump directly to Nav elements
 *
 * **Pro Tips:**
 * - Use for primary navigation only
 * - Add aria-label for multiple navs
 *
 * @example
 * ```tsx
 * <Nav><Ul><Li><A href="/">Home</A></Li></Ul></Nav>
 *
 * <Nav aria-label="Main navigation">...</Nav>
 * ```
 */
export const Nav = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['nav']
>((props, ref) => {
  return <nav ref={ref} {...props} />;
});

Nav.displayName = 'Nav';
