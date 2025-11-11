import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<figure>` element.
 *
 * @remarks
 * Self-contained content with optional caption.
 *
 * - Use with Figcaption for caption
 * - Perfect for images, diagrams, code listings
 * - Can be moved without affecting flow
 *
 * **Pro Tips:**
 * - Use Figcaption for captions
 * - Great for images with captions
 *
 * @example
 * ```tsx
 * <Figure><Img src="/chart.png" alt="Chart" /><Figcaption>Sales Growth</Figcaption></Figure>
 * ```
 */
export const Figure = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['figure']
>((props, ref) => {
  return <figure ref={ref} {...props} />;
});

Figure.displayName = 'Figure';
