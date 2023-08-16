import Base from "./base.model";

export default interface User extends Base {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
}