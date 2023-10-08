import type { V } from '$lib/types/index.js';
export const float32_buffer = (arr: V): Buffer => {
	return Buffer.from(new Float32Array(arr).buffer);
};
