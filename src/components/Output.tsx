import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<output>` element.
 *
 * @remarks
 * Result of calculation.
 *
 * **Tip:** Use for form calculation results
 *
 * @example
 * ```tsx
 * <Output>Result: {value}</Output>
 * ```
 */
export const Output = React.forwardRef<
  HTMLOutputElement,
  JSX.IntrinsicElements['output']
>((props, ref) => {
  return <output ref={ref} {...props} />;
});

Output.displayName = 'Output';
