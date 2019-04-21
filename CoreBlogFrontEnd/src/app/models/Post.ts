export class Post {
    id: number;
    title: string;
    constructor(values: any = {}) {
      Object.assign(this, values);
    }
  }
