export class BlogBaseInfo {
    postsPerPage: number;
    posts: number[];
    constructor(values: any = {}) {
      Object.assign(this, values);
    }
  }
