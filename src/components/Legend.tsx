import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<legend>` element.
 *
 * @remarks
 * Caption for Fieldset.
 *
 * - Must be first child of Fieldset
 * - Screen readers announce this when entering the fieldset
 *
 * **Pro Tips:**
 * - Always use with Fieldset
 * - Place as first child
 *
 * @example
 * ```tsx
 * <Fieldset><Legend>Personal Information</Legend>...</Fieldset>
 * ```
 */
export const Legend = React.forwardRef<
  HTMLLegendElement,
  JSX.IntrinsicElements['legend']
>((props, ref) => {
  return <legend ref={ref} {...props} />;
});

Legend.displayName = 'Legend';
