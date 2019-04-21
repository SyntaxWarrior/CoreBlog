export class BlogPost {
    Id: number;
    publishDate: Date;
    editDate: Date;
    title: string;
    subTitle: string;
    author: string;
    tags: string[];
    except: string;
    content: string;
    constructor(values: any = {}) {
      Object.assign(this, values);
    }
}
