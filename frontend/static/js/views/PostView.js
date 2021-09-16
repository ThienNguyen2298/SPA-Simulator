import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Post View");
  }

  async getHtml() {
    return `
      <h1>Post View</h1>
      <p>
        Your are viewing the post view ${this.params.id}!
      </p>
    `;
  }
}
