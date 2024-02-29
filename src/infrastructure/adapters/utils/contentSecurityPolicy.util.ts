export const directive = {
  'default-src': ['\'self\''],
  'base-uri': ['\'self\''],
  'child-src': ['\'self\'', 'data:', 'https://res.cloudinary.com'],
  'font-src': ['\'self\'', 'https:', 'data:'],
  'frame-ancestors': ['\'self\''],
  'img-src': ['\'self\'', 'data:', 'https://res.cloudinary.com', 'https://picsum.photos', 'https://fastly.picsum.photos'],
  'script-src': ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\'', 'https://res.cloudinary.com', 'https://cdn.skypack.dev'],
  'script-src-attr': ['\'self\'', '\'unsafe-inline\''],
  'style-src': ['\'self\'', 'https:', '\'unsafe-inline\''],
  'style-src-elem': ['\'self\'', 'https:', '\'unsafe-inline\''],
  'frame-src': ['\'self\'', 'data:', 'https://res.cloudinary.com'],
}
