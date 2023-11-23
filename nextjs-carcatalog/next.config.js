/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"] //Allow the external API url in NextJs for images
    }
}

module.exports = nextConfig
