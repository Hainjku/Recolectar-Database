const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `â³ ð·ðððððð á´®á´¼áµ | *Rá´É¢Éªsá´Êá´*\n\nYa estÃ¡s registrado\nQuiere volver a registrarse? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `â³ ð·ðððððð á´®á´¼áµ | *Rá´É¢Éªsá´Êá´*\n\nFormato incorrecto\n*${usedPrefix}register <nombre>.edad>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'â³ ð·ðððððð á´®á´¼áµ | *Rá´É¢Éªsá´Êá´*\n\nEl nombre no puede estar vacÃ­o (Alphanumerico)'
  if (!age) throw 'â³ ð·ðððððð á´®á´¼áµ | *Rá´É¢Éªsá´Êá´*\n\nLa edad no puede estar vacÃ­a (NÃºmeros)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Â¡Registro exitoso! â

ââââââ Rá´É¢Éªsá´Êá´ ââââââ
â£â± Ná´á´ÊÊá´: ${name}
â£â± Eá´á´á´: ${age} á´É´Ìá´s
â£â± SN: ${sn}
â£ââââââââââââ
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
