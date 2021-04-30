const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async(m, { conn, text, participants, isMods }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!who) throw '🛠 *MODERADOR*\n\nTagea el que lo recibirá!'
  if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.mods.push(user)
    m.reply(`🛠 *MODERADOR*\n\n*Usuario:* Agregado ✅\n*Número:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira:* Prox. Reinicio\n\n_*Gracias por agregar un Moderador!*_`)
   } else m.reply('🛠 *MODERADOR*\n\nAquí hay un número de host...')
  }
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^addmods$/i
handler.mods = false
handler.admin = true
handler.register = true

module.exports = handler
