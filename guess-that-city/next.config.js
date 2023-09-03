/** @type {import('next').NextConfig} */

// Need to specify domain of where images come from to use built in Image element from Nextjs

const nextConfig = {
    images: {
        domains: ["d13k13wj6adfdf.cloudfront.net"],
      },

}

module.exports = nextConfig
