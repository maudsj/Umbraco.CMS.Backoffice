import type { ManifestModal } from '@umbraco-cms/backoffice/extension-registry';

const modals: Array<ManifestModal> = [
	{
		type: 'modal',
		alias: 'Umb.Modal.LanguagePicker',
		name: 'Language Picker Modal',
		loader: () => import('./language-picker/language-picker-modal.element.js'),
	},
];

export const manifests = [...modals];
