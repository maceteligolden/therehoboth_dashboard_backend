import Base from "./base.model";

export default interface Blog extends Base {
    thumbnail?: string;
    title?: string;
    content?: string;
    excerpt?: string;
}