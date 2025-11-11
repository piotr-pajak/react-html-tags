import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<h3>` element.
 *
 * @remarks
 * Third-level heading - subsections under H2.
 *
 * - Used for subsections within H2 sections
 * - Maintains document outline hierarchy
 * - Should not skip heading levels (e.g., H1 to H3)
 *
 * **Pro Tips:**
 * - Use under H2 for subsections
 * - Maintain proper heading hierarchy
 *
 * @example
 * ```tsx
 * <H3>Key Benefits</H3>
 * ```
 */
export const H3 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h3']
>((props, ref) => {
  return <h3 ref={ref} {...props} />;
});

H3.displayName = 'H3';
