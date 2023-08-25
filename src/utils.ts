type DataObject = Record<string, any>

export const flattenObject = (dataObject: DataObject): DataObject => {
  const result: DataObject = {}

  const helper = (obj: DataObject, prefix: string = ''): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        helper(value, `${prefix}${key}.`)
      } else {
        result[`${prefix}${key}`] = value
      }
    })
  }

  helper(dataObject)
  return result
}
