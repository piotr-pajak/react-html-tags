import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<q>` element.
 *
 * @remarks
 * Inline quotation.
 *
 * - Browser automatically adds quotation marks
 * - For short inline quotes
 *
 * **Pro Tips:**
 * - Don't add manual quotes
 * - Use Blockquote for longer quotes
 *
 * @example
 * ```tsx
 * <P>She said <Q>Hello world</Q></P>
 * ```
 */
export const Q = React.forwardRef<
  HTMLQuoteElement,
  JSX.IntrinsicElements['q']
>((props, ref) => {
  return <q ref={ref} {...props} />;
});

Q.displayName = 'Q';
