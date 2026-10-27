//#region internal/style/initials.ts
/**
* 从名字取首字母：单个词取首字，多个词取首尾两词的首字，统一大写。
*
* @example
* getInitials('Ada Lovelace'); // 'AL'
* getInitials('  ada  '); // 'A'
* getInitials(''); // ''
*/
function getInitials(name) {
	const words = name.trim().split(/\s+/).filter(Boolean);
	const first = words[0];
	if (!first) return "";
	const last = words.length > 1 ? words[words.length - 1] : "";
	return (Array.from(first)[0] + (Array.from(last)[0] ?? "")).toUpperCase();
}
//#endregion
export { getInitials };

//# sourceMappingURL=initials.js.map