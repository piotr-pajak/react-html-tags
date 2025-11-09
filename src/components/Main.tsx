/**
 * A type-safe React wrapper for the HTML `<main>` element.
 *
 * @remarks
 * Dominant content of the document body.
 *
 * - Only one Main per page (not hidden)
 * - Should not be descendant of Article, Aside, Footer, Header, or Nav
 * - Helps screen readers skip to main content
 *
 * **Pro Tips:**
 * - Use only once per page
 * - Wrap main content, exclude repeated elements
 *
 * @example
 * ```tsx
 * <Main><H1>Page Title</H1><Article>...</Article></Main>
 * ```
 */
export const Main = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['main']
>((props, ref) => {
  return <main ref={ref} {...props} />;
});

Main.displayName = 'Main';
