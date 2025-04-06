type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>;
type B = IsString<number>;

type ButtonLabel<T> = T extends "delete" ? "Remove" : "Submit";

type DeleteLabel = ButtonLabel<"delete">;
type SaveLabel = ButtonLabel<"save">;