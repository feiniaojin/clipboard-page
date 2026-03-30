/**
 * 主题合并工具
 * 将布局样式和颜色主题合并为完整主题
 */

export function mergeTheme(layout, colorTheme) {
  const { structure, typography, decoration } = layout
  const { palette } = colorTheme

  const replaceColors = (styleString) => {
    if (!styleString) return ''
    return styleString
      .replace(/{primary}/g, palette.primary)
      .replace(/{secondary}/g, palette.secondary)
      .replace(/{text}/g, palette.text)
      .replace(/{text-muted}/g, palette.textMuted)
      .replace(/{card-bg}/g, palette.cardBg)
      .replace(/{card-bg-light}/g, palette.cardBgLight)
      .replace(/{border}/g, palette.border)
      .replace(/{border-light}/g, palette.borderLight)
      .replace(/{bg-gradient}/g, palette.bgGradient)
      .replace(/{blockquote-bg}/g, palette.blockquoteBg)
      .replace(/{card-shadow}/g, palette.cardShadow)
      .replace(/{blockquote-shadow}/g, palette.blockquoteShadow)
      .replace(/{strong-shadow}/g, palette.strongShadow)
      .replace(/{hr-color}/g, palette.hrColor)
      .replace(/{hr-gradient}/g, palette.hrGradient)
      .replace(/{icon-shadow}/g, palette.iconShadow)
      .replace(/{grid-color}/g, palette.gridColor)
      .replace(/{dot-color}/g, palette.dotColor)
      .replace(/{font-family}/g, typography.fontFamily)
  }

  return {
    container: replaceColors(structure.container),
    card: replaceColors(structure.card),
    h1: replaceColors(typography.h1),
    h2: replaceColors(typography.h2),
    h3: replaceColors(typography.h3),
    p: replaceColors(typography.p),
    blockquote: replaceColors(typography.blockquote),
    strong: replaceColors(typography.strong),
    em: replaceColors(typography.em),
    hr: replaceColors(typography.hr),
    icon: {
      h1: decoration.h1,
      color: palette.primary,
      textShadow: palette.iconShadow
    }
  }
}
