let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*https://chat.whatsapp.com/K5db0TKGOBkJWt5TuVND8l*

*2_وتستطيع ان تتابع البوت على الانستا:-*
*https://www.instagram.com/toxic______samir?igsh=cmZvaHM2bWs5cHpt* 

*3_وتستطيع دعم المطور من هنا:-*
*https://Solo.to/boss51-51*

*وشكرا لكم يا افضل مستخدمين 👾👑*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
