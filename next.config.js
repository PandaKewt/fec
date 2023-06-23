/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rzhxfwfoyybqlyiflmmb.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
