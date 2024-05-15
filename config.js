import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201024480189', '🌩️ ẉa.me//𝐵𝛩𝑺𝑺‖.peị!‽ 👑', true], ['201024480189'], [201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201024480189']
global.suittag = ['201024480189']
global.mods = []
global.prems = []

global.packname = '『 +201012531172 』'
global.author = '『 بـــاروتــــو بــ☠️ـوت 』'
global.wm = '『بـــاروتــــو بــ🐍ـؤؤت 』'
global.wm2 = '『 بـــاروتــــو بــ💎ـوت 』'
global.azami = '『بـــاروتــــو بــ💀ـؤؤ 』'
global.cb = '『 بـــاروتــــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© boruto_BOT'
global.devnum = '+201024480189'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
