export class BlogPost {
    Id: number;
    publishDate: Date;
    editDate: Date;
    title: string;
    url: string;
    subTitle: string;
    author: string;
    tags: string[];
    score: number;
    except: string;
    content: string;
    constructor(values: any = {}) {
      Object.assign(this, values);
    }
}
