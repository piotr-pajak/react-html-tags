/**
 * A type-safe React wrapper for the HTML `<map>` element.
 *
 * @remarks
 * Image map with clickable areas.
 *
 * **Tip:** Use with img usemap attribute
 *
 * @example
 * ```tsx
 * <Map name="map"><Area /></Map>
 * ```
 */
export const Map = React.forwardRef<
  HTMLMapElement,
  JSX.IntrinsicElements['map']
>((props, ref) => {
  return <map ref={ref} {...props} />;
});

Map.displayName = 'Map';
