//#region internal/dom/toast-store.ts
/**
* @example
* const store = createToastStore<{ title: string }>();
* const id = store.add({ title: 'Saved' });
* store.remove(id);
*/
function createToastStore() {
	let items = [];
	let seq = 0;
	const listeners = /* @__PURE__ */ new Set();
	const emit = () => {
		for (const listener of listeners) listener();
	};
	return {
		getSnapshot: () => items,
		subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		add(data) {
			seq += 1;
			const id = `venomous-toast-${seq}`;
			items = [...items, {
				id,
				data
			}];
			emit();
			return id;
		},
		remove(id) {
			const record = items.find((item) => item.id === id);
			if (!record) return void 0;
			items = items.filter((item) => item.id !== id);
			emit();
			return record;
		},
		clear() {
			const removed = items;
			if (removed.length === 0) return removed;
			items = [];
			emit();
			return removed;
		}
	};
}
//#endregion
export { createToastStore };

//# sourceMappingURL=toast-store.js.map