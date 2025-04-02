import { Role } from "./Role.model";

export interface User {
    userId: number;
    email: string;
    password: string;
    userStatus: boolean;
    roles: Role[];
}