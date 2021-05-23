module.exports = {
	title: 'hato鯖公式 Wiki',
	description: 'hato鯖公式のWiki',
	lang: 'ja-JP',
	head: [
		[ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-6SGQWYJL40', async: true } ],
		[ 'script', {}, `window.GA_MEASUREMENT_ID = 'G-6SGQWYJL40';window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());`]
	],
	themeConfig: {
		repo: 'hatosaba/wiki',
		docsDir: 'docs',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: 'このページをGitHubで編集する',
		lastUpdated: '最終更新日',
		nav: [
			{ text: 'TOP!', link: '/' },
			{ text: 'プライバシーポリシー', link: 'pages/privacy-policy' },
			{ text: 'お初さんはこちら', link: 'pages/082-guide' }
		]
	},
	markdown: {
		config: (md) => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	}
}
