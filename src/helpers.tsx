export const escapedNewLineToLineBreakTag = (str: string) => {
  return str.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })
}