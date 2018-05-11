module.exports = {
  siteMetadata: {
    title: 'Lenora Porter - Product Designer',
    desc: "A collection of UX design resources from Lenora Porter"
  },
  pathPrefix: "/Portfolio-Blog",
  plugins: [
            {
              resolve: 'gatsby-source-contentful',
              options: {
                spaceId: "dvfdooscfcqf",
                accessToken: "4a5745e169ee8eed664d8bd92c5274d5831533840afe73bd05232723e0f4b8f9"
              }
            },
            'gatsby-plugin-react-helmet',
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
                resolve: "gatsby-source-filesystem",
                options: {
                  name: "img",
                  path: `${__dirname}/static/assets`
                }
            },
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-transformer-remark'
          ],
};

// pathPrefix: "/lenoraporter",
