import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<canvas>` element.
 *
 * @remarks
 * Graphics canvas for drawing.
 *
 * - Provide fallback content for accessibility
 * - Requires JavaScript for drawing
 * - Not accessible by default - provide alternatives
 *
 * **Pro Tips:**
 * - Provide fallback content
 * - Consider SVG for static graphics
 *
 * @example
 * ```tsx
 * <Canvas width={800} height={600}>Your browser doesn't support canvas</Canvas>
 * ```
 */
export const Canvas = React.forwardRef<
  HTMLCanvasElement,
  JSX.IntrinsicElements['canvas']
>((props, ref) => {
  return <canvas ref={ref} {...props} />;
});

Canvas.displayName = 'Canvas';
