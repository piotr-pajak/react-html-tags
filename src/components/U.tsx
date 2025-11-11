import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<u>` element.
 *
 * @remarks
 * Underlined text.
 *
 * **Tip:** Use CSS text-decoration instead when possible
 *
 * @example
 * ```tsx
 * <U>Underlined</U>
 * ```
 */
export const U = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['u']
>((props, ref) => {
  return <u ref={ref} {...props} />;
});

U.displayName = 'U';
