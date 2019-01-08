export class MenuItem {
  title: string
  icon: string
  url: string
  children: MenuItem[]

  constructor(title: string, icon: string, url: string, children: MenuItem[]) {
    this.title = title
    this.icon = icon
    this.url = url
    this.children = children
  }
}
