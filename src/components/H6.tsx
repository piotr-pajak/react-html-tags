import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<h6>` element.
 *
 * @remarks
 * Sixth-level heading - lowest level.
 *
 * - The deepest heading level available
 *
 * **Pro Tips:**
 * - Rarely used
 * - Consider document restructuring if needed
 *
 * @example
 * ```tsx
 * <H6>Fine Print</H6>
 * ```
 */
export const H6 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h6']
>((props, ref) => {
  return <h6 ref={ref} {...props} />;
});

H6.displayName = 'H6';
