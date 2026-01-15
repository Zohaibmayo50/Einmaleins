/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/para-estudiantes',
        destination: '/fuer-schueler',
        permanent: true,
      },
      {
        source: '/para-padres',
        destination: '/fuer-eltern',
        permanent: true,
      },
      {
        source: '/para-profesores',
        destination: '/fuer-lehrer',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
