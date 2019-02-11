module.exports = {
    title: 'Support Program',
    description: 'DNIF Platform Support Framework',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            { text: 'Home', link: 'https://dnif.it' },
            { text: 'Docs', link: 'https://dnif.it/docs' },
            { text: 'Admin Guide', link: 'https://dnif.it/resources' },
        ],
        displayAllHeaders: true,
        base: '/docs/',
        sidebar: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'Hello Support',   // required
                path: '/hello-support/',      // optional, which should be a absolute path.
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    'hello-support/open-a-support-ticket'
                ]
            },
            {
                title: 'Coverage',
                path: '/coverage/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'coverage/plans-included-under-support',
                    'coverage/covered-under-support',
                    'coverage/not-covered-under-support'
                ]
            },
            {
                title: 'Processes',
                path: '/processes/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'processes/calling-in',
                    'processes/remote-support'
                ]
            }
            // {
            //     title: 'Group 2',
            //     children: [ /* ... */ ]
            // }
        ]

    }
}