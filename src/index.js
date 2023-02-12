module.exports = function check(str, bracketsConfig) {
  let buffer = str
  do{
  buffer = str
  for(let config of bracketsConfig){
    str=str.replaceAll(config.join(''),'')
  }} while(buffer.length>str.length) 
  return (str.length==0 ) ? true : false
}
