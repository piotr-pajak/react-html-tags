/**
 * A type-safe React wrapper for the HTML `<hgroup>` element.
 *
 * @remarks
 * Heading group.
 *
 * **Tip:** Group heading with subtitle
 *
 * @example
 * ```tsx
 * <Hgroup><H1>Title</H1><P>Subtitle</P></Hgroup>
 * ```
 */
export const Hgroup = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['hgroup']
>((props, ref) => {
  return <hgroup ref={ref} {...props} />;
});

Hgroup.displayName = 'Hgroup';
