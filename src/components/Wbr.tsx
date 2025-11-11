import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<wbr>` element.
 *
 * @remarks
 * Word break opportunity.
 *
 * **Tip:** Suggests where line can break in long words
 *
 * @example
 * ```tsx
 * verylongword<Wbr />continued
 * ```
 */
export const Wbr = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['wbr']
>((props, ref) => {
  return <wbr ref={ref} {...props} />;
});

Wbr.displayName = 'Wbr';
