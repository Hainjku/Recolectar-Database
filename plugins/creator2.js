let handler = async m => m.reply(`
🚫 *IMPORTANTE*

La única forma de contacto con el dueño es por instagram:
(https://instagram.com/gastonvainstein)

Este es su número secundario, y mayormente no lo usa y no responde mensajes. Por favor no insistir y no escribir por cosas no importantes

Por último mencionar que tanto el Bot como su dueño no están involucrados en ningún tema de *LEGIONES* ni *EXPLOTACIÓN INFANTÍL* se agradece evitar atacar al bot o el contacto secundario del dueño sin motivos. Tenemos mucha gente trabajando y moderando el bot para evitar que el mismo se agregue a grupos pornográficos o de legiones para evitar problemas!

_Recientemente hemos recibidos ataques sin motivos, esto da a entender que hay personas utilizando dichos conocimientos para arremeter contra gente inocente_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(creator|dueño|owner)$/i
handler.register = true

module.exports = handler
