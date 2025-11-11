import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<var>` element.
 *
 * @remarks
 * Mathematical or programming variable.
 *
 * **Tip:** Use for variables in math/code contexts
 *
 * @example
 * ```tsx
 * <Var>x</Var> + <Var>y</Var>
 * ```
 */
export const Var = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['var']
>((props, ref) => {
  return <var ref={ref} {...props} />;
});

Var.displayName = 'Var';
