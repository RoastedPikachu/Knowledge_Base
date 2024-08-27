import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/mdx-page/',
                destination: '/',
                permanent: true,
            },
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({

})

export default withMDX(nextConfig);
