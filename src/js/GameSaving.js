export default class GameSaving {
  constructor(object) {
    this.id = object.id;
    this.created = object.created;
    this.userInfo = {
      id: object.userInfo.id,
      name: object.userInfo.name,
      level: object.userInfo.level,
      points: object.userInfo.points,
    };
  }
}
