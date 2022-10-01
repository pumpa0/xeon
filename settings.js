
const fs = require('fs')
const chalk = import('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.xteam = 'RiyGanz'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4")//gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6285731855426'] //ur owner number
global.ownername = "Han" //ur owner name
global.ytname = "hanbotz.xyz" //ur yt chanel name
global.socialm = "@terserah_bomat" //ur github or insta name
global.location = "Mars" //ur location

//bot bomdy 
global.footer = '© HanBotz'
global.owner = ['6285731855426']
global.coowner = ['628812412514','628999339090']
global.ownertag = '6285731855426' //ur tag number
global.botname = 'HanBotz' //ur bot name
global.linkz = "https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ" //your theme url which will be displayed on whatsapp
global.websitex = "https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ" //ur website to be displayed
global.botscript = '🐦' //script link
global.reactmoji = "🤖" //ur menu react emoji
global.themeemoji = "•" //ur theme emoji
global.packname = "WhatsApp Bot" //ur sticker watermark packname
global.author = "IG: @terserah_bomat" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/banner.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/banner.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/banner.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/banner.jpg") //ur thumb pic

//damtabase
global.premium = ['6285731855426'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','#']
global.sp = '•'
global.mess = {
    success: 'Done',
    admin: '_Fitur Ini Hanya Untuk Admin!_',
    botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
    owner: '_Fitur Ini Hanya Untuk Owner!_',
    group: '_Fitur Hanya Digunakan Untuk Grup!_',
    privatee: '_Fitur Hanya Digunakan Untuk Obrolan Pribadi!_',
    bot: '_Fitur Ini Hanya Untuk Bot_',
    wait: '_proses..._',
    linkm: '_Mana linknya?_',
    error: '_Error!!_',
    endLimit: '_Limit harian kamu telah habis_',
    ban: '_Anda telah diban oleh owner!_',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: '_Bot telah diban di grup ini_',
    premm: '_Fitur Ini Hanya Untuk Premium_'
}
    global.limitawal = {
    free: 15,
    game: 12,
    premium: 1000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/banner.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
