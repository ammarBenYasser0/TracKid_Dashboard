export class User {
  constructor(
    public email: string,
    public userId: number,
    private _accessToken: string
  ) {}

  get accessToken() {
    return this._accessToken;
  }
}
