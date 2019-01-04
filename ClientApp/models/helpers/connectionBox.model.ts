export class ConnectionBoxModel {
  name: string
  imgPath: string
  title: string
  time: string

  constructor(name: string, imgPath: string, title: string, time: string) {
    this.name = name
    this.imgPath = imgPath
    this.title = title
    this.time = time
  }
}
