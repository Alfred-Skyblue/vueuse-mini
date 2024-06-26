import fg from 'fast-glob'
import * as path from 'node:path'
import * as fs from 'node:fs'
import chokidar from 'chokidar'
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const cwd = path.resolve(__dirname, '../packages')
export function genSidebar() {
  const files = fg
    .sync('./*/**/index.md', { cwd })
    .map((item) => '/' + item.replace(/index\.md$/, ''))

  const sidebar = files.reduce((acc, cur) => {
    const [, module, fnName] = cur.split('/')
    let item = acc.find((item) => item.text === module)
    if (item) {
      item.items.push({ text: fnName, link: cur })
      return acc
    }
    item = {
      text: module,
      items: [{ text: fnName, link: cur }]
    }
    acc.push(item)
    return acc
  }, [])
  const text = JSON.stringify(sidebar, null, 2)

  fs.writeFileSync(path.resolve(cwd, './.vitepress/sidebar.json'), text)
}

genSidebar()

chokidar.watch('./*/**/index.md', { cwd }).on('add', () => {
  genSidebar()
})

chokidar.watch('./*/**/index.md', { cwd }).on('unlink', () => {
  genSidebar()
})
