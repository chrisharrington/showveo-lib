export declare enum ErrorCode {
    Unauthorized = 401,
    InternalError = 500
}
export declare class HttpError extends Error {
    code: ErrorCode;
    constructor(code: ErrorCode, message: string);
}
