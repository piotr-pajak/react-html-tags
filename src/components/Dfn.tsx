import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<dfn>` element.
 *
 * @remarks
 * Term being defined.
 *
 * **Tip:** Use for first occurrence of term
 *
 * @example
 * ```tsx
 * <Dfn>HTML</Dfn> is a markup language
 * ```
 */
export const Dfn = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['dfn']
>((props, ref) => {
  return <dfn ref={ref} {...props} />;
});

Dfn.displayName = 'Dfn';
