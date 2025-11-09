/**
 * A type-safe React wrapper for the HTML `<time>` element.
 *
 * @remarks
 * Date/time representation.
 *
 * - Use dateTime attribute for machine-readable format
 * - Helps search engines and assistive technology
 * - Content can be human-readable
 *
 * **Pro Tips:**
 * - Always use dateTime attribute
 * - Use ISO 8601 format
 *
 * @example
 * ```tsx
 * <Time dateTime="2024-01-01">January 1, 2024</Time>
 *
 * <Time dateTime="2024-01-01T14:30">2:30 PM</Time>
 * ```
 */
export const Time = React.forwardRef<
  HTMLTimeElement,
  JSX.IntrinsicElements['time']
>((props, ref) => {
  return <time ref={ref} {...props} />;
});

Time.displayName = 'Time';
