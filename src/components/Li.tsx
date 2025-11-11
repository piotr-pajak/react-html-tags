import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<li>` element.
 *
 * @remarks
 * List item.
 *
 * - Must be child of Ul, Ol, or Menu
 * - Can contain any flow content (including nested lists)
 *
 * **Pro Tips:**
 * - Can nest lists inside
 * - Use value attribute in Ol to override numbering
 *
 * @example
 * ```tsx
 * <Li>List item</Li>
 *
 * <Li value={10}>Specific value</Li>
 *
 * <Li><Strong>Bold item</Strong></Li>
 * ```
 */
export const Li = React.forwardRef<
  HTMLLIElement,
  JSX.IntrinsicElements['li']
>((props, ref) => {
  return <li ref={ref} {...props} />;
});

Li.displayName = 'Li';
