import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<ins>` element.
 *
 * @remarks
 * Inserted/added text.
 *
 * **Tip:** Use with Del to show changes
 *
 * @example
 * ```tsx
 * <Ins>New content</Ins>
 * ```
 */
export const Ins = React.forwardRef<
  HTMLModElement,
  JSX.IntrinsicElements['ins']
>((props, ref) => {
  return <ins ref={ref} {...props} />;
});

Ins.displayName = 'Ins';
