let handler = async m => m.reply(`
✳ 𝙷𝚊𝚒𝚗𝚓𝚔𝚞 ᴮᴼᵀ | *STAFF*

Comandos del STAFF, abusar de estos se te removerá el rango!

- /addpremium @user
*Dar premium a un usuario* (Solo dar premium con autorización del superior)

- /mapprove link
*Aprobar una solicitud de grupo*

- /mcf confesión
*Aprobar una confesión, debes pegar el texto*

- /msm número|texto
*Enviar un aviso o comunicado a un usuario como de baneo*

- /msupp número|texto
*Responder una duda enviada por soporte*

- /mban número
*Banear un usuario(HAZLO AL PRIVADO EN EL BOT Y ENVÍA CAP AL GRUPO O UN AVISO DE QUE LO BANEARÁS), luego de hacerlo le comunicas con /msm*

- /munban número
*Desbanear un usuario*

- /leave
*Sacar el bot de un grupo, debes unirte primero y escribir el comando*

- /bcgc
*Dar un anuncio de staff, usen el ejemplo de la descripción del grupo!*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(moderador)$/i
handler.mods = true
handler.register = true

module.exports = handler
