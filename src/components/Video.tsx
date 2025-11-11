import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<video>` element.
 *
 * @remarks
 * Video player.
 *
 * - Always include controls for accessibility
 * - Provide fallback content for unsupported browsers
 * - Use Source for multiple formats
 *
 * **Pro Tips:**
 * - Add controls attribute
 * - Mute if autoplay
 * - Provide text transcription
 *
 * @example
 * ```tsx
 * <Video controls><Source src="/video.mp4" type="video/mp4" />Your browser doesn't support video</Video>
 *
 * <Video autoPlay muted loop poster="/thumbnail.jpg">...</Video>
 * ```
 */
export const Video = React.forwardRef<
  HTMLVideoElement,
  JSX.IntrinsicElements['video']
>((props, ref) => {
  return <video ref={ref} {...props} />;
});

Video.displayName = 'Video';
