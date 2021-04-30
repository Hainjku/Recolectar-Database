const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async(m, { conn, text, participants, isPrems }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!who) throw '👑 *PREMIUM*\n\nTagea el que lo recibirá!'
  if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.prems.push(user)
    m.reply(`👑 *PREMIUM*\n\n*Usuario:* Agregado ✅\n*Número:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira:* 7 Días\n\n_*Gracias por agregar un Premium!*_`)
   } else m.reply('👑 *PREMIUM*\n\nAquí hay un número de host...')
  }
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^addpremium$/i
handler.mods = true
handler.register = true

module.exports = handler
