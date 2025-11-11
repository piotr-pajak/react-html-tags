import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<s>` element.
 *
 * @remarks
 * Strikethrough - no longer relevant.
 *
 * **Tip:** Use Del for deleted content
 *
 * @example
 * ```tsx
 * <S>Was $99</S> Now $49
 * ```
 */
export const S = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['s']
>((props, ref) => {
  return <s ref={ref} {...props} />;
});

S.displayName = 'S';
