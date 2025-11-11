import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<cite>` element.
 *
 * @remarks
 * Title of creative work.
 *
 * **Tip:** Use for book titles, movie names, etc.
 *
 * @example
 * ```tsx
 * <Cite>The Great Gatsby</Cite>
 * ```
 */
export const Cite = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['cite']
>((props, ref) => {
  return <cite ref={ref} {...props} />;
});

Cite.displayName = 'Cite';
