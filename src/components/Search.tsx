import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<search>` element.
 *
 * @remarks
 * Search or filtering section.
 *
 * **Tip:** Use for search functionality
 *
 * @example
 * ```tsx
 * <Search><Form><Input type="search" /></Form></Search>
 * ```
 */
export const Search = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['search']
>((props, ref) => {
  return <search ref={ref} {...props} />;
});

Search.displayName = 'Search';
