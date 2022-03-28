export class AboutUsService {
  content: string = 'WE ARE VENOM :D';

  getContent() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }
}
