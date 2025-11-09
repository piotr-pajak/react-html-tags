/**
 * A type-safe React wrapper for the HTML `<header>` element.
 *
 * @remarks
 * Introductory content or navigational aids.
 *
 * - Can be used for page header or section headers
 * - Often contains heading, logo, navigation
 * - Cannot be nested within another Header, Footer, or Address
 *
 * **Pro Tips:**
 * - Use for site-wide or section-specific headers
 * - Include navigation if appropriate
 *
 * @example
 * ```tsx
 * <Header><H1>Site Name</H1><Nav>...</Nav></Header>
 *
 * <Article><Header><H2>Post Title</H2><Time>2024</Time></Header></Article>
 * ```
 */
export const Header = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['header']
>((props, ref) => {
  return <header ref={ref} {...props} />;
});

Header.displayName = 'Header';
