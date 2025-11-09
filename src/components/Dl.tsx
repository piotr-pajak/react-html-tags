/**
 * A type-safe React wrapper for the HTML `<dl>` element.
 *
 * @remarks
 * Description list - term/description pairs.
 *
 * - Perfect for glossaries, metadata, key-value pairs
 * - Contains Dt (term) and Dd (description) elements
 * - Each term can have multiple descriptions
 *
 * **Pro Tips:**
 * - Use for glossaries
 * - Great for FAQ sections
 *
 * @example
 * ```tsx
 * <Dl><Dt>HTML</Dt><Dd>HyperText Markup Language</Dd><Dt>CSS</Dt><Dd>Cascading Style Sheets</Dd></Dl>
 * ```
 */
export const Dl = React.forwardRef<
  HTMLDListElement,
  JSX.IntrinsicElements['dl']
>((props, ref) => {
  return <dl ref={ref} {...props} />;
});

Dl.displayName = 'Dl';
