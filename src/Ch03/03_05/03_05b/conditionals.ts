type IsArray<T> = T extends any[] ? "Yes" : "No";

type A = IsArray<string[]>;
type B = IsArray<number>;

type ElementType<T> = T extends (infer U)[] ? U : T;

type C = ElementType<string[]>;
type D = ElementType<number[]>;
type E = ElementType<boolean>;