export type ParamType<T> = T extends (...args: infer P) => any ? P : T
