type ApiResponse<T> = 
    | { status: "success"; data: T }
    | { status: "error"; error: string };

type UnwrapResponse = //;

// A should be string
type A = UnwrapResponse<{ status: "success"; data: string }>;
// B should be never
type B = UnwrapResponse<{ status: "error"; data: string }>;