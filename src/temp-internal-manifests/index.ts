import type { ManifestTypes } from '../core/models';
import { manifests as propertyEditorUIManifests } from './property-editor-ui';

// TODO: consider moving weight from meta to the main part of the manifest. We need it for every extension.
export const internalManifests: Array<ManifestTypes & { loader: () => Promise<object | HTMLElement> }> = [
	...propertyEditorUIManifests,
	{
		type: 'section',
		alias: 'Umb.Section.Content',
		name: 'Content Section',
		elementName: 'umb-content-section',
		loader: () => import('../backoffice/sections/content/content-section.element'),
		meta: {
			label: 'Content',
			pathname: 'content', // TODO: how to we want to support pretty urls?
			weight: 50,
		},
	},
	{
		type: 'section',
		alias: 'Umb.Section.Media',
		name: 'Media Section',
		elementName: 'umb-media-section',
		loader: () => import('../backoffice/sections/media/media-section.element'),
		meta: {
			label: 'Media',
			pathname: 'media', // TODO: how to we want to support pretty urls?
			weight: 50,
		},
	},
	{
		type: 'section',
		alias: 'Umb.Section.Members',
		name: 'Members Section',
		elementName: 'umb-section-members',
		loader: () => import('../backoffice/sections/members/section-members.element'),
		meta: {
			label: 'Members',
			pathname: 'members',
			weight: 30,
		},
	},
	{
		type: 'section',
		alias: 'Umb.Section.Settings',
		name: 'Settings Section',
		loader: () => import('../backoffice/sections/settings/settings-section.element'),
		meta: {
			label: 'Settings',
			pathname: 'settings', // TODO: how to we want to support pretty urls?
			weight: 20,
		},
	},
	{
		type: 'section',
		alias: 'Umb.Section.Packages',
		name: 'Packages Section',
		elementName: 'umb-packages-section',
		loader: () => import('../backoffice/sections/packages/packages-section.element'),
		meta: {
			label: 'Packages',
			pathname: 'packages',
			weight: 20,
		},
	},
	{
		type: 'section',
		alias: 'Umb.Section.Users',
		name: 'Users',
		loader: () => import('../backoffice/sections/users/section-users.element'),
		meta: {
			label: 'Users',
			pathname: 'users',
			weight: 20,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.Welcome',
		name: 'Welcome Dashboard',
		elementName: 'umb-dashboard-welcome',
		loader: () => import('../backoffice/dashboards/welcome/dashboard-welcome.element'),
		meta: {
			label: 'Welcome',
			sections: ['Umb.Section.Content'],
			pathname: 'welcome', // TODO: how to we want to support pretty urls?
			weight: 20,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.RedirectManagement',
		name: 'Redirect Management Dashboard',
		elementName: 'umb-dashboard-redirect-management',
		loader: () => import('../backoffice/dashboards/redirect-management/dashboard-redirect-management.element'),
		meta: {
			label: 'Redirect Management',
			sections: ['Umb.Section.Content'],
			pathname: 'redirect-management', // TODO: how to we want to support pretty urls?
			weight: 10,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.SettingsWelcome',
		name: 'Welcome Settings Dashboard',
		elementName: 'umb-dashboard-settings-welcome',
		loader: () => import('../backoffice/dashboards/settings-welcome/dashboard-settings-welcome.element'),
		meta: {
			label: 'Welcome',
			sections: ['Umb.Section.Settings'],
			pathname: 'welcome', // TODO: how to we want to support pretty urls?
			weight: 10,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.Telemetry',
		name: 'Telemetry',
		elementName: 'umb-dashboard-telemetry',
		loader: () => import('../backoffice/dashboards/telemetry/dashboard-telemetry.element'),
		meta: {
			label: 'Telemetry Data',
			sections: ['Umb.Section.Settings'],
			pathname: 'telemetry', // TODO: how do we want to support pretty urls?
			weight: 0,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.ExamineManagement',
		name: 'Examine Management Dashboard',
		elementName: 'umb-dashboard-examine-management',
		loader: () => import('../backoffice/dashboards/examine-management/dashboard-examine-management.element'),
		meta: {
			label: 'Examine Management',
			sections: ['Umb.Section.Settings'],
			pathname: 'examine-management', // TODO: how to we want to support pretty urls?
			weight: 10,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.ModelsBuilder',
		name: 'Models Builder Dashboard',
		elementName: 'umb-dashboard-models-builder',
		loader: () => import('../backoffice/dashboards/models-builder/dashboard-models-builder.element'),
		meta: {
			label: 'Models Builder',
			sections: ['Umb.Section.Settings'],
			pathname: 'models-builder', // TODO: how to we want to support pretty urls?
			weight: 10,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.PublishedStatus',
		name: 'Published Status Dashboard',
		elementName: 'umb-dashboard-published-status',
		loader: () => import('../backoffice/dashboards/published-status/dashboard-published-status.element'),
		meta: {
			label: 'Published Status',
			sections: ['Umb.Section.Settings'],
			pathname: 'published-status', // TODO: how to we want to support pretty urls?
			weight: 9,
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.MediaManagement',
		name: 'Media Dashboard',
		elementName: 'umb-dashboard-media-management',
		loader: () => import('../backoffice/dashboards/media-management/dashboard-media-management.element'),
		meta: {
			label: 'Media',
			sections: ['Umb.Section.Media'],
			pathname: 'media-management', // TODO: how to we want to support pretty urls?
			weight: 10,
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.EditorView.Content.Edit',
		name: 'Content Editor Edit View',
		elementName: 'umb-editor-view-node-edit',
		loader: () => import('../backoffice/editors/shared/node/views/edit/editor-view-node-edit.element'),
		meta: {
			// TODO: how do we want to filter where editor views are shown? https://our.umbraco.com/documentation/extending/Content-Apps/#setting-up-the-plugin
			// this is a temp solution
			editors: ['Umb.Editor.Document', 'Umb.Editor.Media'],
			label: 'Info',
			pathname: 'content',
			weight: 100,
			icon: 'document',
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.EditorView.Content.Info',
		name: 'Content Editor Info View',
		elementName: 'umb-editor-view-node-info',
		loader: () => import('../backoffice/editors/shared/node/views/info/editor-view-node-info.element'),
		meta: {
			// TODO: how do we want to filter where editor views are shown? https://our.umbraco.com/documentation/extending/Content-Apps/#setting-up-the-plugin
			// this is a temp solution
			editors: ['Umb.Editor.Document', 'Umb.Editor.Media'],
			label: 'Info',
			pathname: 'info',
			weight: 90,
			icon: 'info',
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.EditorView.DataType.Edit',
		name: 'Data Type Editor Edit View',
		loader: () => import('../backoffice/editors/data-type/views/edit/editor-view-data-type-edit.element'),
		meta: {
			// TODO: how do we want to filter where editor views are shown? https://our.umbraco.com/documentation/extending/Content-Apps/#setting-up-the-plugin
			// this is a temp solution
			editors: ['Umb.Editor.DataType'],
			label: 'Edit',
			pathname: 'edit',
			weight: 90,
			icon: 'edit',
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.EditorView.DataType.Info',
		name: 'Data Type Editor Info View',
		loader: () => import('../backoffice/editors/data-type/views/info/editor-view-data-type-info.element'),
		meta: {
			// TODO: how do we want to filter where editor views are shown? https://our.umbraco.com/documentation/extending/Content-Apps/#setting-up-the-plugin
			// this is a temp solution
			editors: ['Umb.Editor.DataType'],
			label: 'Info',
			pathname: 'info',
			weight: 90,
			icon: 'info',
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.EditorView.DocumentType.Design',
		name: 'Document Type Editor Design View',
		elementName: 'umb-editor-view-document-type-design',
		loader: () => import('../backoffice/editors/document-type/views/editor-view-document-type-design.element'),
		meta: {
			// TODO: how do we want to filter where editor views are shown? https://our.umbraco.com/documentation/extending/Content-Apps/#setting-up-the-plugin
			// this is a temp solution
			editors: ['Umb.Editor.DocumentType'],
			label: 'Design',
			pathname: 'design',
			weight: 90,
			icon: 'edit',
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.Editor.Packages.Overview',
		name: 'Packages Editor Overview View',
		elementName: 'umb-packages-overview',
		loader: () => import('../backoffice/sections/packages/packages-overview.element'),
		meta: {
			icon: 'document',
			label: 'Packages',
			pathname: 'repo',
			editors: ['Umb.Editor.Packages'],
			weight: 10,
		},
	},
	{
		type: 'editorView',
		alias: 'Umb.Editor.Packages.Installed',
		name: 'Packages Editor Installed View',
		elementName: 'umb-packages-installed',
		loader: () => import('../backoffice/sections/packages/packages-installed.element'),
		meta: {
			icon: 'document',
			label: 'Installed',
			pathname: 'installed',
			editors: ['Umb.Editor.Packages'],
			weight: 0,
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.User',
		name: 'User Editor',
		loader: () => import('../backoffice/editors/user/editor-user.element'),
		meta: {
			entityType: 'user',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.UserGroup',
		name: 'User Group Editor',
		loader: () => import('../backoffice/editors/user-group/editor-user-group.element'),
		meta: {
			entityType: 'userGroup',
		},
	},
	{
		type: 'editorAction',
		alias: 'Umb.EditorAction.User.Save',
		name: 'EditorActionUserSave',
		loader: () => import('../backoffice/editors/user/actions/editor-action-user-save.element'),
		meta: {
			editors: ['Umb.Editor.User'],
		},
	},
	{
		type: 'propertyAction',
		alias: 'Umb.PropertyAction.Copy',
		name: 'Copy Property Action',
		elementName: 'umb-property-action-copy',
		loader: () => import('../backoffice/property-actions/copy/property-action-copy.element'),
		meta: {
			propertyEditors: ['Umb.PropertyEditorUI.TextBox'],
		},
	},
	{
		type: 'propertyAction',
		alias: 'Umb.PropertyAction.Clear',
		name: 'Clear Property Action',
		elementName: 'umb-property-action-clear',
		loader: () => import('../backoffice/property-actions/clear/property-action-clear.element'),
		meta: {
			propertyEditors: ['Umb.PropertyEditorUI.TextBox'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.DataTypes',
		name: 'Data Types Tree',
		loader: () => import('../backoffice/trees/data-types/tree-data-types.element'),
		meta: {
			weight: 1,
			sections: ['Umb.Section.Settings'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.DocumentTypes',
		name: 'Document Types Tree',
		loader: () => import('../backoffice/trees/document-types/tree-document-types.element'),
		meta: {
			weight: 2,
			sections: ['Umb.Section.Settings'],
		},
	},
	{
		type: 'dashboard',
		alias: 'Umb.Dashboard.MembersTest',
		name: 'Members Test',
		elementName: 'umb-dashboard-welcome',
		loader: () => import('../backoffice/dashboards/welcome/dashboard-welcome.element'),
		meta: {
			weight: -10,
			pathname: 'welcome',
			sections: ['Umb.Section.Members'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.Members',
		name: 'Members Tree',
		loader: () => import('../backoffice/trees/members/tree-members.element'),
		meta: {
			weight: 0,
			sections: ['Umb.Section.Members'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.MemberGroups',
		name: 'Members Groups Tree',
		loader: () => import('../backoffice/trees/member-groups/tree-member-groups.element'),
		meta: {
			weight: 1,
			sections: ['Umb.Section.Members'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.Extensions',
		name: 'Extensions Tree',
		loader: () => import('../backoffice/trees/extensions/tree-extensions.element'),
		meta: {
			weight: 3,
			sections: ['Umb.Section.Settings'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.Media',
		name: 'Media Tree',
		loader: () => import('../backoffice/trees/media/tree-media.element'),
		meta: {
			weight: 100,
			sections: ['Umb.Section.Media'],
		},
	},
	{
		type: 'tree',
		alias: 'Umb.Tree.Content',
		name: 'Content Tree',
		loader: () => import('../backoffice/trees/documents/tree-documents.element'),
		meta: {
			weight: 100,
			sections: ['Umb.Section.Content'],
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.Member',
		name: 'Member Editor',
		loader: () => import('../backoffice/editors/member/editor-member.element'),
		meta: {
			entityType: 'member',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.MemberGroup',
		name: 'Member Group Editor',
		loader: () => import('../backoffice/editors/member-group/editor-member-group.element'),
		meta: {
			entityType: 'memberGroup',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.DataType',
		name: 'Data Type Editor',
		loader: () => import('../backoffice/editors/data-type/editor-data-type.element'),
		meta: {
			entityType: 'dataType',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.DocumentType',
		name: 'Document Type Editor',
		loader: () => import('../backoffice/editors/document-type/editor-document-type.element'),
		meta: {
			entityType: 'documentType',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.Extensions',
		name: 'Extensions Editor',
		loader: () => import('../backoffice/editors/extensions/editor-extensions.element'),
		meta: {
			entityType: 'extensionsList',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.Media',
		name: 'Media Editor',
		loader: () => import('../backoffice/editors/media/editor-media.element'),
		meta: {
			entityType: 'media',
		},
	},
	{
		type: 'editor',
		alias: 'Umb.Editor.Document',
		name: 'Content Editor',
		loader: () => import('../backoffice/editors/document/editor-document.element'),
		meta: {
			entityType: 'document',
		},
	},
	{
		type: 'treeItemAction',
		alias: 'Umb.TreeItemAction.Document.Create',
		name: 'Document Tree Item Action Create',
		loader: () => import('../backoffice/trees/documents/actions/action-document-create.element'),
		meta: {
			trees: ['Umb.Tree.Content'],
			label: 'Create',
			icon: 'add',
			weight: 100,
		},
	},
	{
		type: 'treeItemAction',
		alias: 'Umb.TreeItemAction.Document.Delete',
		name: 'Document Tree Item Action Delete',
		loader: () => import('../backoffice/trees/documents/actions/action-document-delete.element'),
		meta: {
			trees: ['Umb.Tree.Content'],
			label: 'Delete',
			icon: 'delete',
			weight: 100,
		},
	},
	{
		type: 'treeItemAction',
		alias: 'Umb.TreeItemAction.Document.Paged',
		name: 'Document Tree Item Action Paged',
		loader: () => import('../backoffice/trees/documents/actions/action-document-paged.element'),
		meta: {
			trees: ['Umb.Tree.Content'],
			label: 'Paged',
			icon: 'favorite',
			weight: 100,
		},
	},
	{
		type: 'treeItemAction',
		alias: 'Umb.TreeItemAction.DataType.Create',
		name: 'Tree Item Action Create',
		loader: () => import('../backoffice/trees/data-types/actions/action-data-type-create.element'),
		meta: {
			trees: ['Umb.Tree.DataTypes'],
			label: 'Create',
			icon: 'add',
			weight: 100,
		},
	},
	{
		type: 'treeItemAction',
		alias: 'Umb.TreeItemAction.DataType.Delete',
		name: 'Tree Item Action Delete',
		loader: () => import('../backoffice/trees/data-types/actions/action-data-type-delete.element'),
		meta: {
			trees: ['Umb.Tree.DataTypes'],
			label: 'Delete',
			icon: 'delete',
			weight: 100,
		},
	},
	{
		type: 'sectionView',
		alias: 'Umb.SectionView.Users',
		name: 'Users Section View',
		loader: () => import('../backoffice/sections/users/views/users/section-view-users.element'),
		meta: {
			sections: ['Umb.Section.Users'],
			label: 'Users',
			pathname: 'users',
			weight: 200,
			icon: 'umb:user',
		},
	},
	{
		type: 'sectionView',
		alias: 'Umb.SectionView.UserGroups',
		name: 'User Groups Section View',
		loader: () => import('../backoffice/sections/users/views/user-groups/section-view-user-groups.element'),
		meta: {
			sections: ['Umb.Section.Users'],
			label: 'User Groups',
			pathname: 'user-groups',
			weight: 100,
			icon: 'umb:users',
		},
	},
];