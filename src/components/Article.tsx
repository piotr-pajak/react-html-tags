/**
 * A type-safe React wrapper for the HTML `<article>` element.
 *
 * @remarks
 * Self-contained content that could be distributed independently.
 *
 * - Perfect for blog posts, news articles, forum posts
 * - Should make sense on its own
 * - Can be nested (e.g., comments in a blog post)
 *
 * **Pro Tips:**
 * - Use for syndication-ready content
 * - Include publication date with Time element
 *
 * @example
 * ```tsx
 * <Article><H2>Blog Post Title</H2><P>Content...</P></Article>
 *
 * <Article><Header><H3>Comment</H3></Header><P>...</P></Article>
 * ```
 */
export const Article = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['article']
>((props, ref) => {
  return <article ref={ref} {...props} />;
});

Article.displayName = 'Article';
