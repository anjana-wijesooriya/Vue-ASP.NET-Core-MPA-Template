export class NotificationModel {
  type: string
  imgPath: string
  title: string
  user: string
  time: string

  constructor(
    type: string,
    imgPath: string,
    title: string,
    user: string,
    time: string
  ) {
    this.type = type
    this.imgPath = imgPath
    this.title = title
    this.user = user
    this.time = time
  }
}
