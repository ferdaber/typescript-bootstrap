type Cx = string | boolean | Record<string, boolean> | CxArray
interface CxArray extends Array<Cx> {}

function cxVal(x: Cx): string {
  let str = '',
    k: string,
    y: string
  if (x) {
    if (typeof x === 'object') {
      for (k in x) {
        if (x[k] && (y = x.push ? cxVal(x[k] as Cx) : k)) {
          str && (str += ' ')
          str += y
        }
      }
    } else {
      str += x
    }
  }
  return str
}

export function cx(...classnames: Cx[]) {
  let str = '',
    i = 0,
    x: Cx
  while (i < classnames.length) {
    if ((x = classnames[i++])) {
      str && (str += ' ')
      str += cxVal(x)
    }
  }
  return str
}
