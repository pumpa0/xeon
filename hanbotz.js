
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
let { msgFilter } = require('./lib/antispam')
const { color, bgcolor } = require("./lib/color")
const cerpen = require('./lib/cerpen.js')

//__________ read database __________ //
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let siapakahaku = db.data.game.siapakahaku = []
let vote = db.data.others.vote = []

// __________ //
module.exports = hanbotz = async (hanbotz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hanbotz.decodeJid(hanbotz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group __________
        const groupMetadata = m.isGroup ? await hanbotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	// __________ User __________
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
    // __________ Data Group __________
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		// __________ Bot __________
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hanbotz.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hanbotz.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        cron.schedule('00 23 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitGame = isPremium ? global.limitawal.premium : global.limitawal.game
            for (let jid of user) global.db.data.users[jid].game = limitGame
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        cron.schedule('00 23 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitGame = isPremium ? global.limitawal.premium : global.limitawal.game
            for (let jid of user) global.db.data.users[jid].game = limitGame
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hanbotz.setStatus(`${hanbotz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return 
        let gclink = (`https://chat.whatsapp.com/`+await hanbotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        if (isAdmins) return
        if (isCreator) return
m.reply(`「 *ANTI LINK* 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
await sleep(1000)
        hanbotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        // anti virtex
if (budy.length > 3500) {
m.reply('Virtex?\n'.repeat(300))
if (!isBotAdmins) return 
await sleep(2000)
hanbotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}     
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isCreator) {
      return
      }

        // Respon Cmd with media
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
	if (('family100'+m.chat in _family100) && isCmd) {
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
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Lagu\n\nJawaban Benar 🎉`)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Kuis Matematika\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math < mode >`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Gambar\n\nJawaban Benar 🎉`)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Kata\n\nJawaban Benar 🎉`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Cak Lontong\n\nJawaban Benar 🎉\n*${deskripsi}*`)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Kalimat\n\nJawaban Benar 🎉`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Lirik\n\nJawaban Benar 🎉`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Tebakan\n\nJawaban Benar 🎉`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`Tebak Tebakan\n\nJawaban Benar 🎉`)
                delete siapakahaku[m.sender.split('@')[0]]
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
	    hanbotz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
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

Silahkan pilih suit di chat masing²
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
	db.data.users[m.sender].game -= 1
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hanbotz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	db.data.users[m.sender].game -= 1
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
// UCAPAN WAKTU ( MyMans APIs)
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
countDownDate = new Date("2023-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit`
        
if(isPremium){
var stty = 'User Premium 🔥'
                         }
if(isAdmins){
var stty = 'Admin Group 🎖️'
                         }
if(!isCreator && !isPremium && !isAdmins){
var stty = 'User ⭐'
                          }
                       
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
        if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
        	    if (!text) throw `Contoh: .tictactoe < nama room >`
        let roms = args[1]
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
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
db.data.users[m.sender].game -= 1 
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
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hanbotz.sendText(m.chat, `Berhasil Delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            	if (!m.isGroup) throw mess.group
            if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
            if (m.mentionedJid[0] === botNumber) return m.reply(`Tidak bisa bermain dengan Bot !`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
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
            case '/chat': {
                if (!isCreator) return
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hanbotz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hanbotz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hanbotz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hanbotz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hanbotz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hanbotz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hanbotz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (!m.isGroup) throw mess.group
		if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)\n\n_Ketik *nyerah* Untuk Menyerah_` : `\n\n_Ketik *nyerah* Untuk Menyerah_`}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hanbotz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
                db.data.users[m.sender].game -= 1 
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hanbotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    db.data.users[m.sender].game -= 1 
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    await m.reply(`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}`)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
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
                    }
                } 
            }
            break
            case 'kuismath': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].game < 1) return m.reply('Limit Game Anda Telah Habis') 
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                db.data.users[m.sender].game -= 1 
                hanbotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
            case '/join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hanbotz.groupAcceptInvite(result).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case '/leave': {
                if (!isCreator) throw mess.owner
                await hanbotz.groupLeave(m.chat).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case '/setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break
	case 'kick': case '/kill': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'remove')
	}
	break
	case 'add': case '/summon': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case '/block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.updateBlockStatus(users, 'block').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case '/unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Text ?'
                await hanbotz.groupUpdateSubject(m.chat, text)
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Text ?'
                await hanbotz.groupUpdateDescription(m.chat, text)
            }
            break
          case '/setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                await hanbotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isCreator) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                await hanbotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
let teks = `══✪〘 *Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : '🗿'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                hanbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins && !isCreator) throw mess.admin
            hanbotz.sendMessage(m.chat, { text : q ? q : '🗿' , mentions: participants.map(a => a.id)} )
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
		db.data.users[m.sender].limit -= 1 
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
            
               case 'group': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[0] === 'close'){
                    await hanbotz.groupSettingUpdate(m.chat, 'announcement')
                } else if (args[0] === 'open'){
                    await hanbotz.groupSettingUpdate(m.chat, 'not_announcement')
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                  //  await hanbotz.sendButtonText(m.chat, buttons, `Mode Group`, hanbotz.user.name, m) //

m.reply(`*Example:* group open/close`)
             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
             if (args[0] === 'open'){
                await hanbotz.groupSettingUpdate(m.chat, 'unlocked')
             } else if (args[0] === 'close'){
                await hanbotz.groupSettingUpdate(m.chat, 'locked')
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hanbotz.sendButtonText(m.chat, buttons, `Mode Edit Info`, hanbotz.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                   // await hanbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, hanbotz.user.name, m) //
                   m.reply(`*Example:* antilink on/off`)
                }
             }
             break
             case '/mute': {
                if (!m.isGroup) throw mess.group
                if (!isCreator) return
if (!text) return m.reply(`*Example*: mute on/off`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hanbotz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hanbotz.user.name} telah di unmute di group ini !`)
                } 
             }
             break
            case 'linkgroup': case 'linkgc': case 'linkgrup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hanbotz.groupInviteCode(m.chat)
                hanbotz.sendText(m.chat, `${groupMetadata.subject}\n\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'temporary': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Masukkan value on/off'
                if (args[0] === 'on') {
                    await hanbotz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await hanbotz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
            	if (!isAdmins && !isCreator) throw mess.admin
                if (!m.quoted) throw `Reply Pesan`
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hanbotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} han ganteng`
                let getGroups = await hanbotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Join',
                                    url: 'https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: '.menu'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hanbotz.send5ButImg(i, txt, hanbotz.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text nya mana?\n\nExample : ${prefix + command} Han Ganteng`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Join',
                                    url: 'https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: '.menu'
                                }
                             }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hanbotz.send5ButImg(yoi, txt, hanbotz.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `• @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━• *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} • *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hanbotz.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hanbotz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
            	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hanbotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hanbotz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hanbotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
             	if (!isAdmins && !isCreator) throw mess.admin
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hanbotz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `Kirim/Reply Gambar Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hanbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                m.reply(`wait..`)
                let media = await quoted.download()
                let encmedia = await hanbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply stiker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`wait...`)
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hanbotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': case 'tovid':{
                if (!quoted) throw 'Reply stiker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`wait...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hanbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            
            case 'togif': {
                if (!quoted) throw 'Reply Stiker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`wait...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hanbotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: `Convert Webp To Video` }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
		if (!quoted) throw `Kirim/Reply gambar dengan caption ${prefix}tourl`
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['JdK4z61ETEP6g3pB5wUNNiKL','i3BYBradQ7Z2Xdq5Y79yCd93']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hanbotz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
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
                if (!text) throw `Example : ${prefix + command} story wa anime`
                m.reply(`searching...`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `• No : ${no++}\n• Type : ${i.type}\n• Video ID : ${i.videoId}\n• Title : ${i.title}\n• Views : ${i.views}\n• Duration : ${i.timestamp}\n• Upload At : ${i.ago}\n• Author : ${i.author.name}\n• Url : ${i.url}\n\n─────────────────\n\n`
                }
                hanbotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} kenapa wibu bau bawang`
                m.reply(`searching...`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        m.reply(`searching...`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
hanbotz.sendMessage(m.chat, { image: { url: images }, caption: `*Query* : ${text}\n*Media Url* : ${images}` }, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                m.reply(`searching...`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
• Title : ${anu.title}
• Ext : Search
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
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/*** 128kbps`
                m.reply(`searching...`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
               let iniaud = await (`$media.dl_link`)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hanbotz.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, m)
                hanbotz.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted : m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/***`
                m.reply(`wait...`)
                let quality = args[1] ? args[1] : '480'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                
                hanbotz.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title} (${args[1] || '480p'}).mp4`}, { quoted : m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                m.reply(`wait...`)
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hanbotz.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, m)
                hanbotz.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted : m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
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
            case 'pinterest': {
            	if (!text) throw `Masukkan Query`
		let { pinterest } = require('./lib/scraper')
                pint = await pinterest(text)
                result = pint[Math.floor(Math.random() * pint.length)]
                hanbotz.sendMessage(m.chat, { image: { url: result }, caption: '• Media Url : '+result }, { quoted: m })
            }
            break
	    case 'couple': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hanbotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hanbotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
            }
	    break 
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                walp = await wallpaper(text)
                result = walp[Math.floor(Math.random() * walp.length)]
                hanbotz.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`}, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                wkm = await wikimedia(text)
                result = wkm[Math.floor(Math.random() * wkm.length)]
                hanbotz.sendMessage(m.chat, { image: { url: result.image }, caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`}, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                m.reply(`~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`)
                db.data.users[m.sender].limit -= 1 
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
		        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                inite = (`${anu.result.message}`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'HanBotz',
                    buttons: buttons,
                    headerType: 2
                }
                m.reply(inite)
                db.data.users[m.sender].limit -= 1 
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285731855426`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} jatuh`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Han, 7, 7, 2005, loli, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Han, 7, 7, 2005, loli, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Han, 7, 7, 2005, loli, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Han, 7, 7, 2005, loli, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Han`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Han|7|7|2005`
                let [nama, tgl, bln, thn] = text.split`|`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Han|loli`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6|12|2020`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28|12|2021`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Han|1|2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`|`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Han|7|7|2005|2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`|`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7|7|2005`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Han|7|7|2005`
                let [nama, tgl, bln, thn] = text.split`|`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Han|7|7|2005`
                let [nama, tgl, bln, thn] = text.split`|`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12|1|2022`
                let [tgl, bln, thn] = text.split`|`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12|1|2022|28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`|`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 2005 5 5 [ tahun, bulan, tanggal ]`
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
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hanbotz.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok?link=${text}`)
                hanbotz.sendMessage(m.chat, { video: { url: anu } }, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok?link=${text}`)
                hanbotz.sendMessage(m.chat, { video: { url: anu}, caption: `${text}`}, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktokaudio?link=${text}`)
                m.reply(`Fitur Error`)
                hanbotz.sendMessage(m.chat, {document: { url: anu.hasil.url }, mimetype: 'audio/mpeg', fileName: `Tiktok Audio`}, { quoted : m })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                    let anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
                    hanbotz.sendMedia(m.chat, anu.respon, '', `Download Url Instagram From ${text}`, m)
                } 
            break
case 'igstori': case 'igstory':
                    let anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)
                    hanbotz.sendMedia(m.chat, anu[0].url, '', `Download Url Instagram From ${text}`, m)
                    break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
                hanbotz.sendMessage(m.chat, { video: { url: anu.respon } }, { quoted: m })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                ction = (`${anu.desc}`)
                let buttons = [
                    {buttonId: `twittermp3`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.HD || anu.SD },
                    caption: ction,
                    footer: 'HanBotz',
                    buttons: buttons,
                    headerType: 5
                }
                hanbotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                hanbotz.sendMessage(m.chat, {document: { url: anu.audio }, mimetype: 'audio/mpeg', fileName: `Twitter Audio by hanbotz.xyz.mp3`}, { quoted : m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hanbotz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hanbotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hanbotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		
		hanbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		
		hanbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		
		hanbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		
		hanbotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.sprem.replyheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hanbotz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=11'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.10'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                
                let media = await hanbotz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hanbotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hanbotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hanbotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
            case 'public': {
                if (!isCreator) throw mess.owner
                hanbotz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hanbotz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
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
                respon = `• *Speed* ${latensi.toFixed(4)} _Second_
• *Runtime* : ${runtime(process.uptime())}`
                m.reply(respon)
            }
            break
            case '.owner': {
                hanbotz.sendContact(m.chat, global.owner, m)
            }
            break
case '/': case 'botz': case 'hanbotz': {
	if (!text) throw `HanBotz Disini (~￣³￣)~`
	let anu = await fetchJson(`https://api.akuari.my.id/simi/simi2?query=${text}`)
	jawabni = (`${anu.respon}`)
	m.reply(jawabni)
	}
	break
case 'darkjoke': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                let anu = (`https://api.akuari.my.id/randomimage/darkjokes1`)
                hanbotz.sendMessage(m.chat, { image: { url: anu }, caption: `DarkJoke` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
            }
	    break
case 'meme': {
	m.reply(`_Maintenance_`)
            }
	    break
case 'juliancraft': case 'jcraft':
	let jcc = await fetchJson(`https://minecraftpocket-servers.com/api/?object=servers&element=detail&key=fsMiIFou6d7gJL66d3ai1HqcIvuFABOWLrc`)
	jumc = (`_*Julian Craft*_\n\n*Status*: [ ${jcc.is_online} ]  (0=offline 1=online)\n\n*Name*: ${jcc.name}\n*Address*: ${jcc.address}\n*Port*: ${jcc.port}\n*Version*: ${jcc.version}\n*Players*: ${jcc.players} / ${jcc.maxplayers}\n\n*Votes*: ${jcc.votes}\n*Rank*: ${jcc.rank}\n*Score*: ${jcc.score}\n\n*Last Check*: ${jcc.last_check}\n*Last_Online*: ${jcc.last_online}\n\n*Url*: ${jcc.url}`)
	m.reply(jumc)
	        break

// maker
case 'blackpink':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} HanBotz`)
                    m.reply(`Loading...`)
                    textnya = args.join(" ")
blkp = (`https://api.akuari.my.id/ephoto/blackpink?text=${textnya}`)
hanbotz.sendMessage(m.chat, { image: { url: blkp }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
break
case 'pornhub':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Han&Botz`)
                    m.reply(`Loading...`)
                    ini_nama = args.join(" ").split("&")
                    text1 = ini_nama[0].trim()
                    text2 = ini_nama[1].trim()
phl = (`https://api.akuari.my.id/ephoto/pornhub?text=${text1}&text_2=${text2}`)
hanbotz.sendMessage(m.chat, { image: { url: phl }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
break
case 'quotefakta' :
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/faktaunik`)
                    m.reply(get_result.hasil)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quoteilham':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`)
                    m.reply(get_result.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotebijak':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                    m.reply(`*"${get_result.hasil.quotes}"*\n\n• *Author*: ${get_result.hasil.author}`)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotebacot':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/bacot`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotesindiran':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/sindiran`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'quotefakboy':
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    get_result = await fetchJson(`https://api.akuari.my.id/randomtext/pantunpakboy`)
                    m.reply(get_result.hasil.result)
                    db.data.users[m.sender].limit -= 1 
                    break
case 'shortlink' :
if (!text) throw `Masukan Link Yang Ingin Di Perpendek!`
pendek = await fetchJson(`https://hardianto.xyz/api/short/tinyurl?url=${text}&apikey=hardianto`)
m.reply(pendek.result)
break
case 'translate' : case 'terjemahan' : case 'terjemah' :
if (!text) throw `Masukkan Text (Inggris)`
terj = await fetchJson (`https://zahirr-web.herokuapp.com/api/translate?kata=${text}&apikey=zahirgans`)
m.reply(`• *Arti:* ${terj.result.text}\n• *Typo*: ${terj.result.typo}`)
break
case 'ssweb' :
if (!text) throw `Masukkan Link Web!`
m.reply(`Loading...`)
ssweb = (`https://api.akuari.my.id/other/ssweb?link=${text}`)
hanbotz.sendMessage(m.chat, { image: { url: ssweb }, caption: `Web ${text}` }, { quoted: m })
break
case 'hartatahta': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} HanBotz`)
                    ini_txt = args.join(" ")
                    htp = (`https://api.akuari.my.id/canvas/hartatahta?text=${text}`)
                        hanbotz.sendMessage(m.chat, { image: { url: htp }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
                    break

case 'menu': {
let user = global.db.data.users[m.sender]
const sections = [
                     {
                    title: "Main Menu",
 rows: [
                          
                          {
                            "title": "GROUP",
                            "rowId": ".groupmenu",
                            "description": "to help admin in the group"
                          },
                          {
                            "title": "DOWNLOAD",
                            "rowId": ".downmenu",
                            "description": "you can download from the link"
                           },
                           {
                            "title": "YOUTUBE",
                            "rowId": ".ytmenu",
                            "description": "download videos/music from youtube"
                           },
                           {
                            "title": "SEARCH",
                            "rowId": ".srch",
                            "description": "find what you want to know"
                           },
                           {
                            "title": "TEXT",
                            "rowId": ".textmenu",
                            "description": "find unique text"
                           },
                           {
                            "title": "GAME",
                            "rowId": ".gamee",
                            "description": "play with your friends"
                          },
                          {
                            "title": "PRIMBON",
                            "rowId": ".primbonn",
                            "description": "prophecy about you"
                           },
                           {
                            "title": "CONVERT",
                            "rowId": ".convertt",
                            "description": "change as you want"
                           },
                           {
                            "title": "MAKER",
                            "rowId": ".makes",
                            "description": "create image with text"
                           },
                           {
                            "title": "STICKER",
                            "rowId": ".stick",
                            "description": "make stickers as you like"
                           },
                           {
                            "title": "ISLAMIC",
                            "rowId": ".islamm",
                            "description": "stay halal brader"
                           },
                           {
                            "title": "VOICE CHANGER",
                            "rowId": ".voicec",
                            "description": "change the voice to be unique"
                          },
                          {
                            "title": "QUOTE",
                            "rowId": ".quot",
                            "description": "random quotes"
                          },
                           {
                            "title": "MEME",
                            "rowId": ".memes",
                            "description": "daily memes and create your own memes"
                           },
                           {
                            "title": "CERPEN",
                            "rowId": ".listcerpen",
                            "description": "short story"
                           },
                          {
                            "title": "DATABASE",
                            "rowId": ".datab",
                            "description": "manage data"
                          },
                          {
                            "title": "OPTION",
                            "rowId": ".optt",
                            "description": "bot settings"
                           }
                           ]
                           },
                           {
                    title: "Other Menu",
 rows: [
                          {
                            "title": "DONATE",
                            "rowId": ".donasi",
                            "description": "support HanBotz"
                          }]
                           },
                           ]

const listMessage = {
	text: `「 _*INFO BOT*_ 」

• *Name  :*  HanBotz
• *Prefix  :*  \`\`\`Multi\`\`\`
• *Runtime  :*  ${runtime(process.uptime())}
• *Time Server  :*  ${jmn} WIB
• *Date Server  :*  ${date}
`,
  footer: "© hanbotz.xyz",
  title: `「 _*INFO USER*_ 」
	
• *Name  :*  ${pushname}
• *Limit  :*  ${user.limit} | ${user.game}
• *Status  :*  ${stty}
• *Number  :*  wa.me/${m.sender.split("@")[0]}
`,
  buttonText: "MENU",
  sections
}

hanbotz.sendMessage(m.chat, listMessage, {quoted: m})
} 
break
case 'donasi': case 'donate': 
sawer = `*｢  DONATE  ｣*\n\nlink.hanbotz.xyz/donasi\n`
m.reply(sawer)
break
case 'groupmenu': 
if (!m.isGroup) throw mess.group
gcmenu = `
❏ 𝗚𝗥??𝗨𝗣
• ${prefix}linkgroup
• ${prefix}add < 62xx >
• ${prefix}kick < @user >
• ${prefix}promote < @user >
• ${prefix}demote < @user >
• ${prefix}hidetag < text >
• ${prefix}tagall < text >
• ${prefix}antilink < on/off >
• ${prefix}temporary < on/off >
• ${prefix}setppgc < image >
• ${prefix}setname < text >
• ${prefix}setdesc < text >
• ${prefix}group < open/close >
`
m.reply(gcmenu)
break
case 'downmenu':
downmenu = `
❏ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥
• ${prefix}tiktoknowm < url >
• ${prefix}tiktokwm < url >
• ${prefix}tiktokmp3 < error >
• ${prefix}twitter < url >
• ${prefix}twittermp3 < url >
`
m.reply(downmenu)
break
case 'ytmenu':
ytmenu = `
❏ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘
• ${prefix}play < query >
• ${prefix}ytmp3 < url >
• ${prefix}ytmp4 < url >
• ${prefix}ytsearch < query >
• ${prefix}getmusic < query >
• ${prefix}getvideo < query >
`
m.reply(ytmenu)
break
case 'srch':
srch = `
❏ 𝗦𝗘𝗔𝗥𝗖𝗛
• ${prefix}google < query >
• ${prefix}gimage < query >
• ${prefix}pinterest < query >
• ${prefix}wallpaper < query >
• ${prefix}wikimedia < query >
• ${prefix}ringtone < query >
`
m.reply(srch)
break
case 'textmenu':
ttxm = `
❏ 𝗧𝗘𝗫𝗧
• ${prefix}halah < reply >
• ${prefix}hilih < reply >
• ${prefix}huluh < reply >
• ${prefix}heleh < reply >
• ${prefix}holoh < reply >
• ${prefix}styletext < text >
• ${prefix}translate < text en>
`
m.reply(ttxm)
break
case 'gamee':
gamee = `
❏ 𝗚𝗔𝗠𝗘
• ${prefix}family100
• ${prefix}tebak < option >
• ${prefix}math < mode >
• ${prefix}suitpvp < @tag >
• ${prefix}tictactoe < room >
• ${prefix}delttt
`
m.reply(gamee)
break
case 'primbonn':
primbonn = `
❏ 𝗣𝗥𝗜𝗠𝗕𝗢𝗡
• ${prefix}nomorhoki
• ${prefix}artimimpi
• ${prefix}artinama
• ${prefix}ramaljodoh
• ${prefix}ramaljodohbali
• ${prefix}suamiistri
• ${prefix}weton
• ${prefix}karakter
• ${prefix}keberuntungan
• ${prefix}memancing
• ${prefix}masasubur
• ${prefix}zodiak
• ${prefix}shio
• ${prefix}ramalcinta
• ${prefix}cocoknama
• ${prefix}pasangan
• ${prefix}jadiannikah
• ${prefix}sifatusaha
• ${prefix}rezeki
• ${prefix}pekerjaan
• ${prefix}nasib
• ${prefix}penyakit
• ${prefix}tarot
• ${prefix}fengshui
• ${prefix}haribaik
• ${prefix}harisangar
• ${prefix}harisial
• ${prefix}nagahari
• ${prefix}arahrezeki
• ${prefix}peruntungan
`
m.reply(primbonn)
break
case 'convertt':
convertt = `
❏ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧
• ${prefix}ssweb < url >
• ${prefix}tourl < image >
• ${prefix}shortlink < url >
`
m.reply(convertt)
break
case 'makes':
makee = `
❏ 𝗠𝗔𝗞𝗘𝗥
• ${prefix}led
• ${prefix}blackpink
• ${prefix}neon-love
• ${prefix}3dgolden
• ${prefix}christmas
• ${prefix}3drainbow
• ${prefix}magma
• ${prefix}space
• ${prefix}transformer
• ${prefix}thunder
• ${prefix}angel
• ${prefix}queen
• ${prefix}bear
• ${prefix}graffiti
_*Example:*_ .led HanBotz

• ${prefix}pornhub
• ${prefix}avengers
• ${prefix}mountain
• ${prefix}captainamerica
_*Example:*_ .pornhub Han&Botz
`
m.reply(makee)
break
case 'stick':
stick = `
❏ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥
• ${prefix}ttp < text >
• ${prefix}attp < text >
• ${prefix}stiker < reply >
• ${prefix}togif < reply >
• ${prefix}tovideo < reply >
• ${prefix}toimage < reply >
• ${prefix}emojimix < 😂+😭 >
`
m.reply(stick)
break
case 'islamm':
islamm = `
❏ 𝗜𝗦𝗟𝗔𝗠𝗜𝗖
• ${prefix}iqra
• ${prefix}hadist
• ${prefix}alquran
• ${prefix}juzamma
• ${prefix}tafsirsurah
`
m.reply(islamm)
break
case 'voicec':
voicec = `
❏ 𝗩𝗢𝗜𝗖𝗘 𝗖𝗛𝗔𝗡𝗚𝗘𝗥
• ${prefix}fat 
• ${prefix}fast
• ${prefix}slow
• ${prefix}robot
• ${prefix}tupai
• ${prefix}deep
• ${prefix}bass
• ${prefix}blown
• ${prefix}reverse
• ${prefix}earrape
_*Example:*_  < reply audio > .bass
`
m.reply(voicec)
break
case 'quot':
quot = `
❏ 𝗤𝗨𝗢𝗧𝗘
• ${prefix}quotebijak
• ${prefix}quotefakta
• ${prefix}quotebacot
• ${prefix}quoteilham
• ${prefix}quotefakboy
• ${prefix}quotesindiran
• ${prefix}quotesanime
`
m.reply(quot)
break
case 'memes':
memes = `
❏ 𝗠𝗘𝗠𝗘
• ${prefix}meme
• ${prefix}darkjoke
• ${prefix}smeme < text >
• ${prefix}smeme2 < text1&text2 >
`
m.reply(memes)
break
case 'datab':
if (!isCreator) throw mess.owner
datab = `
❏ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘
• ${prefix}addmsg
• ${prefix}listmsg
• ${prefix}getmsg
• ${prefix}delmsg
• ${prefix}setcmd
• ${prefix}listcmd
• ${prefix}delcmd
• ${prefix}lockcmd
`
m.reply(datab)
break
case 'optt':
if (!isCreator) throw mess.owner
optt = `
❏ ??𝗣𝗧𝗜𝗢𝗡
• ${prefix}join
• ${prefix}chat
• ${prefix}react
• ${prefix}bcall
• ${prefix}bcgc
• ${prefix}leave
• ${prefix}setexif
• ${prefix}block
• ${prefix}unblock
• ${prefix}setppbot
`
m.reply(optt)
break
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hanbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
		if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hanbotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           m.reply(`_Loading..._`)
           await hanbotz.sendMedia(m.chat, `https://api.akuari.my.id/other/${command}?text=${text}`, 'Han', 'IG: @terserah_bomat', m, {asSticker: true})
         }
         break
	       case 'smeme2': case 'stickmeme2': case 'stikmeme2': case 'stickermeme2': case 'stikermeme2': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} _text1&text2_`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('&')[0] ? text.split('&')[0] : '-'
            bawah = text.split('&')[1] ? text.split('&')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = (`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`)
	        let FaTiH = await hanbotz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} _text_`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            bawah = args.join(" ")
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = (`https://api.memegen.link/images/custom/${encodeURIComponent(`%20`)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`)
	        let FaTiH = await hanbotz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	case '/react': case '/r': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hanbotz.sendMessage(m.chat, reactionMessage)
            }
            break  
            
case 'led': 
case 'neon-love':
case '3dgolden':
case 'christmas':
case '3drainbow':
case 'magma':
case 'space':
case 'transformer':
case 'thunder':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} HanBotz`)
                    m.reply(`_Loading..._`)
                    ini_txt = args.join(" ")
                    hts = (`https://api.akuari.my.id/textpro/${command}?text=${text}`)
                        hanbotz.sendMessage(m.chat, { image: { url: hts }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
                    break
case 'angel':
case 'queen':
case 'bear':
case 'graffiti':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} HanBotz`)
                    m.reply(`_Loading..._`)
                    ini_txt = args.join(" ")
                    htr = (`https://api.akuari.my.id/ephoto/${command}?text=${text}`)
                        hanbotz.sendMessage(m.chat, { image: { url: htr }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
                    break
case 'mountain':
case 'captainamerica':
case 'avengers':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Han&Botz`)
                    m.reply(`_Loading..._`)
                    ini_nama = args.join(" ").split("&")
                    text1 = ini_nama[0].trim()
                    text2 = ini_nama[1].trim()
phs = (`https://api.akuari.my.id/ephoto/${command}?text=${text1}&text_2=${text2}`)
hanbotz.sendMessage(m.chat, { image: { url: phs }, caption: `HanBotz` }, { quoted: m })
                db.data.users[m.sender].limit -= 1 
break
case 'cerpen':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis') 
if (!q) return m.reply(`Kategori Apa?\n\n_List Kategori:_ .listcerpen`)
let cerpe = await cerpen(q)
m.reply(`• _*Title :*_ ${cerpe.title}\n• _*Author :*_ ${cerpe.author}\n• _*Category :*_ ${cerpe.kategori}\n• _*Pass Moderation :*_ ${cerpe.lolos}\n• _*Story :*_\n${cerpe.cerita}`)
db.data.users[m.sender].limit -= 1 
}
break
case 'listcerpen':
m.reply(`❏ 𝗖𝗘𝗥𝗣??𝗡 \n• ${prefix}Cerpen Anak\n• ${prefix}Cerpen Bahasa Daerah\n• ${prefix}Cerpen Bahasa Inggris\n• ${prefix}Cerpen Bahasa Jawa\n• ${prefix}Cerpen Bahasa Sunda\n• ${prefix}Cerpen Budaya\n• ${prefix}Cerpen Cinta\n• ${prefix}Cerpen Cinta Islami\n• ${prefix}Cerpen Cinta Pertama\n• ${prefix}Cerpen Cinta Romantis\n• ${prefix}Cerpen Cinta Sedih\n• ${prefix}Cerpen Cinta Segitiga\n• ${prefix}Cerpen Cinta Sejati\n• ${prefix}Cerpen Galau\n• ${prefix}Cerpen Gokil\n• ${prefix}Cerpen Inspiratif\n• ${prefix}Cerpen Jepang\n• ${prefix}Cerpen Kehidupan\n• ${prefix}Cerpen Keluarga\n• ${prefix}Cerpen Kisah Nyata\n• ${prefix}Cerpen Korea\n• ${prefix}Cerpen Kristen\n• ${prefix}Cerpen Liburan\n• ${prefix}Cerpen Lingkungan\n• ${prefix}Cerpen Lucu\n• ${prefix}Cerpen Malaysia\n• ${prefix}Cerpen Mengharukan\n• ${prefix}Cerpen Misteri\n• ${prefix}Cerpen Motivasi\n• ${prefix}Cerpen Nasihat\n• ${prefix}Cerpen Nasionalisme\n• ${prefix}Cerpen Olahraga\n• ${prefix}Cerpen Patah Hati\n• ${prefix}Cerpen Penantian\n• ${prefix}Cerpen Pendidikan\n• ${prefix}Cerpen Pengalaman Pribadi\n• ${prefix}Cerpen Pengorbanan\n• ${prefix}Cerpen Penyesalan\n• ${prefix}Cerpen Perjuangan\n• ${prefix}Cerpen Perpisahan\n• ${prefix}Cerpen Persahabatan\n• ${prefix}Cerpen Petualangan\n• ${prefix}Cerpen Ramadhan\n• ${prefix}Cerpen Remaja\n• ${prefix}Cerpen Renungan\n• ${prefix}Cerpen Rindu\n• ${prefix}Cerpen Rohani\n• ${prefix}Cerpen Romantis\n• ${prefix}Cerpen Sastra\n• ${prefix}Cerpen Sedih\n• ${prefix}Cerpen Sejarah\n• ${prefix}Cerpen Slice Of Life\n• ${prefix}Cerpen Terjemahan\n• ${prefix}Cerpen Thriller`)
break
case 'backup':
  if (!isCreator) return m.reply(mess.owner)
  hanbotz.sendMessage(m.chat, { document: fs.readFileSync('./src/database.json'), mimetype: 'json', fileName: `database ${jmn} ${date}.json`}, { quoted: m })
  break
case '/gcc': case 'groupcreate': {
		if (!isCreator) throw mess.owner
		if (!text) m.reply(`namanya?`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hanbotz.groupCreate(`${text}`, [users]).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
		}
		break
case 'idgc': case 'idgrup': case 'idgroup': 
if (!m.isGroup) throw mess.group
let metadata = await hanbotz.groupMetadata(m.chat)
m.reply(`${metadata.id}`)
break
case 'limit': case 'ceklimit':
let userrr = global.db.data.users[m.sender]
m.reply(`*｢  LIMIT  ｣*\n\n*Harian:* ${userrr.limit}\n*Game:* ${userrr.game}\n\n_Note:_ Limit Akan Direset Pada Pukul 12 Siang dan 11 Malam\n`)
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
            default:
            
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
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
