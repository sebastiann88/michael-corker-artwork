/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@acme/ui', 'lodash-es', 'tw-elements'],
    async rewrites() {
        return [
            {
                source: "/admin",
                destination: "/admin/index.html"
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true,
}

export default nextConfig;
