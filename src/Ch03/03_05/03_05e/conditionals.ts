type UnpackArray<T> = T extends (infer U)[] ? U : T;

type A = UnpackArray<string[]>;
type B = UnpackArray<number>;

type UnwrapPromise<T> = T extends (infer U) ? U : T;

type C = UnwrapPromise<Promise<string>>;
type D = UnwrapPromise<boolean>;

type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;

type E = ReturnType<() => number>;
type F = ReturnType<(x:string) => void>;