import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<h5>` element.
 *
 * @remarks
 * Fifth-level heading.
 *
 * - Rarely needed in most documents
 *
 * **Pro Tips:**
 * - Consider if this level of nesting is necessary
 *
 * @example
 * ```tsx
 * <H5>Specifications</H5>
 * ```
 */
export const H5 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h5']
>((props, ref) => {
  return <h5 ref={ref} {...props} />;
});

H5.displayName = 'H5';
