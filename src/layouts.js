/**
 * 布局样式配置
 * 5种独立布局：静好、留白、清欢、疏朗、雅韵
 */

export const jinghao = {
  name: 'jinghao',
  label: '静好',
  structure: {
    container: `padding: 60px 24px; background: {bg-gradient}; min-height: 100vh;`,
    card: `padding: 0; background-color: transparent; border: none; border-radius: 0; box-shadow: none; margin-bottom: 60px;`
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: `font-size: 48px; font-weight: 800; color: {primary}; margin: 80px 0 40px; text-align: left; line-height: 1.1; font-family: {font-family}; letter-spacing: -2px; background: linear-gradient(135deg, {primary} 0%, {secondary} 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`,
    h2: `font-size: 36px; font-weight: 700; color: {text}; margin: 56px 0 28px; padding-left: 16px; border-left: 6px solid {primary}; line-height: 1.2; font-family: {font-family}; letter-spacing: -0.8px;`,
    h3: `font-size: 24px; font-weight: 600; color: {primary}; margin: 32px 0 20px; line-height: 1.4; font-family: {font-family}; padding-left: 12px; border-left: 3px solid {border-light};`,
    p: `font-size: 17px; line-height: 1.8; color: {text}; margin-bottom: 24px; text-align: left; letter-spacing: 0; font-family: {font-family};`,
    blockquote: `padding: 24px 0 24px 24px; background-color: transparent; border-left: 4px solid {primary}; box-shadow: none; font-style: normal; margin-bottom: 32px; color: {text-muted}; line-height: 1.8; border-radius: 0; position: relative;`,
    strong: `color: {primary}; font-weight: 700; text-shadow: {strong-shadow};`,
    em: `font-style: italic; color: {text-muted};`,
    hr: `border: none; height: 2px; background: linear-gradient(90deg, {primary}, transparent); margin: 56px 0;`
  },
  decoration: { h1: '' }
}

export const liubai = {
  name: 'liubai',
  label: '留白',
  structure: {
    container: `padding: 60px 20px; background: {bg-gradient}; min-height: 100vh;`,
    card: `padding: 48px; background-color: {card-bg}; border: 1px solid rgba(0,0,0,0.03); border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.02); margin-bottom: 60px;`
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: `font-size: 32px; font-weight: 300; color: {primary}; margin: 48px 0 28px; text-align: center; line-height: 1.3; font-family: {font-family}; letter-spacing: -0.5px;`,
    h2: `font-size: 24px; font-weight: 300; color: {primary}; margin: 40px 0 20px; text-align: center; border: none; padding-bottom: 0; line-height: 1.3; font-family: {font-family}; letter-spacing: -0.3px;`,
    h3: `font-size: 20px; font-weight: 400; color: {primary}; margin: 32px 0 16px; line-height: 1.3; font-family: {font-family}; border: none; padding-left: 0;`,
    p: `font-size: 16px; line-height: 2; color: {text}; margin-bottom: 24px; text-align: justify; letter-spacing: 0; font-family: {font-family};`,
    blockquote: `padding: 20px 0; background-color: transparent; border-left: 2px solid {border-light}; box-shadow: none; font-style: normal; margin-bottom: 24px; color: {text-muted}; line-height: 2; border-radius: 0;`,
    strong: `color: {primary}; font-weight: 500; text-shadow: none;`,
    em: `font-style: italic; color: {text-muted};`,
    hr: `border: none; height: 1px; background: {border}; margin: 48px 0;`
  },
  decoration: { h1: '' }
}

export const qinghuan = {
  name: 'qinghuan',
  label: '清欢',
  structure: {
    container: `padding: 40px 15px; background: {bg-gradient}; min-height: 100vh;`,
    card: `padding: 28px; background-color: {card-bg}; background-image: radial-gradient(circle at 2px 2px, {dot-color} 1.5px, transparent 0); background-size: 24px 24px; border: 1px solid {border}; border-radius: 18px; box-shadow: {card-shadow}; margin-bottom: 40px;`
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: `font-size: 26px; font-weight: 600; color: {primary}; margin: 28px 0 18px; text-align: center; line-height: 1.4; font-family: {font-family}; letter-spacing: 0.5px;`,
    h2: `font-size: 21px; font-weight: 600; color: {primary}; margin: 24px 0 16px; border-bottom: 2px dashed {border-light}; padding-bottom: 10px; line-height: 1.4; font-family: {font-family};`,
    h3: `font-size: 18px; font-weight: 600; color: {primary}; margin: 20px 0 14px; line-height: 1.4; font-family: {font-family}; border-left: 3px solid {border-light}; padding-left: 12px;`,
    p: `font-size: 15px; line-height: 1.9; color: {text}; margin-bottom: 18px; text-align: justify; letter-spacing: 0.3px; font-family: {font-family};`,
    blockquote: `padding: 16px 20px; background-color: {blockquote-bg}; border-left: 4px solid {primary}; box-shadow: {blockquote-shadow}; font-style: italic; margin-bottom: 18px; color: {text}; line-height: 1.9; border-radius: 0 10px 10px 0;`,
    strong: `color: {primary}; font-weight: 600; text-shadow: none;`,
    em: `font-style: italic; color: {text-muted};`,
    hr: `border: none; height: 1px; background: {hr-color}; margin: 32px 0;`
  },
  decoration: { h1: '✿' }
}

export const shulang = {
  name: 'shulang',
  label: '疏朗',
  structure: {
    container: `padding: 40px 15px; background: {bg-gradient}; min-height: 100vh;`,
    card: `padding: 28px; background-color: {card-bg}; background-image: linear-gradient({grid-color} 1px, transparent 1px), linear-gradient(90deg, {grid-color} 1px, transparent 1px); background-size: 20px 20px; border: 1px solid {border}; border-radius: 12px; box-shadow: {card-shadow}; margin-bottom: 40px;`
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: `font-size: 26px; font-weight: 600; color: {primary}; margin: 28px 0 18px; text-align: center; line-height: 1.4; font-family: {font-family}; letter-spacing: 0.5px; border-bottom: 3px solid {border-light}; padding-bottom: 12px; display: inline-block;`,
    h2: `font-size: 21px; font-weight: 600; color: {primary}; margin: 24px 0 16px; border-left: 5px solid {primary}; padding-left: 12px; line-height: 1.4; font-family: {font-family};`,
    h3: `font-size: 18px; font-weight: 600; color: {primary}; margin: 20px 0 14px; line-height: 1.4; font-family: {font-family}; border-left: 3px solid {border-light}; padding-left: 10px;`,
    p: `font-size: 15px; line-height: 1.9; color: {text}; margin-bottom: 18px; text-align: justify; letter-spacing: 0.2px; font-family: {font-family};`,
    blockquote: `padding: 14px 18px; background-color: {blockquote-bg}; border-left: 4px solid {primary}; box-shadow: {blockquote-shadow}; font-style: normal; margin-bottom: 18px; color: {text}; line-height: 1.9; border-radius: 0 8px 8px 0;`,
    strong: `color: {primary}; font-weight: 600; text-shadow: none;`,
    em: `font-style: italic; color: {text-muted};`,
    hr: `border: none; height: 1px; background: {hr-color}; margin: 32px 0;`
  },
  decoration: { h1: '▸' }
}

export const yayun = {
  name: 'yayun',
  label: '雅韵',
  structure: {
    container: `padding: 40px 20px; background: {bg-gradient}; min-height: 100vh;`,
    card: `padding: 36px; background-color: {card-bg}; border: none; border-radius: 20px; box-shadow: {card-shadow}; margin-bottom: 40px; text-align: center;`
  },
  typography: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    h1: `font-size: 32px; font-weight: 400; color: {primary}; margin: 36px 0 24px; text-align: center; line-height: 1.3; font-family: {font-family}; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid {border-light}; padding-bottom: 16px; display: inline-block;`,
    h2: `font-size: 24px; font-weight: 400; color: {text}; margin: 32px 0 20px; text-align: center; border: none; padding: 0; line-height: 1.4; font-family: {font-family}; letter-spacing: 0.5px; position: relative; display: inline-block;`,
    h3: `font-size: 20px; font-weight: 400; color: {text-muted}; margin: 24px 0 16px; line-height: 1.5; font-family: {font-family}; font-style: italic;`,
    p: `font-size: 16px; line-height: 2; color: {text}; margin-bottom: 20px; text-align: center; letter-spacing: 0.3px; font-family: {font-family};`,
    blockquote: `padding: 24px 32px; background: {blockquote-bg}; border: 1px solid {border-light}; box-shadow: none; font-style: italic; margin: 32px auto; color: {text-muted}; line-height: 2; border-radius: 12px; max-width: 80%;`,
    strong: `color: {primary}; font-weight: bold; text-shadow: {strong-shadow};`,
    em: `font-style: italic; color: {text-muted};`,
    hr: `border: none; height: 1px; background: linear-gradient(90deg, transparent, {border-light}, transparent); margin: 40px 0; width: 60%; margin-left: auto; margin-right: auto;`
  },
  decoration: { h1: '' }
}

export const layoutConfigs = { jinghao, liubai, qinghuan, shulang, yayun }

export const layoutOptions = [
  { value: 'jinghao', label: '静好' },
  { value: 'liubai', label: '留白' },
  { value: 'qinghuan', label: '清欢' },
  { value: 'shulang', label: '疏朗' },
  { value: 'yayun', label: '雅韵' }
]
