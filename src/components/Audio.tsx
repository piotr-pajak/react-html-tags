/**
 * A type-safe React wrapper for the HTML `<audio>` element.
 *
 * @remarks
 * Audio player.
 *
 * - Always include controls
 * - Provide fallback content
 *
 * **Pro Tips:**
 * - Add controls for user control
 * - Provide transcript
 *
 * @example
 * ```tsx
 * <Audio controls><Source src="/audio.mp3" />Your browser doesn't support audio</Audio>
 * ```
 */
export const Audio = React.forwardRef<
  HTMLAudioElement,
  JSX.IntrinsicElements['audio']
>((props, ref) => {
  return <audio ref={ref} {...props} />;
});

Audio.displayName = 'Audio';
