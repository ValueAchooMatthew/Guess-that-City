/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        // Adding so Nextjs Image component can be used to communciate with hostname to optimize image
        remotePatterns: [
            {hostname:"etimg.etb2bimg.com"}, 
            {hostname:"media.cnn.com"}, 
            {hostname:"img.monocle.com"}, 
            {hostname:"upload.wikimedia.org"},
            {hostname: "d13k13wj6adfdf.cloudfront.net"}
        ],
    }

}

module.exports = nextConfig
