/** @type {import('next').NextConfig} */
/** @type {import('webpack').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@acme/ui', 'lodash-es', 'tw-elements'],
    async rewrites() {
        return [
            {
                source: "/art",
                destination: "/admin/index.html"
            }
        ]
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         'window.jQuery': 'jquery',
      })
    );
    return config;
    },
};

export default nextConfig;
