import './style.css'
import { layoutConfigs, layoutOptions } from './layouts.js'
import { colorConfigs, colorOptions } from './colors.js'
import { mergeTheme } from './themeMerger.js'
import { parseMarkdownAndApplyStyle, extractPlainText } from './markdownProcessor.js'

// === 状态 ===
let currentTab = 'input'
let inputText = ''
let selectedLayout = 'shulang'
let selectedColor = 'tech-blue'
let outputHtml = ''

// === DOM 引用 ===
const app = document.getElementById('app')

// === 渲染 ===
function render() {
  app.innerHTML = `
    <div class="nav-bar">
      <div class="nav-back" id="navBackBtn">&lt;</div>
      <div class="nav-title">一键排版</div>
    </div>
    <div class="tabs">
      <div class="tab-item ${currentTab === 'input' ? 'active' : ''}" data-tab="input">原文</div>
      <div class="tab-item ${currentTab === 'preview' ? 'active' : ''}" data-tab="preview">排版预览</div>
    </div>
    <div id="tab-input" class="content ${currentTab === 'input' ? '' : 'hidden'}">
      ${renderInputTab()}
    </div>
    <div id="tab-preview" class="content ${currentTab === 'preview' ? '' : 'hidden'}">
      ${renderPreviewTab()}
    </div>
  `
  bindEvents()
}

function renderInputTab() {
  const layoutHtml = layoutOptions.map(opt =>
    `<div class="layout-option ${selectedLayout === opt.value ? 'active' : ''}" data-layout="${opt.value}">${opt.label}</div>`
  ).join('')

  const colorHtml = colorOptions.map(opt =>
    `<div class="color-option ${selectedColor === opt.value ? 'active' : ''}" data-color="${opt.value}" style="background: ${opt.preview}"><span class="color-name">${opt.label}</span></div>`
  ).join('')

  return `
    <div class="input-card">
      <div class="card-label">请输入或粘贴需要排版的内容</div>
      <textarea class="input-textarea" id="markdownInput" placeholder="支持 Markdown、纯文本..." maxlength="10000">${inputText}</textarea>
      <div class="char-count">${inputText.length}/10000</div>
    </div>
    <div class="style-selector">
      <span class="selector-title">布局样式</span>
      <div class="layout-options">${layoutHtml}</div>
      <span class="selector-title">主题颜色</span>
      <div class="color-options">${colorHtml}</div>
    </div>
    <div class="submit-section">
      <button class="submit-button" id="convertBtn" ${!inputText.trim() ? 'disabled' : ''}>开始排版</button>
    </div>
  `
}

function renderPreviewTab() {
  if (!outputHtml) {
    return '<div class="preview-card"><p style="color: #999; text-align: center; padding: 60px 0;">暂无排版内容，请先在"原文"中输入内容并点击"开始排版"</p></div>'
  }
  return `
    <div class="preview-card">${outputHtml}</div>
    <div class="action-buttons">
      <button class="action-button primary" id="copyRichBtn">复制排版</button>
      <button class="action-button secondary" id="copyHtmlBtn">复制 HTML 代码</button>
      <button class="action-button secondary" id="backBtn">返回编辑</button>
    </div>
  `
}

function showSuccess() {
  const overlay = document.createElement('div')
  overlay.className = 'success-overlay'
  overlay.innerHTML = `
    <div class="success-content">
      <div class="success-icon">&#10003;</div>
      <h2 class="success-title">复制成功！</h2>
      <p class="success-desc">现在可以在公众号编辑器中粘贴（Ctrl+V）</p>
      <button class="back-button" id="backToMiniBtn">返回小程序</button>
    </div>
  `
  document.body.appendChild(overlay)
  document.getElementById('backToMiniBtn').addEventListener('click', () => {
    history.back()
  })
}

// === 事件绑定 ===
function bindEvents() {
  // Tab 切换
  document.querySelectorAll('.tab-item').forEach(el => {
    el.addEventListener('click', () => {
      currentTab = el.dataset.tab
      render()
    })
  })

  // 导航栏返回
  const navBack = document.getElementById('navBackBtn')
  if (navBack) {
    navBack.addEventListener('click', () => history.back())
  }

  // 输入框 — 只更新局部，不重新渲染整个页面避免失焦
  const textarea = document.getElementById('markdownInput')
  if (textarea) {
    textarea.addEventListener('input', (e) => {
      inputText = e.target.value
      const count = document.querySelector('.char-count')
      const btn = document.getElementById('convertBtn')
      if (count) count.textContent = `${inputText.length}/10000`
      if (btn) btn.disabled = !inputText.trim()
    })
  }

  // 布局选择
  document.querySelectorAll('.layout-option').forEach(el => {
    el.addEventListener('click', () => {
      selectedLayout = el.dataset.layout
      render()
    })
  })

  // 配色选择
  document.querySelectorAll('.color-option').forEach(el => {
    el.addEventListener('click', () => {
      selectedColor = el.dataset.color
      render()
    })
  })

  // 开始排版
  const convertBtn = document.getElementById('convertBtn')
  if (convertBtn) {
    convertBtn.addEventListener('click', handleConvert)
  }

  // 复制排版（富文本）
  const copyRichBtn = document.getElementById('copyRichBtn')
  if (copyRichBtn) {
    copyRichBtn.addEventListener('click', copyRichText)
  }

  // 复制 HTML 代码
  const copyHtmlBtn = document.getElementById('copyHtmlBtn')
  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', copyHtml)
  }

  // 返回编辑
  const backBtn = document.getElementById('backBtn')
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      currentTab = 'input'
      render()
    })
  }
}

// === 业务逻辑 ===
function handleConvert() {
  if (!inputText.trim()) return

  const layoutConfig = layoutConfigs[selectedLayout]
  const colorConfig = colorConfigs[selectedColor]
  const theme = mergeTheme(layoutConfig, colorConfig)
  outputHtml = parseMarkdownAndApplyStyle(inputText, theme)
  currentTab = 'preview'
  render()
}

async function copyRichText() {
  if (!outputHtml) return

  try {
    const plainText = extractPlainText(outputHtml)
    const clipboardItem = new ClipboardItem({
      'text/html': new Blob([outputHtml], { type: 'text/html' }),
      'text/plain': new Blob([plainText], { type: 'text/plain' })
    })
    await navigator.clipboard.write([clipboardItem])
    showSuccess()
  } catch (err) {
    // Fallback: execCommand
    try {
      const container = document.createElement('div')
      container.innerHTML = outputHtml
      document.body.appendChild(container)
      const range = document.createRange()
      range.selectNodeContents(container)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      document.body.removeChild(container)
      selection.removeAllRanges()
      showSuccess()
    } catch (fallbackErr) {
      alert('复制失败: ' + fallbackErr.message)
    }
  }
}

async function copyHtml() {
  if (!outputHtml) return
  try {
    await navigator.clipboard.writeText(outputHtml)
    showSuccess()
  } catch (err) {
    alert('复制失败: ' + err.message)
  }
}

// === 启动 ===
render()
