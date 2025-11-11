import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<slot>` element.
 *
 * @remarks
 * Web Component slot.
 *
 * **Tip:** Use in Web Component shadow DOM
 *
 * @example
 * ```tsx
 * <Slot name="header" />
 * ```
 */
export const Slot = React.forwardRef<
  HTMLSlotElement,
  JSX.IntrinsicElements['slot']
>((props, ref) => {
  return <slot ref={ref} {...props} />;
});

Slot.displayName = 'Slot';
