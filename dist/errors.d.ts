export declare enum HttpStatus {
    Success = 200,
    Unauthorized = 401,
    InternalError = 500
}
export declare class HttpError extends Error {
    code: HttpStatus;
    constructor(code: HttpStatus, message: string);
}
