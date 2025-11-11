import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<svg>` element.
 *
 * @remarks
 * Scalable Vector Graphics container.
 *
 * - Add role="img" and aria-label for accessibility
 * - Inline SVG allows CSS styling and animation
 * - Set viewBox for responsive scaling
 *
 * **Pro Tips:**
 * - Add aria-label for accessibility
 * - Use viewBox for scaling
 *
 * @example
 * ```tsx
 * <Svg role="img" aria-label="Icon description" viewBox="0 0 100 100">...</Svg>
 * ```
 */
export const Svg = React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg']
>((props, ref) => {
  return <svg ref={ref} {...props} />;
});

Svg.displayName = 'Svg';
