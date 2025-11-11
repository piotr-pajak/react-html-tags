import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<picture>` element.
 *
 * @remarks
 * Responsive image container.
 *
 * **Tip:** Use for art direction and responsive images
 *
 * @example
 * ```tsx
 * <Picture><Source srcSet="/lg.jpg" media="(min-width: 800px)" /><Img src="/sm.jpg" /></Picture>
 * ```
 */
export const Picture = React.forwardRef<
  HTMLPictureElement,
  JSX.IntrinsicElements['picture']
>((props, ref) => {
  return <picture ref={ref} {...props} />;
});

Picture.displayName = 'Picture';
