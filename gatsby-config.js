module.exports = {
  siteMetadata: {
    title: 'Lenora Porter - Product Designer',
    desc: "A collection of UX design resources from Lenora Porter"
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
            {
                resolve: "gatsby-source-filesystem",
                options: {
                  name: "src",
                  path: `${__dirname}/src/`
                }
            },
            {
                resolve: "gatsby-source-filesystem",
                options: {
                  name: "img",
                  path: `${__dirname}/src/images`
                }
            },
            'gatsby-transformer-remark',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
          ],
}
