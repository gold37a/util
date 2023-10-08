import { browser } from "$app/environment";

export const download_blob = (blob: Blob, name: string) => {
    if (!browser) throw `not in the browser rn` // TODO-error
	const a = document.createElement('a');
	a.href = window.URL.createObjectURL(blob);
	a.download = name;
	a.click();
};
