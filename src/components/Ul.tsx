import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<ul>` element.
 *
 * @remarks
 * Unordered list - items without specific order.
 *
 * - Direct children should only be Li elements
 * - Use when order doesn't matter
 * - Screen readers announce "list" and item count
 *
 * **Pro Tips:**
 * - Use for navigation menus
 * - Style with CSS, not list-style-type in HTML
 *
 * @example
 * ```tsx
 * <Ul><Li>First item</Li><Li>Second item</Li></Ul>
 *
 * <Ul role="list">...</Ul>
 * ```
 */
export const Ul = React.forwardRef<
  HTMLUListElement,
  JSX.IntrinsicElements['ul']
>((props, ref) => {
  return <ul ref={ref} {...props} />;
});

Ul.displayName = 'Ul';
