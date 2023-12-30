export type JsonType =
  | string
  | number
  | boolean
  | { [x: string]: JsonType }
  | Array<JsonType>;
