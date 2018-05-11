module.exports = {
  siteMetadata: {
    title: 'Lenora Porter - Product Designer',
    desc: "A collection of UX design resources from Lenora Porter"
  },
  pathPrefix: "/Portfolio-Blog",
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
            {
                resolve: 'gatsby-transformer-remark',
                options: {
                  excerpt_separator: `<!-- end -->`
                }
            },
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-transformer-remark',
            'gatsby-plugin-netlify-cms'
          ],
};

// pathPrefix: "/lenoraporter",
