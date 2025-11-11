import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<bdi>` element.
 *
 * @remarks
 * Bidirectional isolation.
 *
 * **Tip:** Use for user-generated content with unknown direction
 *
 * @example
 * ```tsx
 * <Bdi>{username}</Bdi>
 * ```
 */
export const Bdi = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['bdi']
>((props, ref) => {
  return <bdi ref={ref} {...props} />;
});

Bdi.displayName = 'Bdi';
