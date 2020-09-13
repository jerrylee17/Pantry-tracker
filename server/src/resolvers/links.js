const links = [
    {
        id: '0',
        url: 'https://www.google.com',
        description: 'search anything you want'
    },
    {
        id: '1',
        url: 'https://www.facebook.com',
        description: 'Stalk your friends online and see how they\'re doing'
    },
    {
        id: '2',
        url: 'https://www.amazon.com',
        description: 'Buy things you don\'t need from online'
    }
]

const linksResolvers = {
    Links : () => links,
}

module.exports = {
    linksResolvers
}
