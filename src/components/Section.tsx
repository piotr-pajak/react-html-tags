import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<section>` element.
 *
 * @remarks
 * Thematic grouping of content with a heading.
 *
 * - Should typically contain a heading (H1-H6)
 * - Represents a standalone section
 * - Use Article for independent, reusable content
 *
 * **Pro Tips:**
 * - Always include a heading
 * - Use Article for blog posts/news items
 *
 * @example
 * ```tsx
 * <Section><H2>About Us</H2><P>...</P></Section>
 *
 * <Section aria-labelledby="features-heading">...</Section>
 * ```
 */
export const Section = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['section']
>((props, ref) => {
  return <section ref={ref} {...props} />;
});

Section.displayName = 'Section';
