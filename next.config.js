/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'graph.facebook.com'
    ]
  }
}

module.exports = nextConfig
