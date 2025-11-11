import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<blockquote>` element.
 *
 * @remarks
 * Extended quotation.
 *
 * - For long quotes that are block-level
 * - Use cite attribute for source URL
 * - Use Cite element for attribution
 *
 * **Pro Tips:**
 * - Add cite attribute with source URL
 * - Include Cite element for attribution
 *
 * @example
 * ```tsx
 * <Blockquote cite="https://example.com"><P>Long quote here</P><Cite>Author Name</Cite></Blockquote>
 * ```
 */
export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  JSX.IntrinsicElements['blockquote']
>((props, ref) => {
  return <blockquote ref={ref} {...props} />;
});

Blockquote.displayName = 'Blockquote';
