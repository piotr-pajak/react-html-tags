import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<meter>` element.
 *
 * @remarks
 * Scalar measurement in range.
 *
 * **Tip:** Use for disk usage, ratings
 *
 * @example
 * ```tsx
 * <Meter value={0.6} min={0} max={1}>60%</Meter>
 * ```
 */
export const Meter = React.forwardRef<
  HTMLMeterElement,
  JSX.IntrinsicElements['meter']
>((props, ref) => {
  return <meter ref={ref} {...props} />;
});

Meter.displayName = 'Meter';
