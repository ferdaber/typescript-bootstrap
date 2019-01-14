const cssProxy = new Proxy(
  {},
  {
    get(_, propertyName) {
      return 'css__' + propertyName
    },
    set() {
      throw new Error('Attempted to modify style created by css!')
    },
  }
)

export function css() {
  return cssProxy
}
