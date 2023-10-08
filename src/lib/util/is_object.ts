import type { KeyedObject } from "$lib/types/index.js";

export const is_object = (v: unknown): v is KeyedObject => Object.prototype.toString.call(v) === '[object Object]';
