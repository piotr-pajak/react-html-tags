import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<template>` element.
 *
 * @remarks
 * HTML template - not rendered.
 *
 * **Tip:** Content not rendered until cloned via JS
 *
 * @example
 * ```tsx
 * <Template><Div>Template content</Div></Template>
 * ```
 */
export const Template = React.forwardRef<
  HTMLTemplateElement,
  JSX.IntrinsicElements['template']
>((props, ref) => {
  return <template ref={ref} {...props} />;
});

Template.displayName = 'Template';
