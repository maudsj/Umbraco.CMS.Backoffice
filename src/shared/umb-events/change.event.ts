export class UmbChangeEvent extends Event {
	public constructor() {
		// mimics the native change event
		super('change', { bubbles: true, composed: false, cancelable: false });
	}
}
