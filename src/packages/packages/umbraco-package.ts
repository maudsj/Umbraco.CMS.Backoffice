export const name = 'Umbraco.Core.PackageManagement';
export const extensions = [
	{
		name: 'Package Management Bundle',
		alias: 'Umb.Bundle.PackageManagement',
		type: 'bundle',
		loader: () => import('./manifests.js'),
	},
];
