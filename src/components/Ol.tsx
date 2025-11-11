import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<ol>` element.
 *
 * @remarks
 * Ordered list - items with specific sequence.
 *
 * - Direct children should only be Li elements
 * - Use when order matters (steps, rankings, etc.)
 * - Use start, reversed, type attributes to customize numbering
 *
 * **Pro Tips:**
 * - Use for step-by-step instructions
 * - Set start for continuing numbered lists
 *
 * @example
 * ```tsx
 * <Ol><Li>First step</Li><Li>Second step</Li></Ol>
 *
 * <Ol start={5} type="A">...</Ol>
 *
 * <Ol reversed>...</Ol>
 * ```
 */
export const Ol = React.forwardRef<
  HTMLOListElement,
  JSX.IntrinsicElements['ol']
>((props, ref) => {
  return <ol ref={ref} {...props} />;
});

Ol.displayName = 'Ol';
