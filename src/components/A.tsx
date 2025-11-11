import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<a>` element.
 *
 * @remarks
 * Hyperlink.
 *
 * - Use target="_blank" with rel="noopener noreferrer" for security
 * - Provide meaningful link text (not "click here")
 * - Use relative URLs when possible
 *
 * **Pro Tips:**
 * - Make link text descriptive
 * - Use rel="noopener" with target="_blank"
 *
 * @example
 * ```tsx
 * <A href="/about">About Us</A>
 *
 * <A href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</A>
 *
 * <A href="#section">Jump to section</A>
 * ```
 */
export const A = React.forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements['a']
>((props, ref) => {
  return <a ref={ref} {...props} />;
});

A.displayName = 'A';
