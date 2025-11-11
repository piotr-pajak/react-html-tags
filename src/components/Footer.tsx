import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<footer>` element.
 *
 * @remarks
 * Footer for nearest sectioning content or root.
 *
 * - Typically contains copyright, links, contact info
 * - Can be used for page footer or section footers
 * - Cannot contain another Header or Footer
 *
 * **Pro Tips:**
 * - Include copyright and legal links
 * - Can have multiple per page (one per section)
 *
 * @example
 * ```tsx
 * <Footer><P>&copy; 2024 Company</P><Nav>...</Nav></Footer>
 *
 * <Article><Footer><P>Author: John</P></Footer></Article>
 * ```
 */
export const Footer = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['footer']
>((props, ref) => {
  return <footer ref={ref} {...props} />;
});

Footer.displayName = 'Footer';
