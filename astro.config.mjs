import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'http://fluentcrm.top',
	integrations: [
		starlight({
			title: 'FluentCRM Docs',
			favicon: './src/assets/favicon/favicon.ico',
			// social: {
			// 	github: 'https://github.com/shuvoaftab/fluentcrm-dev-docs',
			// },
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Get Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start', slug: 'index/start' },
					],
				},
				{
					label: 'Settings',
					autogenerate: { directory: 'settings' },
				},
				{
					label: 'Contacts',
					autogenerate: { directory: 'contacts' },
				},
				{
					label: 'Company',
					autogenerate: { directory: 'company' },
				},
				{
					label: 'Emails',
					autogenerate: { directory: 'emails' },
				},
				{
					label: 'Automation',
					autogenerate: { directory: 'automation' },
				},
				{
					label: 'Miscellaneous',
					autogenerate: { directory: 'misc' },
				},
				{
					label: 'Glossary',
					autogenerate: { directory: 'glossary' },
				},
			],
		}),
	],
});
