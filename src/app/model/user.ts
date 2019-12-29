export interface User {
    uid: string;
    email: string;
    roles: Roles;
}

export interface Roles {
    student?: boolean;
    company?: boolean;
    admin?: boolean;
    university?: boolean;
 }