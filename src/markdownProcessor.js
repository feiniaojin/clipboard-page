import { marked } from 'marked'

/**
 * 将 Markdown 转换为带主题样式的 HTML
 * 兼容微信公众号编辑器（只保留安全标签）
 */
export function parseMarkdownAndApplyStyle(markdown, theme) {
  let html = marked(markdown)

  // 1. 处理列表 → 转换为带符号的段落
  const pStyle = `<p style="${theme.p}">`
  html = html.replace(/<ul[^>]*>/gi, pStyle)
  html = html.replace(/<\/ul>/gi, '</p>')
  html = html.replace(/<ol[^>]*>/gi, pStyle)
  html = html.replace(/<\/ol>/gi, '</p>')
  html = html.replace(/<li[^>]*>/gi, '')
  html = html.replace(/<\/li>/gi, '<br/>')

  // 2. 处理引用
  html = html.replace(/<blockquote[^>]*>/gi, `<blockquote style="${theme.blockquote}">`)
  html = html.replace(/<\/blockquote>/gi, '</blockquote>')

  // 3. 处理代码块 → 普通段落
  html = html.replace(/<pre[^>]*><code[^>]*>/gi, pStyle)
  html = html.replace(/<\/code><\/pre>/gi, '</p>')
  html = html.replace(/<code[^>]*>/gi, '')
  html = html.replace(/<\/code>/gi, '')

  // 4. 处理表格 → 删除
  html = html.replace(/<table[^>]*>.*?<\/table>/gis, '')

  // 5. 处理水平线
  html = html.replace(/<hr[^>]*>/gi, `<hr style="${theme.hr}">`)

  // 6. 处理链接 → 纯文本
  html = html.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '$2')

  // 7. 处理图片 → 文本描述
  html = html.replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '[$1]')
  html = html.replace(/<img[^>]*>/gi, '[图片]')

  // 8. 清理多余 <br/>
  html = html.replace(/(<br\/?>){3,}/gi, '<br/><br/>')

  // 9. 标题装饰符号
  if (theme.icon) {
    html = html.replace(/<h1[^>]*>(.*?)<\/h1>/gi, (match, content) => {
      return `<h1 style="${theme.h1}">${theme.icon.h1} ${content}</h1>`
    })
  }

  // 10. 为安全标签添加内联样式
  const styleMap = {
    '<h1>': `<h1 style="${theme.h1}">`,
    '<h2>': `<h2 style="${theme.h2}">`,
    '<h3>': `<h3 style="${theme.h3}">`,
    '<h4>': `<h4 style="${theme.h3}">`,
    '<h5>': `<h5 style="${theme.h3}">`,
    '<h6>': `<h6 style="${theme.h3}">`,
    '<p>': `<p style="${theme.p}">`,
    '<strong>': `<strong style="${theme.strong}">`,
    '<em>': `<em style="${theme.em}">`,
    '<b>': `<strong style="${theme.strong}">`,
    '</b>': '</strong>',
    '<i>': `<em style="${theme.em}">`
  }

  for (const [tag, styledTag] of Object.entries(styleMap)) {
    html = html.replace(new RegExp(tag, 'gi'), styledTag)
  }

  // 11. 安全过滤：只保留白名单标签
  const allowedTags = ['section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'br', 'blockquote', 'hr']
  html = html.replace(/<\/?([a-z][a-z0-9]*)[^>]*>/gi, (match, tag) => {
    const tagName = tag.toLowerCase()
    if (allowedTags.includes(tagName)) {
      return match
    }
    return ''
  })

  // 12. 包装在容器和卡片中
  const finalHtml = `<section style="${theme.container}"><section style="${theme.card}">${html}</section></section>`

  return finalHtml
}

/**
 * 从 HTML 中提取纯文本（用于剪贴板 text/plain）
 */
export function extractPlainText(html) {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  let text = tmp.textContent || tmp.innerText || ''
  text = text.replace(/\s+/g, ' ').replace(/\n\s*\n/g, '\n').trim()
  return text || '内容为空'
}
