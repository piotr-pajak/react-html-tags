/**
 * A type-safe React wrapper for the HTML `<img>` element.
 *
 * @remarks
 * Image.
 *
 * - Always provide alt text for accessibility
 * - Use empty alt="" for decorative images
 * - Loading="lazy" for below-fold images
 *
 * **Pro Tips:**
 * - Describe the image content, not just "image"
 * - Use srcset for responsive images
 *
 * @example
 * ```tsx
 * <Img src="/photo.jpg" alt="Person smiling" />
 *
 * <Img src="/icon.png" alt="" loading="lazy" />
 * ```
 */
export const Img = React.forwardRef<
  HTMLImageElement,
  JSX.IntrinsicElements['img']
>((props, ref) => {
  return <img ref={ref} {...props} />;
});

Img.displayName = 'Img';
