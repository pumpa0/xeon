require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, Mimetype, MessageType, prepareMessageFromContent } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { XeonBotIncTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
const cerpen = require('./lib/cerpen.js')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { XeonBotIncWiki } = require('./lib/xeonywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
let { wikimedia } = require('./lib/scraper')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let siapakahaku = db.data.game.siapakahaku = []
let asahotak = db.data.game.asahotak = []
let tebakkimia = db.data.game.tebakkimia = []
let susunkata = db.data.game.susunkata = []
let tekateki = db.data.game.tekateki = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakanime = db.data.game.tebakanime = []
let vote = db.data.others.vote = []

module.exports = hanbotz = async (hanbotz, m, chatUpdate, store) => {
    try {
    	const cmd = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    
    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~!%^&.+-,\/\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~!%^&.+-,\/\\©^]/gi) : '.'
    
        body = (m.mtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption.startsWith(prefix) ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption.startsWith(prefix) ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text :  (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hanbotz.decodeJid(hanbotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isCoowner = [botNumber, ...global.coowner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await hanbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : false
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true

if (budy.startsWith('212','92','91')) {
	await hanbotz.updateBlockStatus(m.sender, 'block')
	}

        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let limitGame = isPremium ? global.limitawal.premium : global.limitawal.game
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.game)) user.game = limitGame
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                game: limitGame
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        

	let reply = m.reply
	let replay = m.reply

	
	const redd = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`

	// FAKE TEXT IMG
const textImg = (teks) => {
hanbotz.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: thum}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Hai ${pushname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363023720252331@g.us",
"inviteCode": `https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ`,
"groupName": `𝐇 𝐘 𝐀 𝐊 𝐔 𝐓 𝐀 𝐊 𝐄 💫`, 
"caption":`HanBotz`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
        //Public & Self\\
        if (!hanbotz.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
        	hanbotz.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 23 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        cron.schedule('00 22 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitGame = isPremium ? global.limitawal.premium : global.limitawal.game
            for (let jid of user) global.db.data.users[jid].game = limitGame
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
        if (command) {
        	hanbotz.sendPresenceUpdate('composing', m.chat)
}

//antivirtex
  if (budy.length > 4000) {
  	m.reply(`*Bot Mendeteksi Teks Yang Terlalu Panjang*\n\n=> Melakukan Self Immune`)
      await sleep(1000)
      hanbotz.sendText(m.chat, `ㅤ\n`.repeat(300))
      await sleep(1000)
      hanbotz.sendText(m.chat, `ㅤ\n`.repeat(300))
      if (isBotAdmins) return hanbotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }

if (m.isGroup) {
if (command) {
	const groupMetadataa = await hanbotz.groupMetadata("120363023720252331@g.us").catch(e => {})
	let metadata = await hanbotz.groupMetadata(m.chat)
	const participantss = await groupMetadataa.participants
                let datax = participantss.map(a => a.id).includes(m.sender)
                let dataax = util.format(datax)
                if (dataax === "false") {
                	return await hanbotz.sendMessage(from, {text: `*Untuk Bisa Mengakses HanBotz Di*\n_${metadata.subject}_\n*Silahkan Masuk Terlebih Dahulu ↓↓↓*\n\nhttps://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n`}, {quoted: m})
                }
}
}

if (m.isGroup) {
if (command) {
if (!isBotAdmins) {
	let metadata = await hanbotz.groupMetadata(m.chat)
	return await hanbotz.sendMessage(from, {text: `_Berikan Bot Akses Admin Untuk Bisa Menggunakan Fitur HanBotz Di *${metadata.subject}*!_`}, {quoted: m}) 
        }
        }
        }


//  WAKTU
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
                                        }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon' 
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good night' 
                                         }
                          
if(isPremium){
var sttw = 'Premium User'
                         }
if(!isCreator && !isPremium){
var sttw = 'Free User'
                          }
                          

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
hanbotz.sendMessage(m.chat, { image: { url: emoji.images[dua].url }, caption: `HanBotz` }, { quoted: m })
})
} catch (e) {
reply("Emoji error, masukkan emoji lain\nCATATAN : Cukup masukkan 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hanbotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hanbotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hanbotz.ev.emit('messages.upsert', msg)
        }
	    
	// __________ Family100 __________ //
	if (('family100'+m.chat in _family100)) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `*Jawablah Pertanyaan Berikut* :\n${room.soal}\n\n*Terdapat ${room.jawaban.length} Jawaban* ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
__________________________
${isWin ? `_*Semua Jawaban Terjawab*_ \n` : isSurender ? `_*Menyerah!*_ \n` : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? `\n_Menyerah Hanya Untuk Orang Lemah_🙊` : isWin ? `\nSelamat🥳` : ''}`.trim()
            hanbotz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

// __________ Tebak __________ //
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Lagu\n\nJawaban Benar 🎉`)
                delete tebaklagu[m.sender.split('@')[0]]
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Kuis Matematika\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math < mode >`)
                delete kuismath[m.sender.split('@')[0]]
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Gambar\n\nJawaban Benar 🎉`)
                delete tebakgambar[m.sender.split('@')[0]]
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Kata\n\nJawaban Benar 🎉`)
                delete tebakkata[m.sender.split('@')[0]]
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Cak Lontong\n\nJawaban Benar 🎉\n*${deskripsi}*`)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Kalimat\n\nJawaban Benar 🎉`)
                delete tebakkalimat[m.sender.split('@')[0]]
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Lirik\n\nJawaban Benar 🎉`)
                delete tebaklirik[m.sender.split('@')[0]]
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Tebakan\n\nJawaban Benar 🎉`)
                delete tebaktebakan[m.sender.split('@')[0]]
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = siapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Siapakah Aku\n\nJawaban Benar 🎉`)
                delete siapakahaku[m.sender.split('@')[0]]
                delete siapakahaku[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = asahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Asah Otak\n\nJawaban Benar 🎉`)
                delete asahotak[m.sender.split('@')[0]]
                delete asahotak[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Susun Kata\n\nJawaban Benar 🎉`)
                delete susunkata[m.sender.split('@')[0]]
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Teka Teki\n\nJawaban Benar 🎉`)
                delete tekateki[m.sender.split('@')[0]]
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Unsur\n\nJawaban Benar 🎉`)
                delete tebakkimia[m.sender.split('@')[0]]
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Bendera\n\nJawaban Benar 🎉`)
                delete tebakbendera[m.sender.split('@')[0]]
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
            kuis = true
            jawaban = tebakanime[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Anime\n\nJawaban Benar 🎉`)
                delete tebakanime[m.sender.split('@')[0]]
                delete tebakanime[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        // __________ TicTacToe __________
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hanbotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hanbotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	hanbotz.sendMessage(m.chat, {text: `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, mentions:[roof.p, roof.p2]}, {quoted:m})
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu 
	    hanbotz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing 
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hanbotz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hanbotz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hanbotz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hanbotz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hanbotz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hanbotz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hanbotz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`Dia sedang AFK\n${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')

countDownDate = new Date("2022-08-17").getTime();
var now = new Date().getTime();
var distance = countDownDate + countDownDate + now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
merdekaa = `${dayss} hari ${hourss} jam ${minutess} menit`

       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

switch(command) {

 case 'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return
if (args[0] === "ban") {
banchat.push(from)
var groupe = await hanbotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "unban") {
let off = banchat.indexOf(from)
banchat.splice(off, 1)
} else {
  let buttonsntnsfw = [
  { buttonId: `.${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `.${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await hanbotz.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
  }
  }
  break

case 'ban': {
if (!isCreator) return
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Contoh: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
banUser.push(orgnye)
} else if (args[0] === "del") {
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
} else {
replay("Error")
}
}
break

case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator && !isCoowner) return replay(mess.admin)
hanbotz.groupRevokeInvite(m.chat)
}
break
	    case 'afkxxx': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        	if (!m.isGroup) throw mess.group
        	    if (!text) throw `Contoh: .tictactoe < nama room >`
        let roms = args[1]
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `Kamu masih didalam game\n_.deletetictactoe untuk menghapus sesi_`
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hanbotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hanbotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini\n*${prefix}${command} ${text}*` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': case 'deletetictactoe': case 'deltictactoe': {
            	if (!m.isGroup) throw mess.group
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            	if (!m.isGroup) throw mess.group
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
            if (m.mentionedJid[0] === botNumber) return m.reply(`Tidak bisa bermain dengan Bot !`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @tag`)
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik *terima / tolak*`
            this.suit[id] = {
            chat: await hanbotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hanbotz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            
case 'family100':
m.reply(`_Maintenance_`)
break
	    case 'family100xxx': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hanbotz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted && !text) return replay(`Kirim/Balas Teks Dengan Caption ${prefix + command}`)
            ter = command[1].toLowerCase() 
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case 'tebak': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if (!text) throw `Contoh : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. unsur\n7. tebakan\n8. bendera\n9. siapakahaku`
                if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hanbotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hanbotz.sendText(m.chat, `Judul Lagu Tersebut Adalah?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`)
                    delete tebaklagu[m.sender.split('@')[0]]
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`)
                    delete tebakkata[m.sender.split('@')[0]]
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu?\n*${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`)
                    delete tebaklirik[m.sender.split('@')[0]]
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`)
                    delete tebaktebakan[m.sender.split('@')[0]]
                    delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${siapakahaku[m.sender.split('@')[0]]}`)
                    delete siapakahaku[m.sender.split('@')[0]]
                    delete siapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendImage(m.chat, result.img, `*Bendera Manakah Ini?*\nWaktu : 60s`, m).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`)
                    delete tebakbendera[m.sender.split('@')[0]]
                    delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'unsur') {
                   if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur apa yang dilambangkan dengan *${result.lambang}*\nWaktu : 60s`, m).then(() => {
                    tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.unsur)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`)
                    delete tebakkimia[m.sender.split('@')[0]]
                    delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'anime') {
                    if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!") 
                    let anu = await fetchJson('https://api.akuari.my.id/games/tebakanime')
                    let result = anu.result
                    hanbotz.sendImage(m.chat, result.soal, `*Siapakah Ini?*\nWaktu : 60s`, m).then(() => {
                    tebakanime[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebakanime[m.sender.split('@')[0]]}`)
                    delete tebakanime[m.sender.split('@')[0]]
                    delete tebakanime[m.sender.split('@')[0]]
                    }
                }
            }
            break
case 'caklontong': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Jawablah Pertanyaan Berikut :\n*${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}`)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
                break
case 'asahotak': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${asahotak[m.sender.split('@')[0]]}`)
                    delete asahotak[m.sender.split('@')[0]]
                    delete asahotak[m.sender.split('@')[0]]
                    }
                }
                break
case 'susunkata': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
	if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n${result.tipe}\nWaktu : 60s`, m).then(() => {
                    susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${susunkata[m.sender.split('@')[0]]}`)
                    delete susunkata[m.sender.split('@')[0]]
                    delete susunkata[m.sender.split('@')[0]]
                    }
}
break

            case 'kuismath': case 'math': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
            	if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                
                hanbotz.sendText(m.chat, `Berapa hasil dari: *${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
		
	case 'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
hanbotz.sendMessage(m.chat, reactionMessage)} 
break
case 'rate':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} muka ku`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
hanbotz.sendMessage(from, { text: `Rate : ${q}\nJawab : *${te}%*` }, { quoted: m })
					break
case 'kapan': case 'kapankah':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} aku jadi anime`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','  45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Lagi  Hari','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi'  ,'35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','  75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Lagi  Tahun','5 Tahun Lagi','Besok','Lusa','Setelah Ini']
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
hanbotz.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah bau rambut ${qq} bau aku mau cium wanginya ${qq} AAAAAAAAH ~ Rambutnya  .... aaah aku juga ingin membelai rambutnya ~~ AAAAAH ${qq} pertama kali keluar di anime juga lucu ❤️ ❤️ ❤️ AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUU............  ${qq} AAAAAAAAAAAAAAAAAAAAA ❤️ ❤️ ❤️ apa ?  ${qq} itu tidak nyata ?  Hanya NERAKA katamu?  tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak, tidak!!  SAYA TIDAK PEDULI DENGAN KENYATAANNYA, SAYA TIDAK PEDULI.  ❤️ ❤️ ❤️ ${qq} saya ... ${qq} di laptop mengawasi saya, ${qq} .. kamu percaya padaku ?  aaaaaaaaaaah makasih ${qq} aku gak mau menyerah ${qq} aaaaaah ❤️ ❤️ ❤️ YAAAAAAAAAAAH MASIH PUNYA ${qq} JUGA TAK SAMA AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'cekkematian':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return replay(`Siapa namanya?\nContoh : ${prefix + command} HanBotz`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati di Umur :* ${predea.data.age} Tahun.\n\n_Cepat Bertobatlah, Karena Tidak Ada Yang Tahu Tentang Kematian_`)
              break  
            case 'join': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hanbotz.groupAcceptInvite(result).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
                               case 'leavegc': case 'leavegroup': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                if (!isCreator) return replay(`${mess.owner}`)
                await hanbotz.groupLeave(m.chat).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Contoh : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'remove')
	}
	break
	case 'add': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
	case 'promote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.updateBlockStatus(users, 'block').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.updateBlockStatus(users, 'unblock').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await hanbotz.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescription': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await hanbotz.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                await hanbotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                await hanbotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!q) return reply (`teks nya mana`)
let teks = `╚»˙·٠•● Tag All ●•٠·˙«╝ 
 
Message : *${q ? q : 'admin gabut'}*\n\n${redd}\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                hanbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
            if (!q) return reply (`teks nya mana`)
            hanbotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               
               case 'group': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await hanbotz.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hanbotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hanbotz.sendButtonText(m.chat, buttons, `Group Mode`, hanbotz.user.name, m)

             }
            }
            break
            case 'editinfo': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
             if (args[0] === 'enable'){
                await hanbotz.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'disable'){
                await hanbotz.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '.editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: '.editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hanbotz.sendButtonText(m.chat, buttons, `Mode Edit Info`, hanbotz.user.name, m)

            }
            }
            break
case 'autosticker':
            case 'autostiker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator && !isCoowner) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break

             case 'mute': {
             	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${hanbotz.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${hanbotz.user.name} Has Been Unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: '.mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: '.mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hanbotz.sendButtonText(m.chat, buttons, `Mute Bot`, hanbotz.user.name, m)
                }
             }
             break
case 'setppbot': case 'setbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
await hanbotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': case 'linkgrup': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                let response = await hanbotz.groupInviteCode(m.chat)
                hanbotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await hanbotz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hanbotz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                }
            }
            break

            case 'delete': case 'del': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
                if (!m.quoted) return reply(`reply pesan bot`)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) reply(`pesan tersebut bukan dari bot`)
                hanbotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
      case 'bcgc': case 'bcgroup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nContoh : ${prefix + command} ${global.ownername}`)
let getGroups = await hanbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Join',
url: `${global.websitex}`
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
hanbotz.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nContoh : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Join',
url: `${global.websitex}`
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
hanbotz.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('Broadcast Success')
}
break
 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./media/theme/hanbotz.jpg'), surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
urlButton: {
displayText: 'Join',
url: `${global.websitex}`
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}]
                    let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    hanbotz.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    hanbotz.send5ButImg(i, DGXeon, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    hanbotz.sendMessage(i, {video: buffer, caption: `${DGXeon}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    hanbotz.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case 'bcloc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(`Use ${prefix}bcloc text\n\nContoh : ${prefix + command} attention everybody`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `.${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            hanbotz.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'chatinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
hanbotz.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!!')
let wokwol = await hanbotz.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
hanbotz.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await hanbotz.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
hanbotz.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'listaktif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator && !isCoowner) return replay(`${mess.admin}`)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
hanbotz.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'patrick':
case 'patricksticker': {
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hanbotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1 
}
break
case 'attp': case 'ttp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) reply(`*Contoh : ${prefix + command} hanbotz` )
           await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
           await hanbotz.sendMedia(m.chat, `https://api.akuari.my.id/other/${command}?text=${text}`, 'Han', 'IG: @terserah_bomat', m, {asSticker: true}).catch((err) => reply(`Error!!`))
         }
         break
           
case 'dogesticker':
case 'dogestick':
	case 'doge':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hanbotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1 
}
break
case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hanbotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1 
}
break
case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hanbotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1 
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hanbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await hanbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Contoh :\nswm ${global.author}|${global.packname}`)

const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
hanbotz.downloadAndSaveMediaMessage(quoted, "gifee")
hanbotz.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hanbotz.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await hanbotz.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*\n\n_Gunakan *.toimg* untuk mengubah stiker manjadi gambar_`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
mee = await hanbotz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.akuari.my.id/sticker/imageaddtext?text=${text}&link=${mem}`
memek = await hanbotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'smeme2': case 'stickermeme2': case 'stickmeme2': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*`)
if (!text.includes('|')) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text|text*`)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} *text*\n\n_Gunakan *.toimg* untuk mengubah stiker manjadi gambar_`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
mee = await hanbotz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.akuari.my.id/sticker/imageaddtext2?text=${atas}&text2=${bawah}&link=${mem}`
memek = await hanbotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    db.data.users[m.sender].limit -= 1 
                })
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
try{
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
hanbotz.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
   case 'spank':
      if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await hanbotz.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break
case 'blowjobgif': case 'bj' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await hanbotz.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break
case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                hanbotz.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `.trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `donw banh`,
  buttons: trapbot,
  headerType: 1
  }     
            await hanbotz.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `donw banh`,
  buttons: hnekobot,
  headerType: 1
  }      
            await hanbotz.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium) return m.reply(mess.premm)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `donw banh`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await hanbotz.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium) return m.reply(mess.premm)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'smug2':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'foxgirl':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break   
case 'animenom' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `donw banh`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await hanbotz.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'waifu3':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'neko2':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
	
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await hanbotz.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                    
                })               
                break
case 'animecuddle':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break   
case 'animeslap':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animepat':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animeneko':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animehug':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animekiss':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animewlp':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animespank':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animecry':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animekill':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animelick':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animebite':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animeyeet':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animebully':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animebonk':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animewink':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animepoke':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animesmile':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animewave':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animeawoo':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animeblush':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animesmug':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animeglomp':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animehappy':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animedance':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animecringe':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animehighfive':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animehandhold':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'animemegumin':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await hanbotz.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break
case 'shinobu2':  
  if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await hanbotz.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
                    
    })               
break
case 'megumin2':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `donw banh`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await hanbotz.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
                    
    })               
break     
case 'awoo2':
    if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `donw banh`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await hanbotz.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                    
                })
break

case 'waifu': case 'loli':
					   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1 
					await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					hanbotz.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						hanbotz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
						db.data.users[m.sender].limit -= 1 
					})
					break
case 'naruto':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `.naruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				hanbotz.sendMessage(from, { caption: `donw banh`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
				db.data.users[m.sender].limit -= 1 
 			    break
case 'yaoi':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `.${command}`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				hanbotz.sendMessage(from, { caption: "donw banh", image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
				db.data.users[m.sender].limit -= 1 
 			    break
case 'meth': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Kirim/Balas Gambar Dengan Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://api.akuari.my.id/canvas/meth?link=${anu}`)
                hanbotz.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'toviewonce': case 'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await hanbotz.downloadAndSaveMediaMessage(quoted)
hanbotz.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await hanbotz.downloadAndSaveMediaMessage(quoted)
        hanbotz.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
        	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data} donw banh`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Contoh:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(`Contoh:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
case 'translate': {
if (isBan) return reply(mess.ban)
if (!text) m.reply(`Textnya?\n\n*Contoh*: Hello&id`)
inite = text.split('|')[0]
basanya = text.split('|')[1] ? text.split('|')[1] : 'id'
tes = await fetchJson (`https://api.akuari.my.id/edukasi/terjemah?query=${inite}&kode=${basanya}`)
Infoo = tes.terjemah
Detek = tes.query
replay(`Translate : ${Detek}\nResults : ${Infoo}`)
}
break

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await hanbotz.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
db.data.users[m.sender].limit -= 1 
break
case'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
db.data.users[m.sender].limit -= 1 
   break


case 'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     db.data.users[m.sender].limit -= 1 
   break


case 'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
  if(!q) return reply(`Use ${prefix + command} text`)
  await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     db.data.users[m.sender].limit -= 1 
   break


case 'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
      if(!q) return reply(`Use ${prefix + command} text`)
      await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         db.data.users[m.sender].limit -= 1 
   break


case 'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
      if(!q) return reply(`Use ${prefix + command} text`)
      await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
db.data.users[m.sender].limit -= 1 
   break
   

case 'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 db.data.users[m.sender].limit -= 1 
   break


case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
      if(!q) return reply(`Use ${prefix + command} text`)
      await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         db.data.users[m.sender].limit -= 1 
   break


case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break


case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break


case 'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   

case 'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case 'graffiti':
   case 'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case 'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text|text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   
   
  
case 'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   
   

case 'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break



case 'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break




case 'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break


case 'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   
   case 'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case 'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
   
case 'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break 

case 'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break

case 'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Use ${prefix + command} text`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => hanbotz.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   db.data.users[m.sender].limit -= 1 
   break
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`Contoh : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
             await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                hanbotz.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
             }
             break

case 'textmaker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (args.length < 1) return reply(`Contoh :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Contoh :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
hanbotz.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Contoh :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
hanbotz.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
//logo maker
case 'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
    db.data.users[m.sender].limit -= 1 
}
   break
  case 'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
    db.data.users[m.sender].limit -= 1 
}
   break
case 'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
    db.data.users[m.sender].limit -= 1 
}
   break
case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
    db.data.users[m.sender].limit -= 1 
}
   break
case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break

case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return m.reply(`teks nya?`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
     console.log(anui)
    hanbotz.sendMessage(from, {image:{url:anui}, caption:"donw banh"}, {quoted:m})
db.data.users[m.sender].limit -= 1 
}
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Contoh: ${prefix + command} Han | Botz`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
if (!logo4) return reply(`*Contoh*: Han | Botz`)
if (!logo9) return reply(`*Contoh*: Han | Botz`)
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hanbotz.sendMessage(from,{image:{url:anu}, caption:"donw banh"},{quoted:m})
db.data.users[m.sender].limit -= 1 
}
break
case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Contoh: ${prefix + command} Han | Botz`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
if (!logo4) return reply(`*Contoh*: Han | Botz`)
if (!logo9) return reply(`*Contoh*: Han | Botz`)
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hanbotz.sendMessage(from,{image:{url:anu}, caption:"donw banh"},{quoted:m})
db.data.users[m.sender].limit -= 1 
}
break
case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Contoh: ${prefix + command} Han | Botz`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
if (!logo4) return reply(`*Contoh*: Han | Botz`)
if (!logo9) return reply(`*Contoh*: Han | Botz`)
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hanbotz.sendMessage(from,{image:{url:anu}, caption:"donw banh"},{quoted:m})
db.data.users[m.sender].limit -= 1 
}
break
case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if(!q) return reply(`Contoh: ${prefix + command} Han | Botz`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
if (!logo4) return reply(`*Contoh*: Han | Botz`)
if (!logo9) return reply(`*Contoh*: Han | Botz`)
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hanbotz.sendMessage(from,{image:{url:anu}, caption:"donw banh"},{quoted:m})
db.data.users[m.sender].limit -= 1 
}
break
case 'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await hanbotz.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
})
}
break

case 'igemoji': 
case 'instagramemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "11")
break
case 'iphoneemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "0")
break
case 'googleemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "1")
break
case 'samsungemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "2")
break
case 'microsoftemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "3")
break
case 'whatsappemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "4")
break
case 'twitteremoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "6")
break
case 'skypeemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "7")
break
case 'joyemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "8")
break
case 'mojiemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "9")
case 'pediaemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*Contoh* : ${prefix + command} 😀`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
emote(q, "10")
break

case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Contoh :* ${prefix + command} 🦄+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await hanbotz.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hanbotz.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Sticker Gif')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let { webp2mp4File } = require('./lib/uploader')
let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hanbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hanbotz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
hanbotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${hanbotz.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
hanbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let { webp2mp4File } = require('./lib/uploader')
let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await hanbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['JdK4z61ETEP6g3pB5wUNNiKL','i3BYBradQ7Z2Xdq5Y79yCd93']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hanbotz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hanbotz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : ${prefix + command} dj tiktok`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
hanbotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'googlexxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Contoh: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${global.themeemoji} *Title* : ${g.title}\n`
teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': case 'googleimage': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `.gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
                    image: { url: images },
                    caption: `${images}`,
                    footer: hanbotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
            case 'twitdl': case 'twitter': {
                if (!text) throw 'Mana Linknya!'
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                ction = (`${anu.desc}`)
                hanbotz.sendMessage(m.chat, { video: { url: anu.HD || anu.SD }, caption: ction }, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Mana Linknya!'
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                hanbotz.sendMessage(m.chat, {audio: { url: anu.audio }, mimetype: 'audio/mpeg', fileName: `Twitter Audio`}, { quoted : m })
            }
            break
            case 'pinterest2': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hanbotz.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are you Looking For??')
                await await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                xeonkey.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'wattpad': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Contoh : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            hanbotz.sendImage(m.chat, thumb, capt, m)
            }
            break
           case 'git': case 'gitclone':
           if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex1.test(args[0])) return reply(`Contoh: ${prefix}gitclone (repo link)`)
    await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    hanbotz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!q) return reply(`Contoh : ${prefix + command} ${global.ownername}`) 
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
             await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                hanbotz.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
            case 'drakorxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are You Looking For??')
                await await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                xeonkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Contoh : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            hanbotz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            
            case 'manga2':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Manga Are You Looking For??`)
                await await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                xeonkey.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Join",
						"url": `${websitex}`
						}
					}
				]
				await hanbotz.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                case 'anime':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if(!q) return reply(`Which anime do you want to search?\nContoh ${prefix}anime naruto`)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `?? *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
hanbotz.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nContoh ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
hanbotz.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
case 'lyrics': case 'lirik': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Contoh: ${prefix}lyrics Despacito`)
	await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'earthquake':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
hanbotz.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
hanbotz.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break
case 'tvschedule':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
if (!q) return reply(`What film you wanna search?\nContoh: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *?? Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               hanbotz.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: m })
});
break
case 'mcserver': case 'mcquery': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.xeon.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Contoh :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
xeontod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'fajar-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case "quotes":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Quotes()
teks = "══════════════════"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "══════════════════"
replay(teks)
break
case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var res = await Darkjokes()
teks = "Darkjokes"
hanbotz.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
db.data.users[m.sender].limit -= 1 
break
case "meme":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
var res = `https://cililitan.herokuapp.com/api/random/meme`
teks = "Meme"
hanbotz.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
db.data.users[m.sender].limit -= 1 
break
case 'cnn-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNNNews().then(res => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tvsearch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `══════════════════`
replay(teks) 
})
break
case 'cnbc-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNBCNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TribunNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
IndozoneNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
KompasNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DetikNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DailyNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'inews-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
iNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'okezone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
OkezoneNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
SindoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tempo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TempoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'antara-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AntaraNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case "kontan-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  KontanNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case "merdeka-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  MerdekaNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    hanbotz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break

case "jalantikus-meme":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  var res = await JalanTikusMeme()
teks = "══════════════════"
teks += "\nLaughing out loud?🥴\n"
teks += `\nSource: ${res}\n`
teks += "══════════════════"
hanbotz.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

	    case 'couplepp':  case 'ppcouple': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hanbotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                hanbotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
            }
	    break
            case 'quotesanime': case 'quoteanime': {
            	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                m.reply(`~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`)
                db.data.users[m.sender].limit -= 1 
            }
            break

case 'wiki': case 'wikipedia':
 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await XeonBotIncWiki(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Penjelasan :* ${res2[0].wiki}`
hanbotz.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}, {quoted: m})
break
            case 'wikimedia': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Enter Query Title`)
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: hanbotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                reply(`~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`)
            }
            break
	        case 'nomerhoki': case 'nomorhoki': {
			   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!Number(text)) return reply(`Contoh : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Phone Number :* ${anu.message.nomer_hp}\n${themeemoji} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${themeemoji} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${themeemoji} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Dream :* ${anu.message.mimpi}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Husband's Name :* ${anu.message.suami.nama}\n${themeemoji} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${themeemoji} *Wife's Name :* ${anu.message.istri.nama}\n${themeemoji} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Life Path :* ${anu.message.life_path}\n${themeemoji} *Destiny :* ${anu.message.destiny}\n${themeemoji} *Destiny Desire :* ${anu.message.destiny_desire}\n${themeemoji} *Personality :* ${anu.message.personality}\n${themeemoji} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendImage(m.chat,  anu.message.gambar, `${themeemoji} *Your Name :* ${anu.message.nama_anda}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Wedding Date :* ${anu.message.tanggal}\n${themeemoji} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Sustenance :* ${anu.message.rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n?? *Profession :* ${anu.message.pekerjaan}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Root Number :* ${anu.message.angka_akar}\n${themeemoji} *Nature :* ${anu.message.sifat}\n${themeemoji} *Element :* ${anu.message.elemen}\n${themeemoji} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendImage(m.chat, anu.message.image, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tahun_lahir}\n${themeemoji} *Gender :* ${anu.message.jenis_kelamin}\n${themeemoji} *Kua Number :* ${anu.message.angka_kua}\n${themeemoji} *Group :* ${anu.message.kelompok}\n${themeemoji} *Character :* ${anu.message.karakter}\n${themeemoji} *Good Sector :* ${anu.message.sektor_baik}\n${themeemoji} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *When Challenged :* ${anu.message.kala_tinantang}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Fateful Day :* ${anu.message.hari_naas}\n${themeemoji} *Info :* ${anu.message.catatan}\n${themeemoji} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tanggal}\n${themeemoji} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${themeemoji} *Day Character :* ${anu.message.watak_hari}\n${themeemoji} *Dragon Day :* ${anu.message.naga_hari}\n${themeemoji} *Good Hour :* ${anu.message.jam_baik}\n${themeemoji} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} Han, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tgl_memancing}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                hanbotz.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
            }
            break
	    case 'tiktoknowm': case 'tiktok': {
		if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(`Tautan yang Anda berikan tidak valid`)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok?link=${text}`)
                let ana = await getBuffer(anu.respon.video)
                hanbotz.sendMessage(m.chat, { video: ana, caption: `${text}` }, { quoted: m })
            }
            break
            
case 'tiktokmp3': case 'tiktokaudio': case 'tiktokmusic': case 'ttaud': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(`Tautan yang Anda berikan tidak valid`)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
   let anu = (`https://api.akuari.my.id/downloader/tiktok?link=${q}`)
   let ana = await getBuffer(`https://api.akuari.my.id/downloader/tiktokaudio?link=${text}`)
    hanbotz.sendMessage(from, { audio: ana, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
	
case 'play': case 'ytplay': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`mau nyari apa?`)
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
• Title : ${anu.title}
• ID : ${anu.videoId}
• Duration : ${anu.timestamp}
• Viewers : ${anu.views}
• Upload At : ${anu.ago}
• Author : ${anu.author.name}
• Channel : ${anu.author.url}
• Url : ${anu.url}`,
                    footer: hanbotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'ytmp3': case 'ytaudio': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/***`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
               let iniaud = await (`$media.dl_link`)
                hanbotz.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}\n\ntunggu, file akan segara dikirim`, m)
                hanbotz.sendMessage(m.chat, {audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}`}, { quoted : m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/*** 360p`
                let quality = args[1] ? args[1] : '360'
                let media = await ytv(text, quality)
                hanbotz.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP4\n• Resolusi : ${args[1] || '360p'}\n\ntunggu, file akan segera dikirim`, m)
                hanbotz.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title} (${args[1] || '360p'}).mp4`}, { quoted : m })
            }
            break
            
case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hanbotz.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, m)
                hanbotz.sendMessage(m.chat, {audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}`}, { quoted : m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                m.reply(`wait...`)
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                
                hanbotz.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title} (${args[1] || '480p'}).mp4`}, { quoted : m })
            }
            break
	  case 'pinterest': case 'pin': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply("What picture are you looking for?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `.pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
                    image: { url: imgnyee },
                    caption: `${imgnyee}`,
                    footer: hanbotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply("Error")
}
}
break
case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Tautan yang Anda berikan tidak valid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}

_wait, the file will be sent in a few minutes_`
reply(`${result4}`)
hanbotz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            
        case 'ringtone': {
        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		if (!text) return reply(`Where is the ringtone name noob?, Contoh : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hanbotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Contoh: ${prefix + command} 10`)
var req = args.join(' ')
media = await hanbotz.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hanbotz.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hanbotz.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Contoh: ${prefix + command} 10`)
media = await hanbotz.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
hanbotz.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
hanbotz.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await hanbotz.sendMessage(from, { react: { text: `🕒`, key: m.key }})
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                hanbotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (!isCreator) return replay(`${mess.owner}`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return replay(`${mess.owner}`)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hanbotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Contoh : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return reply(`Contoh : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                hanbotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return replay(`${mess.owner}`)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return replay(`${mess.owner}`)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    
            case 'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                hanbotz.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                hanbotz.public = false
                reply('Successful Change To Self Usage')
            }
            break
case 'setstatus':
case 'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (!q) return reply('Send orders *#setbio text*')
hanbotz.setStatus(`${q}`)
reply(mess.success)
break
case 'antitag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
break
            case 'ping': case 'botstatus': case 'statusbot': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
*- S P E E D -*
${latensi.toFixed(4)} Second
${oldd - neww} Miliseconds

*- R U N T I M E -*
${runtime(process.uptime())}

*- S E R V E R -*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*⫹⫺ NodeJS Memory Usage*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'ownerrr': case 'creatorrr': {
                hanbotz.sendContact(m.chat, global.vcardowner, m)
            }
            break
  
case 'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
hanbotz.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
hanbotz.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    	if(!text) return reply(`Enter The Bug\n\nContoh: ${command} (Fitur) Error`)
                    	hanbotz.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Berhasil Dilaporkan Ke Owner\n\nPastikan Bug/Error Valid, Jika Kamu Bermain Main Dengan Ini, Kamu Pasti Akan Diblokir !`)
                    }
                    break
case 'donate': case 'donasi': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(`*「 ${global.botname} Donate 」*\n\nhttps://saweria.co/HanBotz`)
}
break

case 'menu': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
const sections = [
                     {
                    title: "HanBotz ",
 rows: [
                          {
                            "title": " 📖 | PERATURAN",
                            "rowId": ".rulesnya",
                            "description": "Syarat dan Ketentuan Penggunaan Bot"
                          },
                          {
                            "title": "💰 | DONASI",
                            "rowId": ".donasi",
                            "description": "Bantu HanBotz Untuk Tetap Online"
                          }
                           ]
                           },
                           {
                    title: "List Menu",
 rows: [
                          {
                            "title": "⚙️ | PENGELOLA GRUP",
                            "rowId": ".gcmenu",
                            "description": "Mengatur Grup"
                          },
                          {
                            "title": "🎮 | PERMAINAN",
                            "rowId": ".gemmenu",
                            "description": "Menghilangkan Kegabutan"
                           },
                           {
                            "title": "📥 | PENGUNDUH",
                            "rowId": ".downmenu",
                            "description": "Mengunduh Media"
                           },
                           {
                            "title": "💞 | MENFESS",
                            "rowId": ".menfess",
                            "description": "mengirim media secara anonim"
                           },
                           {
                            "title": "🐣 | PEMBUAT LOGO",
                            "rowId": ".logomenu",
                            "description": "Membuat Logo"
                           },
                           {
                            "title": "🔎 | PENCARIAN",
                            "rowId": ".scmenu",
                            "description": "Mencari ayang"
                           },
                           {
                            "title": "⚡ | CONVERT",
                            "rowId": ".stikmenu",
                            "description": "Converter"
                           },
                           {
                            "title": "🗯️ | KATA-KATA",
                            "rowId": ".kate",
                            "description": "Quote"
                           },
                           {
                            "title": "🖼️ | STIKER",
                            "rowId": ".stmenu",
                            "description": "Pembuat Stiker"
                           },
                           {
                            "title": "🔉 | PENGUBAH SUARA",
                            "rowId": ".audmenu",
                            "description": "Voice Changer"
                           },
                           {
                            "title": "👻 | EMOTICON",
                            "rowId": ".emomenu",
                            "description": "Emoji Sosial Media"
                           },
                           {
                            "title": "🌸 | ANIME",
                            "rowId": ".animenu",
                            "description": "Wangy Wangy"
                           },
                           {
                            "title": "🍃 | STIKER ANIME",
                            "rowId": ".nimenu",
                            "description": "Stiker Anime"
                           },
                           {
                            "title": "🔞 | NSFW",
                            "rowId": ".nsfwmenu",
                            "description": "(◡ ω ◡)"
                           },
                           {
                            "title": "📚 | CERPEN",
                            "rowId": ".cerpenmenu",
                            "description": "Cerita Pendek"
                           },
                           {
                            "title": "🎧 | SOUND",
                            "rowId": ".soundmenu",
                            "description": "Tiktok Sound"
                           },
                           {
                            "title": "📰 | BERITA",
                            "rowId": ".berita",
                            "description": "Artikel Berita"
                           },
                           {
                            "title": "🔮 | PRIMBON",
                            "rowId": ".primbonmenu",
                            "description": "Ramalan"
                           },
                           {
                            "title": "🧑🏻‍💻 | DEVELOPER",
                            "rowId": ".ownermenu",
                            "description": "Pengaturan Bot"
                           }
                           ]
                           },
                           {
                    title: "All Menu",
 rows: [
                          {
                            "title": "📍 | SEMUA MENU",
                            "rowId": ".menuall",
                            "description": "Menampilkan Semua Menu"
                           }
                           ]
                           },
                           ]

const listMessage = {
	text: `\n*Grup WhatsApp*
https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n`,
  footer: "© HanBotz",
  title: `Hai *${pushname}*`,
  buttonText: "Pilih Menu",
  sections
}
hanbotz.sendMessage(m.chat, listMessage, {quoted: m})
} 
break
case 'menuall': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
menu = `
*Make Doang Ga Donasi 🗿*
https://link.hanbotz.xyz/donasi

${redd}
*PENGELOLAAN GRUP*

• ${prefix}linkgrup
• ${prefix}ephemeral [option]
• ${prefix}setgcpp [image]
• ${prefix}setname [text]
• ${prefix}setdesc [text]
• ${prefix}group close/open
• ${prefix}resetgrouplink
• ${prefix}editinfo [option]
• ${prefix}add [user]
• ${prefix}kick [reply/tag]
• ${prefix}hidetag [text]
• ${prefix}tagall [text]
• ${prefix}promote [reply/tag]
• ${prefix}demote [reply/tag]


*PERMAINAN*

• ${prefix}tictactoe [nama room]
• ${prefix}deltictactoe
• ${prefix}tebak gambar
• ${prefix}tebak kata
• ${prefix}tebak kalimat
• ${prefix}tebak lagu
• ${prefix}tebak lirik
• ${prefix}tebak unsur
• ${prefix}tebak anime
• ${prefix}tebak bendera
• ${prefix}tebak tebakan
• ${prefix}tebak siapakahaku
• ${prefix}susunkata
• ${prefix}asahotak
• ${prefix}caklontong
• ${prefix}math [difficulty]
• ${prefix}suitpvp [tag]


*PENGUNDUH*

• ${prefix}tiktok [url]
• ${prefix}tiktokaudio [url]
• ${prefix}twitter [url]
• ${prefix}twitteraudio [url]
• ${prefix}mediafire [url]
• ${prefix}gitclone [url]
• ${prefix}play [query]
• ${prefix}ytmp3 [url]
• ${prefix}ytmp4 [url]
• ${prefix}ytsearch [query]


*PEMBUAT LOGO*

• ${prefix}ice
• ${prefix}watercolor
• ${prefix}multicolor
• ${prefix}snow
• ${prefix}harrypot
• ${prefix}harrypotter
• ${prefix}brokenglass
• ${prefix}waterpipe
• ${prefix}spooky
• ${prefix}circuit
• ${prefix}metallic
• ${prefix}demon
• ${prefix}sparklechristmas
• ${prefix}christmas
• ${prefix}3dchristmas
• ${prefix}3dbox
• ${prefix}candy
• ${prefix}blackpinkneon
• ${prefix}deepsea
• ${prefix}scifi
• ${prefix}fiction
• ${prefix}berry
• ${prefix}fruitjuice
• ${prefix}biscuit
• ${prefix}wood
• ${prefix}chocolate
• ${prefix}matrix
• ${prefix}blood
• ${prefix}halloween
• ${prefix}wicker
• ${prefix}darkgold
• ${prefix}firework
• ${prefix}skeleton
• ${prefix}sand
• ${prefix}glue
• ${prefix}leaves
• ${prefix}magma
• ${prefix}lava
• ${prefix}rock
• ${prefix}lion
• ${prefix}3dneon
• ${prefix}greenneon
• ${prefix}bokeh
• ${prefix}holographic
• ${prefix}bear
• ${prefix}wolf
• ${prefix}joker
• ${prefix}dropwater
• ${prefix}dropwater2
• ${prefix}thewall
• ${prefix}neonlight
• ${prefix}natural
• ${prefix}carbon
• ${prefix}pencil
• ${prefix}blackpink2
• ${prefix}neon
• ${prefix}neonlight2
• ${prefix}toxic
• ${prefix}strawberry
• ${prefix}discovery
• ${prefix}1917
• ${prefix}bloodglas
• ${prefix}underwater
• ${prefix}textmaker
• ${prefix}honey
• ${prefix}waterdrop
• ${prefix}lion2
• ${prefix}papercut
• ${prefix}transformer
• ${prefix}neondevil
• ${prefix}3davengers
• ${prefix}3dstone
• ${prefix}3dstone2
• ${prefix}summertime
• ${prefix}thunder
• ${prefix}window
• ${prefix}graffiti
• ${prefix}graffitibike
• ${prefix}pornhub
• ${prefix}glitch
• ${prefix}blackpink
• ${prefix}glitch2
• ${prefix}glitch3
• ${prefix}3dspace
• ${prefix}sci_fi
• ${prefix}ancient
• ${prefix}fabric
• ${prefix}hoorror
• ${prefix}whitebear
• ${prefix}juice
• ${prefix}batman
• ${prefix}multicolor
• ${prefix}collwall
• ${prefix}wonderful
• ${prefix}sketch
• ${prefix}marvel
• ${prefix}foggy
• ${prefix}writing
• ${prefix}halloweenfire
• ${prefix}halloween
• ${prefix}watercolor


*PENCARIAN*

• ${prefix}lyrics [query]
• ${prefix}gimage [query]
• ${prefix}pinterest [query]
• ${prefix}film [query]
• ${prefix}wikimedia [query]
• ${prefix}anime [query]
• ${prefix}manga [query]
• ${prefix}wikipedia [query]


*CONVERT*

• ${prefix}toimage [reply stick]
• ${prefix}take [reply img|gif|stik]
• ${prefix}tovideo [reply img]
• ${prefix}togif [reply stick]
• ${prefix}tourl [reply img]
• ${prefix}tovn [reply aud]
• ${prefix}tomp3 [reply vn]
• ${prefix}toaudio [reply vid]
• ${prefix}tinyurl [link]
• ${prefix}styletext [text]


*QUOTES*

• ${prefix}quotebijak
• ${prefix}quotefakta
• ${prefix}quotebacot
• ${prefix}quoteilham
• ${prefix}quotefakboy
• ${prefix}quotesindiran


*STIKER*

• ${prefix}sticker [reply]
• ${prefix}ttp [text]
• ${prefix}attp [text]
• ${prefix}smeme [text]
• ${prefix}smeme2 [text | text]
• ${prefix}emoji 😅
• ${prefix}emojimix 😂+😭


*PENGUBAH SUARA*

• ${prefix}volume 
• ${prefix}tempo 
• ${prefix}bass 
• ${prefix}blown 
• ${prefix}deep 
• ${prefix}earrape 
• ${prefix}fast 
• ${prefix}fat 
• ${prefix}nightcore 
• ${prefix}reverse 
• ${prefix}robot 
• ${prefix}slow 
• ${prefix}squirrel


*EMOJI*

• ${prefix}joyemoji
• ${prefix}pediaemoji
• ${prefix}skypeemoji
• ${prefix}twitteremoji
• ${prefix}iphoneemoji
• ${prefix}googleemoji
• ${prefix}instagramemoji
• ${prefix}facebookemoji
• ${prefix}samsungemoji
• ${prefix}whatsappemoji
• ${prefix}microsoftemoji


*WIBU BAU BAWANG*

• ${prefix}loli
• ${prefix}animenom
• ${prefix}goose
• ${prefix}avatar
• ${prefix}tickle
• ${prefix}gecg
• ${prefix}feed
• ${prefix}naruto
• ${prefix}neko2
• ${prefix}waifu
• ${prefix}waifu2
• ${prefix}awoo2
• ${prefix}shinobu
• ${prefix}waifu3
• ${prefix}foxgirl
• ${prefix}megumin2
• ${prefix}smug2
• ${prefix}animeslap
• ${prefix}animespank
• ${prefix}animepat
• ${prefix}animeneko
• ${prefix}animekiss
• ${prefix}animewlp
• ${prefix}animecuddle
• ${prefix}animecry
• ${prefix}animekill
• ${prefix}animelick
• ${prefix}animebite
• ${prefix}animeyeet
• ${prefix}animebully
• ${prefix}animebonk
• ${prefix}animewink
• ${prefix}animepoke
• ${prefix}animesmile
• ${prefix}animewave
• ${prefix}animeawoo
• ${prefix}animeblush
• ${prefix}animesmug
• ${prefix}animeglomp
• ${prefix}animehappy
• ${prefix}animedance
• ${prefix}animecringe
• ${prefix}animehighfive
• ${prefix}animehandhold
• ${prefix}animemegumin


*STIKER ANIME*

• ${prefix}bully
• ${prefix}cuddle
• ${prefix}cry
• ${prefix}hug
• ${prefix}awoo
• ${prefix}kiss
• ${prefix}lick
• ${prefix}pat
• ${prefix}smug
• ${prefix}bonk
• ${prefix}yeet
• ${prefix}blush
• ${prefix}smile
• ${prefix}wave
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}nom
• ${prefix}glomp
• ${prefix}bite
• ${prefix}slap
• ${prefix}kill
• ${prefix}happy
• ${prefix}wink
• ${prefix}poke
• ${prefix}dance
• ${prefix}cringe
• ${prefix}neko


*NSFW*

• ${prefix}yuri
• ${prefix}thighs
• ${prefix}pussy
• ${prefix}panties
• ${prefix}orgy
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}blowjob
• ${prefix}cuckold
• ${prefix}ero
• ${prefix}gasm
• ${prefix}cum
• ${prefix}femdom
• ${prefix}foot
• ${prefix}gangbang
• ${prefix}glasses
• ${prefix}jahy
• ${prefix}trap
• ${prefix}spank
• ${prefix}hneko
• ${prefix}nwaifu
• ${prefix}masturbation
• ${prefix}hentaivideo
• ${prefix}blowjobgif


*CERITA PENDEK*

• ${prefix}Cerpen Anak\n• ${prefix}Cerpen Bahasa Daerah\n• ${prefix}Cerpen Bahasa Inggris\n• ${prefix}Cerpen Bahasa Jawa\n• ${prefix}Cerpen Bahasa Sunda\n• ${prefix}Cerpen Budaya\n• ${prefix}Cerpen Cinta\n• ${prefix}Cerpen Cinta Islami\n• ${prefix}Cerpen Cinta Pertama\n• ${prefix}Cerpen Cinta Romantis\n• ${prefix}Cerpen Cinta Sedih\n• ${prefix}Cerpen Cinta Segitiga\n• ${prefix}Cerpen Cinta Sejati\n• ${prefix}Cerpen Galau\n• ${prefix}Cerpen Gokil\n• ${prefix}Cerpen Inspiratif\n• ${prefix}Cerpen Jepang\n• ${prefix}Cerpen Kehidupan\n• ${prefix}Cerpen Keluarga\n• ${prefix}Cerpen Kisah Nyata\n• ${prefix}Cerpen Korea\n• ${prefix}Cerpen Kristen\n• ${prefix}Cerpen Liburan\n• ${prefix}Cerpen Lingkungan\n• ${prefix}Cerpen Lucu\n• ${prefix}Cerpen Malaysia\n• ${prefix}Cerpen Mengharukan\n• ${prefix}Cerpen Misteri\n• ${prefix}Cerpen Motivasi\n• ${prefix}Cerpen Nasihat\n• ${prefix}Cerpen Nasionalisme\n• ${prefix}Cerpen Olahraga\n• ${prefix}Cerpen Patah Hati\n• ${prefix}Cerpen Penantian\n• ${prefix}Cerpen Pendidikan\n• ${prefix}Cerpen Pengalaman Pribadi\n• ${prefix}Cerpen Pengorbanan\n• ${prefix}Cerpen Penyesalan\n• ${prefix}Cerpen Perjuangan\n• ${prefix}Cerpen Perpisahan\n• ${prefix}Cerpen Persahabatan\n• ${prefix}Cerpen Petualangan\n• ${prefix}Cerpen Ramadhan\n• ${prefix}Cerpen Remaja\n• ${prefix}Cerpen Renungan\n• ${prefix}Cerpen Rindu\n• ${prefix}Cerpen Rohani\n• ${prefix}Cerpen Romantis\n• ${prefix}Cerpen Sastra\n• ${prefix}Cerpen Sedih\n• ${prefix}Cerpen Sejarah\n• ${prefix}Cerpen Slice Of Life\n• ${prefix}Cerpen Terjemahan\n• ${prefix}Cerpen Thriller


*SOUND*

• ${prefix}sound1
• ${prefix}sound2
• ${prefix}sound3
• ${prefix}sound4
• ${prefix}sound5
• ${prefix}sound6
• ${prefix}sound7
• ${prefix}sound8
• ${prefix}sound9
• ${prefix}sound10
• ${prefix}sound11
• ${prefix}sound12
• ${prefix}sound13
• ${prefix}sound14
• ${prefix}sound15
• ${prefix}sound16
• ${prefix}sound17
• ${prefix}sound18
• ${prefix}sound19
• ${prefix}sound20
• ${prefix}sound21
• ${prefix}sound22
• ${prefix}sound23
• ${prefix}sound24
• ${prefix}sound25
• ${prefix}sound26
• ${prefix}sound27
• ${prefix}sound28
• ${prefix}sound29
• ${prefix}sound30
• ${prefix}sound31
• ${prefix}sound32
• ${prefix}sound33
• ${prefix}sound34
• ${prefix}sound35
• ${prefix}sound36
• ${prefix}sound37
• ${prefix}sound38
• ${prefix}sound39
• ${prefix}sound40
• ${prefix}sound41
• ${prefix}sound42
• ${prefix}sound43
• ${prefix}sound44
• ${prefix}sound45
• ${prefix}sound46
• ${prefix}sound47
• ${prefix}sound48
• ${prefix}sound49
• ${prefix}sound50
• ${prefix}sound51
• ${prefix}sound52
• ${prefix}sound53
• ${prefix}sound54
• ${prefix}sound55
• ${prefix}sound56
• ${prefix}sound57
• ${prefix}sound58
• ${prefix}sound59
• ${prefix}sound60
• ${prefix}sound61
• ${prefix}sound62
• ${prefix}sound63
• ${prefix}sound64
• ${prefix}sound65
• ${prefix}sound66
• ${prefix}sound67
• ${prefix}sound68
• ${prefix}sound69
• ${prefix}sound70
• ${prefix}sound71
• ${prefix}sound72
• ${prefix}sound73
• ${prefix}sound74
• ${prefix}sound75
• ${prefix}sound76
• ${prefix}sound77
• ${prefix}sound78
• ${prefix}sound79
• ${prefix}sound80
• ${prefix}sound81
• ${prefix}sound82
• ${prefix}sound83
• ${prefix}sound84
• ${prefix}sound85
• ${prefix}sound86
• ${prefix}sound87
• ${prefix}sound88
• ${prefix}sound89
• ${prefix}sound90
• ${prefix}sound91
• ${prefix}sound92
• ${prefix}sound93
• ${prefix}sound94
• ${prefix}sound95
• ${prefix}sound96
• ${prefix}sound97
• ${prefix}sound98
• ${prefix}sound99
• ${prefix}sound100
• ${prefix}sound101
• ${prefix}sound102
• ${prefix}sound103
• ${prefix}sound104
• ${prefix}sound105
• ${prefix}sound106
• ${prefix}sound107
• ${prefix}sound108
• ${prefix}sound109
• ${prefix}sound110
• ${prefix}sound111
• ${prefix}sound112
• ${prefix}sound113
• ${prefix}sound114
• ${prefix}sound115
• ${prefix}sound116
• ${prefix}sound117
• ${prefix}sound118
• ${prefix}sound119
• ${prefix}sound120
• ${prefix}sound121
• ${prefix}sound122
• ${prefix}sound123
• ${prefix}sound124
• ${prefix}sound125
• ${prefix}sound126
• ${prefix}sound127
• ${prefix}sound128
• ${prefix}sound129
• ${prefix}sound130
• ${prefix}sound131
• ${prefix}sound132
• ${prefix}sound133
• ${prefix}sound134
• ${prefix}sound135
• ${prefix}sound136
• ${prefix}sound137
• ${prefix}sound138
• ${prefix}sound139
• ${prefix}sound140
• ${prefix}sound141
• ${prefix}sound142
• ${prefix}sound143
• ${prefix}sound144
• ${prefix}sound145
• ${prefix}sound146
• ${prefix}sound147
• ${prefix}sound148
• ${prefix}sound149
• ${prefix}sound150
• ${prefix}sound151
• ${prefix}sound152
• ${prefix}sound153
• ${prefix}sound154
• ${prefix}sound155
• ${prefix}sound156
• ${prefix}sound157
• ${prefix}sound158
• ${prefix}sound159
• ${prefix}sound160
• ${prefix}sound161


*BERITA*

• ${prefix}jalantikus-meme
• ${prefix}merdeka-news 
• ${prefix}kontan-news 
• ${prefix}cnbc-news 
• ${prefix}tribun-news 
• ${prefix}indozone-news 
• ${prefix}kompas-news 
• ${prefix}detik-news 
• ${prefix}daily-news 
• ${prefix}inews-news 
• ${prefix}okezone-news 
• ${prefix}sindo-news 
• ${prefix}tempo-news 
• ${prefix}antara-news 
• ${prefix}cnn-news 
• ${prefix}fajar-news 
• ${prefix}earthquake
• ${prefix}tvschedule


*PRIMBON*

• ${prefix}tarot 
• ${prefix}fengshui 
• ${prefix}haribaik 
• ${prefix}harisangar 
• ${prefix}harisial
• ${prefix}nagahari
• ${prefix}arahrezeki
• ${prefix}peruntungan 
• ${prefix}weton 
• ${prefix}karakter
• ${prefix}keberuntungan
• ${prefix}memancing
• ${prefix}masasubur
• ${prefix}zodiak
• ${prefix}shio
• ${prefix}nomorhoki
• ${prefix}artimimpi 
• ${prefix}artinama 
• ${prefix}ramaljodoh 
• ${prefix}ramaljodohbali 
• ${prefix}suamiistri 
• ${prefix}ramalcinta 
• ${prefix}cocoknama 
• ${prefix}pasangan 
• ${prefix}jadiannikah 
• ${prefix}sifatusaha 
• ${prefix}rezeki 
• ${prefix}pekerjaan 
• ${prefix}nasib 
• ${prefix}penyakit 


*DEVELOPER*

• ${prefix}self
• ${prefix}public
• ${prefix}ban
• ${prefix}banchat
• ${prefix}setcmd
• ${prefix}listcmd
• ${prefix}delcmd
• ${prefix}lockcmd
• ${prefix}addmsg
• ${prefix}listmsg
• ${prefix}getmsg
• ${prefix}delmsg
• ${prefix}join
• ${prefix}leavegc
• ${prefix}setbio
• ${prefix}bcgroup
• ${prefix}bcall
• ${prefix}bcimage
• ${prefix}bcvideo
• ${prefix}bcaudio 
• ${prefix}bcloc 
• ${prefix}setppbot
• ${prefix}setexif
• ${prefix}block
• ${prefix}unblock
`
reply(menu)
}
break

case 'gcmenu': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PENGELOLAAN GRUP*

• *${prefix}linkgrup* : membuat link grup
> _${prefix}linkgrup_

• *${prefix}ephemeral* : pesan sementara
> _${prefix}ephemeral enable / disable_

• *${prefix}tagall* : tag seluruh user di grup
> _${prefix}tagall Hai beban_

• *${prefix}hidetag* : hiden tag seluruh user di grup
> _${prefix}hidetag Hai beban_

• *${prefix}setgcpp* : set gambar profil grup chat
> _kirim atau balas foto dengan caption ${prefix}setgcpp_

• *${prefix}setname* : set nama grup chat
> _${prefix}setname whatsapp grup_

• *${prefix}setdesc* : set deskripsi grup chat
> _${prefix}setdesc grup tidak berguna_

• *${prefix}group* : buka tutup grup
> _${prefix}group open / close_

• *${prefix}revoke* : mereset link grup
> _${prefix}revoke_

• *${prefix}editinfo* : merubah akses edit info grup
> _${prefix}editinfo enable / disable_

• *${prefix}add* : menambahkan target ke dalam grup
> _${prefix}add nomor target dimuali dari kode negara (62)_

• *${prefix}kick* : mengeluarkan target dari grup
> _${prefix}kick @tag user yang aka di kick_

• *${prefix}promote* : menjadikan user sebagai admin grup
> _${prefix}promote @tag user yang akan di promote_

• *${prefix}demote* : menjadikan admin sebagai member biasa
> _${prefix}demote @tag user yang akan di demote_
`)
}
break
case 'gemmenu': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(`${mess.group}`)
reply(`
*PERMAINAN*

• *${prefix}tictactoe* : bermain tictactoe bersama teman
> _${prefix}tictactoe [nama room]_

• *${prefix}deltictactoe* : menghapus sesi tictactoe
> _${prefix}deltictactoe_

• *${prefix}suit* : bermain suit bersama teman
> _${prefix}suit @tag temen yang ingin di ajak bermain_

• *${prefix}tebak* : bermain tebak-tebakan
> _${prefix}tebak gambar_
> _${prefix}tebak kata_
> _${prefix}tebak kalimat_
> _${prefix}tebak lagu_
> _${prefix}tebak lirik_
> _${prefix}tebak unsur_
> _${prefix}tebak anime_
> _${prefix}tebak bendera_
> _${prefix}tebak tebakan_
> _${prefix}tebak siapakahaku_

• *${prefix}susunkata* : menyusun kata yang acak
> _${prefix}susunkata_

• *${prefix}asahotak* : mengasah otak kamu yang lemot
> _${prefix}asahotak_

• *${prefix}caklontong* : kuisnya cak lontong
> _${prefix}caklontong_

• *${prefix}math* : permainan matematika. tersedia beberapa mode
> _${prefix}math noob_
> _${prefix}math easy_
> _${prefix}math medium_
> _${prefix}math hard_
> _${prefix}math extreme_
> _${prefix}math impossible_
> _${prefix}math impossible2_
`)
}
break
case 'downmenu': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PENGUNDUH*

• *${prefix}tiktok* : mengunduh video tiktok
> _${prefix}tiktok [url]_

• *${prefix}tiktokaudio* : mengunduh audio tiktok
> _${prefix}tiktokaudio [url]_

• *${prefix}twitter* : mengunduh video twitter
> _${prefix}twitter [url]_

• *${prefix}twitteraudio* : mengunduh audio twitter
> _${prefix}twitteraudio [url]_

• *${prefix}mediafire* : mengunduh file mediafire
> _${prefix}mediafire [url]_

• *${prefix}gitclone* : mengunduh file github
> _${prefix}gitclone [url]_

• *${prefix}play* : mengunduh video / audio youtube
> _${prefix}play dj tiktok_

• *${prefix}ytmp3* : mengunduh audio youtube
> _${prefix}ytmp3 [url]_

• *${prefix}ytmp4* : mengunduh video youtube
> _${prefix}ytmp4 [url]_

• *${prefix}ytsearch* : mencari video / audio dari kata kunci
> _${prefix}ytsearch dj tiktok_
`)
}
break
case 'logomenu': 
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PEMBUAT LOGO*

> _*${prefix}matrix* hanbotz_
~> terdapat beberapa macam logo:

• ${prefix}ice
• ${prefix}watercolor
• ${prefix}multicolor
• ${prefix}snow
• ${prefix}harrypot
• ${prefix}harrypotter
• ${prefix}brokenglass
• ${prefix}waterpipe
• ${prefix}spooky
• ${prefix}circuit
• ${prefix}metallic
• ${prefix}demon
• ${prefix}sparklechristmas
• ${prefix}christmas
• ${prefix}3dchristmas
• ${prefix}3dbox
• ${prefix}candy
• ${prefix}blackpinkneon
• ${prefix}deepsea
• ${prefix}scifi
• ${prefix}fiction
• ${prefix}berry
• ${prefix}fruitjuice
• ${prefix}biscuit
• ${prefix}wood
• ${prefix}chocolate
• ${prefix}matrix
• ${prefix}blood
• ${prefix}halloween
• ${prefix}wicker
• ${prefix}darkgold
• ${prefix}firework
• ${prefix}skeleton
• ${prefix}sand
• ${prefix}glue
• ${prefix}leaves
• ${prefix}magma
• ${prefix}lava
• ${prefix}rock
• ${prefix}lion
• ${prefix}3dneon
• ${prefix}greenneon
• ${prefix}bokeh
• ${prefix}holographic
• ${prefix}bear
• ${prefix}wolf
• ${prefix}joker
• ${prefix}dropwater
• ${prefix}dropwater2
• ${prefix}thewall
• ${prefix}neonlight
• ${prefix}natural
• ${prefix}carbon
• ${prefix}pencil
• ${prefix}blackpink2
• ${prefix}neon
• ${prefix}neonlight2
• ${prefix}toxic
• ${prefix}strawberry
• ${prefix}discovery
• ${prefix}1917
• ${prefix}bloodglas
• ${prefix}underwater
• ${prefix}textmaker
• ${prefix}honey
• ${prefix}waterdrop
• ${prefix}lion2
• ${prefix}papercut
• ${prefix}transformer
• ${prefix}neondevil
• ${prefix}3davengers
• ${prefix}3dstone
• ${prefix}3dstone2
• ${prefix}summertime
• ${prefix}thunder
• ${prefix}window
• ${prefix}graffiti
• ${prefix}graffitibike
• ${prefix}pornhub
• ${prefix}glitch
• ${prefix}blackpink
• ${prefix}glitch2
• ${prefix}glitch3
• ${prefix}3dspace
• ${prefix}sci_fi
• ${prefix}ancient
• ${prefix}fabric
• ${prefix}hoorror
• ${prefix}whitebear
• ${prefix}juice
• ${prefix}batman
• ${prefix}multicolor
• ${prefix}collwall
• ${prefix}wonderful
• ${prefix}cool
• ${prefix}sketch
• ${prefix}marvel
• ${prefix}foggy
• ${prefix}writing
• ${prefix}halloweenfire
• ${prefix}halloween
• ${prefix}watercolor
• ${prefix}classic
`)
break
case 'scmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PENCARIAN*

• *${prefix}lyrics* : mencari lirik lagu
> _${prefix}lyrics havana_

• *${prefix}gimage* : mencari gambar dari google
> _${prefix}gimage banana_

• *${prefix}pinterest* : mencari gambar dari pinterest
> _${prefix}pinterest banana_

• *${prefix}film* : mencari film dari kata kunci
> _${prefix}film minions_

• *${prefix}anime* : mencari info anime dari kata kunci
> _${prefix}anime naruto_

• *${prefix}manga* : mencari manga dari kata kunci
> _${prefix}manga naruto_

• *${prefix}wikipedia* : mencari informasi dari wikipedia
> _${prefix}wikipedia banana_
`)
break
case 'stikmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*CONVERT*

• *${prefix}ttsid* : membuat audio (Indonesia) dengan teks
> _${prefix}ttsid hai_

• *${prefix}ttsen* : membuat audio (Inggris) dengan teks
> _${prefix}ttsen hai_

• *${prefix}ttsjp* : membuat audio (Jepang) dengan teks
> _${prefix}ttsjp hai_

• *${prefix}toimage* : mengonversikan stiker menjadi gambar
> _balas stiker (nonAnimasi) dengan caption ${prefix}toimage_

• *${prefix}tovideo* mengonversikan stiker menjadi video
> _balas stiker (animasi) dengan caption ${prefix}tovideo_

• *${prefix}togif* : mengonversikan stiker menjadi gif
> _balas stiker (animasi) dengan caption ${prefix}togif_

• *${prefix}tovn* : mengonversikan video / audio menjadi vn
> _balas video / audio dengan caption ${prefix}tovn_

• *${prefix}toaudio* : mengonversikan video / audio menjadi audio
> _balas video / vn dengan caption ${prefix}toaudio_

• *${prefix}tourl* : membuat tautan gambar
> _kirim / balas gambar dengan caption ${prefix}tourl_

• *${prefix}tinyurl* : membuat short link 
> _${prefix}tinyurl [url]_

• *${prefix}styletext* : membuat teks unik dari kata kunci
> _${prefix}styletext hanbotz_
`)
break
case 'kate': 
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*QUOTES*

> _*${prefix}quotefakta*_
~> terdapat beberapa macam quote:

• ${prefix}quotebijak
• ${prefix}quotefakta
• ${prefix}quotebacot
• ${prefix}quoteilham
• ${prefix}quotefakboy
• ${prefix}quotesindiran
`)
break
case 'stmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*STIKER*

• *${prefix}sticker* : mengonversikan gambar / video menjadi stiker
> _kirim / balas gambar / video dengan caption *${prefix}stiker_

• *${prefix}ttp* : membuat teks menjadi stiker
> _${prefix}ttp hanbotz_
/ note : jangan menggunakan emoji!

• *${prefix}attp* : membuat teks manjadi stiker (animasi)
> _${prefix}attp hanbotz_
/ note : jangan menggunakan emoji!

• *${prefix}smeme* : membuat stiker dengan teks (bawah)
> _kirim / balas gambar dengan caption ${prefix}smeme hai_

• *${prefix}smeme2* : membuat stiker dengan teks (atas bawah)
> _kirim / balas gambar dengan caption ${prefix}smeme2 hai | beb_

• *${prefix}emoji* : membuat stiker emoji
> _${prefix}emoji 😏_

• *${prefix}emojimix* : mengkombinasikan 2 emoji menjadi stiker
> _${prefix}emojimix 😱+😂_
`)
break
case 'audmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PENGUBAH SUARA*

- balas audio dengan caption;

• ${prefix}volume 
• ${prefix}tempo 
• ${prefix}bass 
• ${prefix}blown 
• ${prefix}deep 
• ${prefix}earrape 
• ${prefix}fast 
• ${prefix}fat 
• ${prefix}nightcore 
• ${prefix}reverse 
• ${prefix}robot 
• ${prefix}slow 
• ${prefix}squirrel
`)
break
case 'emomenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*EMOJI*

> _${prefix}iphoneemoji 🥺_
~> terdapat beberapa macam emoji;

• ${prefix}joyemoji
• ${prefix}pediaemoji
• ${prefix}skypeemoji
• ${prefix}twitteremoji
• ${prefix}iphoneemoji
• ${prefix}googleemoji
• ${prefix}instagramemoji
• ${prefix}facebookemoji
• ${prefix}samsungemoji
• ${prefix}whatsappemoji
• ${prefix}microsoftemoji
`)
break
case 'animenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*WIBU BAU BAWANG*

- gambar anime (~￣³￣)~

• ${prefix}loli
• ${prefix}animenom
• ${prefix}goose
• ${prefix}avatar
• ${prefix}tickle
• ${prefix}gecg
• ${prefix}feed
• ${prefix}naruto
• ${prefix}neko2
• ${prefix}waifu
• ${prefix}waifu2
• ${prefix}awoo2
• ${prefix}shinobu
• ${prefix}waifu3
• ${prefix}foxgirl
• ${prefix}megumin2
• ${prefix}smug2
• ${prefix}animeslap
• ${prefix}animespank
• ${prefix}animepat
• ${prefix}animeneko
• ${prefix}animekiss
• ${prefix}animewlp
• ${prefix}animecuddle
• ${prefix}animecry
• ${prefix}animekill
• ${prefix}animelick
• ${prefix}animebite
• ${prefix}animeyeet
• ${prefix}animebully
• ${prefix}animebonk
• ${prefix}animewink
• ${prefix}animepoke
• ${prefix}animesmile
• ${prefix}animewave
• ${prefix}animeawoo
• ${prefix}animeblush
• ${prefix}animesmug
• ${prefix}animeglomp
• ${prefix}animehappy
• ${prefix}animedance
• ${prefix}animecringe
• ${prefix}animehighfive
• ${prefix}animehandhold
• ${prefix}animemegumin
`)
break
case 'nimenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*STIKER ANIME*

- stiker (animasi) anime 

• ${prefix}bully
• ${prefix}cuddle
• ${prefix}cry
• ${prefix}hug
• ${prefix}awoo
• ${prefix}kiss
• ${prefix}lick
• ${prefix}pat
• ${prefix}smug
• ${prefix}bonk
• ${prefix}yeet
• ${prefix}blush
• ${prefix}smile
• ${prefix}wave
• ${prefix}highfive
• ${prefix}handhold
• ${prefix}nom
• ${prefix}glomp
• ${prefix}bite
• ${prefix}slap
• ${prefix}kill
• ${prefix}happy
• ${prefix}wink
• ${prefix}poke
• ${prefix}dance
• ${prefix}cringe
• ${prefix}neko
`)
break
case 'nsfwmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!isPremium) return reply (mess.premm)
reply(`
*NSFW*

• ${prefix}yuri
• ${prefix}thighs
• ${prefix}pussy
• ${prefix}panties
• ${prefix}orgy
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}blowjob
• ${prefix}cuckold
• ${prefix}ero
• ${prefix}gasm
• ${prefix}cum
• ${prefix}femdom
• ${prefix}foot
• ${prefix}gangbang
• ${prefix}glasses
• ${prefix}jahy
• ${prefix}trap
• ${prefix}spank
• ${prefix}hneko
• ${prefix}nwaifu
• ${prefix}masturbation
• ${prefix}hentaivideo
• ${prefix}blowjobgif
`)
break
case 'cerpenmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*CERITA PENDEK*

~> terdapat beberapa kategori cerita:

• ${prefix}Cerpen Anak\n• ${prefix}Cerpen Bahasa Daerah\n• ${prefix}Cerpen Bahasa Inggris\n• ${prefix}Cerpen Bahasa Jawa\n• ${prefix}Cerpen Bahasa Sunda\n• ${prefix}Cerpen Budaya\n• ${prefix}Cerpen Cinta\n• ${prefix}Cerpen Cinta Islami\n• ${prefix}Cerpen Cinta Pertama\n• ${prefix}Cerpen Cinta Romantis\n• ${prefix}Cerpen Cinta Sedih\n• ${prefix}Cerpen Cinta Segitiga\n• ${prefix}Cerpen Cinta Sejati\n• ${prefix}Cerpen Galau\n• ${prefix}Cerpen Gokil\n• ${prefix}Cerpen Inspiratif\n• ${prefix}Cerpen Jepang\n• ${prefix}Cerpen Kehidupan\n• ${prefix}Cerpen Keluarga\n• ${prefix}Cerpen Kisah Nyata\n• ${prefix}Cerpen Korea\n• ${prefix}Cerpen Kristen\n• ${prefix}Cerpen Liburan\n• ${prefix}Cerpen Lingkungan\n• ${prefix}Cerpen Lucu\n• ${prefix}Cerpen Malaysia\n• ${prefix}Cerpen Mengharukan\n• ${prefix}Cerpen Misteri\n• ${prefix}Cerpen Motivasi\n• ${prefix}Cerpen Nasihat\n• ${prefix}Cerpen Nasionalisme\n• ${prefix}Cerpen Olahraga\n• ${prefix}Cerpen Patah Hati\n• ${prefix}Cerpen Penantian\n• ${prefix}Cerpen Pendidikan\n• ${prefix}Cerpen Pengalaman Pribadi\n• ${prefix}Cerpen Pengorbanan\n• ${prefix}Cerpen Penyesalan\n• ${prefix}Cerpen Perjuangan\n• ${prefix}Cerpen Perpisahan\n• ${prefix}Cerpen Persahabatan\n• ${prefix}Cerpen Petualangan\n• ${prefix}Cerpen Ramadhan\n• ${prefix}Cerpen Remaja\n• ${prefix}Cerpen Renungan\n• ${prefix}Cerpen Rindu\n• ${prefix}Cerpen Rohani\n• ${prefix}Cerpen Romantis\n• ${prefix}Cerpen Sastra\n• ${prefix}Cerpen Sedih\n• ${prefix}Cerpen Sejarah\n• ${prefix}Cerpen Slice Of Life\n• ${prefix}Cerpen Terjemahan\n• ${prefix}Cerpen Thriller
`)
break
case 'soundmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*SOUND*

- sound tiktok random

• ${prefix}sound1
• ${prefix}sound2
• ${prefix}sound3
• ${prefix}sound4
• ${prefix}sound5
• ${prefix}sound6
• ${prefix}sound7
• ${prefix}sound8
• ${prefix}sound9
• ${prefix}sound10
• ${prefix}sound11
• ${prefix}sound12
• ${prefix}sound13
• ${prefix}sound14
• ${prefix}sound15
• ${prefix}sound16
• ${prefix}sound17
• ${prefix}sound18
• ${prefix}sound19
• ${prefix}sound20
• ${prefix}sound21
• ${prefix}sound22
• ${prefix}sound23
• ${prefix}sound24
• ${prefix}sound25
• ${prefix}sound26
• ${prefix}sound27
• ${prefix}sound28
• ${prefix}sound29
• ${prefix}sound30
• ${prefix}sound31
• ${prefix}sound32
• ${prefix}sound33
• ${prefix}sound34
• ${prefix}sound35
• ${prefix}sound36
• ${prefix}sound37
• ${prefix}sound38
• ${prefix}sound39
• ${prefix}sound40
• ${prefix}sound41
• ${prefix}sound42
• ${prefix}sound43
• ${prefix}sound44
• ${prefix}sound45
• ${prefix}sound46
• ${prefix}sound47
• ${prefix}sound48
• ${prefix}sound49
• ${prefix}sound50
• ${prefix}sound51
• ${prefix}sound52
• ${prefix}sound53
• ${prefix}sound54
• ${prefix}sound55
• ${prefix}sound56
• ${prefix}sound57
• ${prefix}sound58
• ${prefix}sound59
• ${prefix}sound60
• ${prefix}sound61
• ${prefix}sound62
• ${prefix}sound63
• ${prefix}sound64
• ${prefix}sound65
• ${prefix}sound66
• ${prefix}sound67
• ${prefix}sound68
• ${prefix}sound69
• ${prefix}sound70
• ${prefix}sound71
• ${prefix}sound72
• ${prefix}sound73
• ${prefix}sound74
• ${prefix}sound75
• ${prefix}sound76
• ${prefix}sound77
• ${prefix}sound78
• ${prefix}sound79
• ${prefix}sound80
• ${prefix}sound81
• ${prefix}sound82
• ${prefix}sound83
• ${prefix}sound84
• ${prefix}sound85
• ${prefix}sound86
• ${prefix}sound87
• ${prefix}sound88
• ${prefix}sound89
• ${prefix}sound90
• ${prefix}sound91
• ${prefix}sound92
• ${prefix}sound93
• ${prefix}sound94
• ${prefix}sound95
• ${prefix}sound96
• ${prefix}sound97
• ${prefix}sound98
• ${prefix}sound99
• ${prefix}sound100
• ${prefix}sound101
• ${prefix}sound102
• ${prefix}sound103
• ${prefix}sound104
• ${prefix}sound105
• ${prefix}sound106
• ${prefix}sound107
• ${prefix}sound108
• ${prefix}sound109
• ${prefix}sound110
• ${prefix}sound111
• ${prefix}sound112
• ${prefix}sound113
• ${prefix}sound114
• ${prefix}sound115
• ${prefix}sound116
• ${prefix}sound117
• ${prefix}sound118
• ${prefix}sound119
• ${prefix}sound120
• ${prefix}sound121
• ${prefix}sound122
• ${prefix}sound123
• ${prefix}sound124
• ${prefix}sound125
• ${prefix}sound126
• ${prefix}sound127
• ${prefix}sound128
• ${prefix}sound129
• ${prefix}sound130
• ${prefix}sound131
• ${prefix}sound132
• ${prefix}sound133
• ${prefix}sound134
• ${prefix}sound135
• ${prefix}sound136
• ${prefix}sound137
• ${prefix}sound138
• ${prefix}sound139
• ${prefix}sound140
• ${prefix}sound141
• ${prefix}sound142
• ${prefix}sound143
• ${prefix}sound144
• ${prefix}sound145
• ${prefix}sound146
• ${prefix}sound147
• ${prefix}sound148
• ${prefix}sound149
• ${prefix}sound150
• ${prefix}sound151
• ${prefix}sound152
• ${prefix}sound153
• ${prefix}sound154
• ${prefix}sound155
• ${prefix}sound156
• ${prefix}sound157
• ${prefix}sound158
• ${prefix}sound159
• ${prefix}sound160
• ${prefix}sound161
`)
break
case 'berita':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*BERITA*

- artikel berita

• ${prefix}jalantikus-meme
• ${prefix}merdeka-news 
• ${prefix}kontan-news 
• ${prefix}cnbc-news 
• ${prefix}tribun-news 
• ${prefix}indozone-news 
• ${prefix}kompas-news 
• ${prefix}detik-news 
• ${prefix}daily-news 
• ${prefix}inews-news 
• ${prefix}okezone-news 
• ${prefix}sindo-news 
• ${prefix}tempo-news 
• ${prefix}antara-news 
• ${prefix}cnn-news 
• ${prefix}fajar-news 
• ${prefix}earthquake
• ${prefix}tvschedule
`)
break
case 'primbonmenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*PRIMBON*

- ramalan

• ${prefix}tarot 
• ${prefix}fengshui 
• ${prefix}haribaik 
• ${prefix}harisangar 
• ${prefix}harisial
• ${prefix}nagahari
• ${prefix}arahrezeki
• ${prefix}peruntungan 
• ${prefix}weton 
• ${prefix}karakter
• ${prefix}keberuntungan
• ${prefix}memancing
• ${prefix}masasubur
• ${prefix}zodiak
• ${prefix}shio
• ${prefix}nomorhoki
• ${prefix}artimimpi 
• ${prefix}artinama 
• ${prefix}ramaljodoh 
• ${prefix}ramaljodohbali 
• ${prefix}suamiistri 
• ${prefix}ramalcinta 
• ${prefix}cocoknama 
• ${prefix}pasangan 
• ${prefix}jadiannikah 
• ${prefix}sifatusaha 
• ${prefix}rezeki 
• ${prefix}pekerjaan 
• ${prefix}nasib 
• ${prefix}penyakit 
`)
break
case 'ownermenu':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
*DEVELOPER*

- pengaturan bot

• ${prefix}self
• ${prefix}public
• ${prefix}ban
• ${prefix}banchat
• ${prefix}setcmd
• ${prefix}listcmd
• ${prefix}delcmd
• ${prefix}lockcmd
• ${prefix}addmsg
• ${prefix}listmsg
• ${prefix}getmsg
• ${prefix}delmsg
• ${prefix}join
• ${prefix}leavegc
• ${prefix}setbio
• ${prefix}bcgroup
• ${prefix}bcall
• ${prefix}bcimage
• ${prefix}bcvideo
• ${prefix}bcaudio 
• ${prefix}bcloc 
• ${prefix}setppbot
• ${prefix}setexif
• ${prefix}block
• ${prefix}unblock 
`)
break
case 'othmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
reply(`
*Fitur Lainnya Terdapat Di Grup Official HanBotz*

https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ
`)
break
case 'menfess':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (m.isGroup) return replay(mess.privatee)
reply(`
*MENFESS*

• *${prefix}menfesstext* : mengirim teks secara rahasia
> _${prefix}menfesstext 6285807149213 | seseorang | hai_

• *${prefix}menfessimage* : mengirim gambar secara rahasia
> _balas / kirim gambar dengan caption_\n_${prefix}menfessimage Nomor Target | Dari | Pesan_\n_Contoh : *${prefix}menfessimage 6285807149213 | seseorang | hai*_

• *${prefix}menfessvideo* : mengirim video secara rahasia
> _balas / kirim video dengan caption_\n_${prefix}menfessvideo Nomor Target | Dari | Pesan_\n_Contoh : *${prefix}menfessvideo 6285807149213 | seseorang | hai*_

• *${prefix}menfessaudio* : mengirim audio secara rahasia
> _balas audio dengan caption_\n_${prefix}menfessaudio Nomor Target | Dari | Pesan_\n_Contoh : *${prefix}menfessaudio 6285807149213 | seseorang | hai*_
`)
break
case 'rulesnya':
reply(`
Dengan menggunakan bot ini maka anda *setuju* dengan syarat dan kondisi sebagai berikut:

- Tidak menelepon bot.
- Beri jeda waktu untuk mengirim perintah kepada bot.
- Data dan privasi anda terjaga dan aman.
- Data gambar, video, file, audio, dan dokumen yang anda kirim akan otomatis terhapus.
- Kami tidak menyimpan data pribadi anda di server.
- Kami tidak bertanggung jawab atas perintah anda kepada bot ini.
- Developer bot berhak memblokir nomor anda jika anda melakukan aktifitas yang merugikan kepada bot ini.


Dev by *_Han_* | Find Me On instagram.com/terserah_bomat
`)
break
case 'script':
reply (`Mau Ngapain 🤨`)
break
case 'owner': 
await hanbotz.sendMessage(m.chat, { text: 'https://instagram.com/terserah_bomat' }, { quoted: m })
break
case 'backup':
  if (!isCreator) return m.reply(mess.owner)
  hanbotz.sendMessage(m.chat, { document: fs.readFileSync('./database/database.json'), mimetype: 'json', fileName: `database.json`}, { quoted: m })
  break
case 'limit': case 'ceklimit':
let userrr = global.db.data.users[m.sender]
m.reply(`Limit : *${userrr.limit}*\nLimit Game : *${userrr.game}*`)
break
case 'cerpen':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
if (!q) return m.reply(`Kategori Apa?\n\n_List Kategori:_ #listcerpen`)
let cerpe = await cerpen(q)
m.reply(`• _*Title :*_ ${cerpe.title}\n• _*Author :*_ ${cerpe.author}\n• _*Category :*_ ${cerpe.kategori}\n• _*Pass Moderation :*_ ${cerpe.lolos}\n• _*Story :*_\n${cerpe.cerita}`)
db.data.users[m.sender].limit -= 1 
}
break
case 'listcerpen':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
m.reply(`• ${prefix}Cerpen Anak\n• ${prefix}Cerpen Bahasa Daerah\n• ${prefix}Cerpen Bahasa Inggris\n• ${prefix}Cerpen Bahasa Jawa\n• ${prefix}Cerpen Bahasa Sunda\n• ${prefix}Cerpen Budaya\n• ${prefix}Cerpen Cinta\n• ${prefix}Cerpen Cinta Islami\n• ${prefix}Cerpen Cinta Pertama\n• ${prefix}Cerpen Cinta Romantis\n• ${prefix}Cerpen Cinta Sedih\n• ${prefix}Cerpen Cinta Segitiga\n• ${prefix}Cerpen Cinta Sejati\n• ${prefix}Cerpen Galau\n• ${prefix}Cerpen Gokil\n• ${prefix}Cerpen Inspiratif\n• ${prefix}Cerpen Jepang\n• ${prefix}Cerpen Kehidupan\n• ${prefix}Cerpen Keluarga\n• ${prefix}Cerpen Kisah Nyata\n• ${prefix}Cerpen Korea\n• ${prefix}Cerpen Kristen\n• ${prefix}Cerpen Liburan\n• ${prefix}Cerpen Lingkungan\n• ${prefix}Cerpen Lucu\n• ${prefix}Cerpen Malaysia\n• ${prefix}Cerpen Mengharukan\n• ${prefix}Cerpen Misteri\n• ${prefix}Cerpen Motivasi\n• ${prefix}Cerpen Nasihat\n• ${prefix}Cerpen Nasionalisme\n• ${prefix}Cerpen Olahraga\n• ${prefix}Cerpen Patah Hati\n• ${prefix}Cerpen Penantian\n• ${prefix}Cerpen Pendidikan\n• ${prefix}Cerpen Pengalaman Pribadi\n• ${prefix}Cerpen Pengorbanan\n• ${prefix}Cerpen Penyesalan\n• ${prefix}Cerpen Perjuangan\n• ${prefix}Cerpen Perpisahan\n• ${prefix}Cerpen Persahabatan\n• ${prefix}Cerpen Petualangan\n• ${prefix}Cerpen Ramadhan\n• ${prefix}Cerpen Remaja\n• ${prefix}Cerpen Renungan\n• ${prefix}Cerpen Rindu\n• ${prefix}Cerpen Rohani\n• ${prefix}Cerpen Romantis\n• ${prefix}Cerpen Sastra\n• ${prefix}Cerpen Sedih\n• ${prefix}Cerpen Sejarah\n• ${prefix}Cerpen Slice Of Life\n• ${prefix}Cerpen Terjemahan\n• ${prefix}Cerpen Thriller`)
break
case 'quotefakta': case 'quotesfakta':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/faktaunik`)
                    m.reply(get_result.hasil)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quoteilham': case 'quotesilham':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotebijak': case 'quotesbijak':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                    m.reply(`*"${get_result.hasil.quotes}"*\n\n• *Author*: ${get_result.hasil.author}`)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotebacot': case 'quotesbacot':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/bacot`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotesindiran': case 'quotessindiran':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/sindiran`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotefakboy': case 'quotesfakboy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/pantunpakboy`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'botz': case 'hanbotz': case 'bot': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	if (!text) throw `Hi`
	let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id&cf=false`)
	if (anu.success === "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.") {
		return reply(`Aku tidak mengerti`)
		} else {
	return reply(anu.success)
	}
	}
	break
case 'ava': case 'pp': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!m.mentionedJid[0]) return reply(`tag orangnya`)
ppuser = await hanbotz.profilePictureUrl(m.mentionedJid[0], 'image')
                hanbotz.sendMessage(m.chat, { image: { url: ppuser }}, { quoted: m })
                }
                break
case 'infogc': case 'infogrup': case 'infogroup': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
	try {
ppuser = await hanbotz.profilePictureUrl(m.chat, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                let metadata = await hanbotz.groupMetadata(m.chat)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
                capnyaa = `
• Name : ${metadata.subject ? metadata.subject : "undefined"}
• Owner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}
• ID : ${metadata.id ? metadata.id : "undefined"}
• Made : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}
• Member : ${metadata.participants.length ? metadata.participants.length : "undefined"}
• Description :\n\n${metadata.desc}
`
                hanbotz.sendMessage(m.chat, { image: { url: ppuser }, caption: capnyaa }, { quoted: m })
                }
                break

case 'menfesstext':  case 'menfessteks': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (m.isGroup) return replay(mess.privatee)
if (!q) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
let [fess1, fess2, fess3] = text.split`|`
		if (!fess1) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess2) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess3) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		
		let users = fess1.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (fess1.startsWith('0')) {
			reply(`Gunakan kode negara\nContoh : 6285807149213`)
			} else {
				reply(`Pesan telah terkirim`)
				}
		
    textt = `*Hai, kamu menerima pesan rahasia*
    
Dari : ${fess2}
Pesan : ${fess3}`
    
    hanbotz.sendText(users, textt)
}
break
		case 'menfessgambar': case 'menfesspicture': case 'menfessimage': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (m.isGroup) return replay(mess.privatee)
if (!quoted) throw `_Reply/Kirim Gambar Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`

if (!/image/.test(mime)) throw `_Reply/Kirim Gambar Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
 if (/webp/.test(mime)) throw `_Reply/Kirim Gambar Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
 
let [fess1, fess2, fess3] = text.split`|`
		if (!fess1) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess2) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess3) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		
		let users = fess1.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (fess1.startsWith('0')) {
			reply(`Gunakan kode negara\nContoh : 6285807149213`)
			} else {
				reply(`Pesan telah terkirim`)
				}
			let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                    captionn =`*Hai, kamu menerima pesan rahasia*
    
Dari : ${fess2}
Pesan : ${fess3}`
                
                hanbotz.sendMessage(users, { image: { url: media }, caption: captionn })
            }
            break
case 'menfessvideo': case 'menfessvid': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (m.isGroup) return replay(mess.privatee)
if (!quoted) throw `_Reply/Kirim Video Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
if ((quoted.msg || quoted).seconds > 300) return m.reply('Maksimal Video 5 Menit!')
if (!/video/.test(mime)) throw `_Reply/Kirim Video Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
 if (/webp/.test(mime)) throw `_Reply/Kirim Video Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
 
let [fess1, fess2, fess3] = text.split`|`
		if (!fess1) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess2) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess3) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		
		let users = fess1.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (fess1.startsWith('0')) {
			reply(`Gunakan kode negara\nContoh : 6285807149213`)
			} else {
				reply(`Pesan telah terkirim`)
				}
			let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                    captionn =`*Hai, kamu menerima pesan rahasia*
    
Dari : ${fess2}
Pesan : ${fess3}`
                
                hanbotz.sendMessage(users, { video: { url: media }, caption: captionn })
            }
            break
case 'menfessaudio': case 'menfessaud': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (m.isGroup) return replay(mess.privatee)
if (!quoted) throw `_Reply Audio Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
if (!/audio/.test(mime)) throw `_Reply Audio Dengan Caption:_\nFormat : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
 
let [fess1, fess2, fess3] = text.split`|`
		if (!fess1) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess2) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		if (!fess3) throw `Format : Nomor Target | Dari | Pesan\n\nContoh : *${prefix + command} 6285807149213 | seseorang | hai*`
		
		let users = fess1.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (fess1.startsWith('0')) {
			reply(`Gunakan kode negara\nContoh : 6285807149213`)
			} else {
				reply(`Pesan telah terkirim`)
				}
			let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                    captionn =`*Hai, kamu menerima pesan rahasia*
    
Dari : ${fess2}
Pesan : ${fess3}`
                
  let kirimm = await hanbotz.sendMessage(users, { audio: { url: media }, mimetype: 'audio/mp4' })
  await hanbotz.sendMessage(users, {text: captionn }, {quoted: kirimm})
            }
            break
case 'ttsid': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) reply (`teks nya?`)
media = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
audio = await getBuffer(media.result)
hanbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
	}
break
case 'ttsen': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) reply (`teks nya?`)
media = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
audio = await getBuffer(media.result)
hanbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
	}
break
case 'ttsjp': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) reply (`teks nya?`)
media = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_japan?query=${text}`)
audio = await getBuffer(media.result)
hanbotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
	}
break 
case 'gcc': case 'groupcreate': {
		if (!isCreator) throw mess.owner
		if (!text) m.reply(`namanya?`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupCreate(`${text}`, [users]).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
		}
		break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
            default:
            // Autosticker pc
        if (!m.isGroup) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await hanbotz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let mediac = await quoted.download()
                await hanbotz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
            
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
              
		if (command) {
reply(`*${prefix}${command}*\n\nTidak Ada Di Menu`)
}


		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hanbotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})