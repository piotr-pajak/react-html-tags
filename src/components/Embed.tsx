/**
 * A type-safe React wrapper for the HTML `<embed>` element.
 *
 * @remarks
 * External content embedding.
 *
 * **Tip:** Use for plugins, PDFs
 *
 * @example
 * ```tsx
 * <Embed src="/file.pdf" type="application/pdf" />
 * ```
 */
export const Embed = React.forwardRef<
  HTMLEmbedElement,
  JSX.IntrinsicElements['embed']
>((props, ref) => {
  return <embed ref={ref} {...props} />;
});

Embed.displayName = 'Embed';
