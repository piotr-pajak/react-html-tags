import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<abbr>` element.
 *
 * @remarks
 * Abbreviation or acronym.
 *
 * - Use title attribute for full expansion
 * - Helps screen readers pronounce correctly
 * - Often styled with dotted underline
 *
 * **Pro Tips:**
 * - Always provide title attribute
 * - Explain on first use
 *
 * @example
 * ```tsx
 * <Abbr title="HyperText Markup Language">HTML</Abbr>
 *
 * <Abbr title="World Wide Web Consortium">W3C</Abbr>
 * ```
 */
export const Abbr = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['abbr']
>((props, ref) => {
  return <abbr ref={ref} {...props} />;
});

Abbr.displayName = 'Abbr';
