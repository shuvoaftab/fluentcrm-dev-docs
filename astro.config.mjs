import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FluentCRM Docs',
			social: {
				github: 'https://github.com/shuvoaftab/fluentcrm-dev-docs',
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start', slug: 'guides/start' },
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
					label: 'Emails',
					autogenerate: { directory: 'emails' },
				},
				{
					label: 'Automation',
					autogenerate: { directory: 'automation' },
				},
				{
					label: 'Glossary',
					autogenerate: { directory: 'glossary' },
				},
			],
		}),
	],
});
