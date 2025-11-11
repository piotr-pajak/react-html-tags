import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<samp>` element.
 *
 * @remarks
 * Sample output from program.
 *
 * **Tip:** Use for computer output
 *
 * @example
 * ```tsx
 * <Samp>Error: File not found</Samp>
 * ```
 */
export const Samp = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['samp']
>((props, ref) => {
  return <samp ref={ref} {...props} />;
});

Samp.displayName = 'Samp';
