import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<b>` element.
 *
 * @remarks
 * Stylistically bold text (no semantic importance).
 *
 * **Tip:** Use Strong for semantic importance
 *
 * @example
 * ```tsx
 * <B>Bold</B>
 * ```
 */
export const B = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['b']
>((props, ref) => {
  return <b ref={ref} {...props} />;
});

B.displayName = 'B';
