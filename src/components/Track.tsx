/**
 * A type-safe React wrapper for the HTML `<track>` element.
 *
 * @remarks
 * Text track for Video/Audio.
 *
 * **Tip:** Use for captions, subtitles
 *
 * @example
 * ```tsx
 * <Track kind="subtitles" src="/subs.vtt" srclang="en" />
 * ```
 */
export const Track = React.forwardRef<
  HTMLTrackElement,
  JSX.IntrinsicElements['track']
>((props, ref) => {
  return <track ref={ref} {...props} />;
});

Track.displayName = 'Track';
