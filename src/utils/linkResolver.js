const linkResolver = (doc) => {
  if (doc.type === 'page') {
    `/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver
