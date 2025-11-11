import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<i>` element.
 *
 * @remarks
 * Stylistically italic text (no semantic emphasis).
 *
 * **Tip:** Use Em for semantic emphasis
 *
 * @example
 * ```tsx
 * <I>Italic</I>
 * ```
 */
export const I = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['i']
>((props, ref) => {
  return <i ref={ref} {...props} />;
});

I.displayName = 'I';
