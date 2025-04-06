type ApiResponse<T> = 
    | { status: "success"; data: T }
    | { status: "error"; error: string };

type UnwrapResponse<T> = T extends {status: "success"; data: infer D} ? D : never;

// A should be string
type A = UnwrapResponse<{ status: "success"; data: string }>;
// B should be never
type B = UnwrapResponse<{ status: "error"; data: string }>;