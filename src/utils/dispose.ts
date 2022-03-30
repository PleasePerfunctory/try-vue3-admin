// ! 数据处理工具集合

/**
 * 对象扁平化
 * 
*/
type Res = {
  [propName: string]: any
}

export const flatData = (obj: object): object => {
  const res: Res = {}
  const data: Array<[string, any]> = Object.entries(obj)
  const is = (type: 'Array' | 'Object') => (data: any) => Object.prototype.toString.call(data) == `[object ${type}]`
  const isArray = is('Array')
  const isObject = is('Object')
  while (data.length > 0) {
    const [k, v] = data[0]
    data.shift()
    switch (true) {
      case isArray(v):
        data.unshift(...v.map((item: any, i: number): Array<[string, any]> => [`${k}[${i}]`, item]))
        break
      case isObject(v):
        
        data.unshift(...Object.entries<any>(v).map(([kk, v]): [string, any] => [`${k}.${kk}`, v])) 
        break
      default:
        res[k] = v
        break
    }
  }
  return res
}