export interface AuthUser{
    username: string;
    token: string;
    photoUrl: string;
    knownAs: string;
    gender: string
    roles: string []
}

export interface LoginRequest{
    username: string;
    password: string;
}

export interface AuthError{
    code: string,
    message: string
}
