import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<ruby>` element.
 *
 * @remarks
 * Ruby annotation (East Asian typography).
 *
 * **Tip:** Use for pronunciation guides
 *
 * @example
 * ```tsx
 * <Ruby>漢<Rt>kan</Rt></Ruby>
 * ```
 */
export const Ruby = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['ruby']
>((props, ref) => {
  return <ruby ref={ref} {...props} />;
});

Ruby.displayName = 'Ruby';
