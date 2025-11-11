import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<figcaption>` element.
 *
 * @remarks
 * Caption for Figure.
 *
 * - Must be first or last child of Figure
 * - Provides context for the figure
 *
 * **Pro Tips:**
 * - Place as first or last child of Figure
 *
 * @example
 * ```tsx
 * <Figcaption>Figure 1: Results</Figcaption>
 * ```
 */
export const Figcaption = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['figcaption']
>((props, ref) => {
  return <figcaption ref={ref} {...props} />;
});

Figcaption.displayName = 'Figcaption';
