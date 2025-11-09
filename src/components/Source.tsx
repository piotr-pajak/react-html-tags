/**
 * A type-safe React wrapper for the HTML `<source>` element.
 *
 * @remarks
 * Media resource for Picture, Video, Audio.
 *
 * **Tip:** Provide multiple formats for fallback
 *
 * @example
 * ```tsx
 * <Source src="/video.mp4" type="video/mp4" />
 * ```
 */
export const Source = React.forwardRef<
  HTMLSourceElement,
  JSX.IntrinsicElements['source']
>((props, ref) => {
  return <source ref={ref} {...props} />;
});

Source.displayName = 'Source';
