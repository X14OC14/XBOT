var fetch = require('node-fetch');

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah XIAOCIA-Bot Whatsapp Yang Dikembangkan Oleh Mafy, Saya Bernama XIAOCIA, Saya Dibuat Oleh Mafy Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://xiaocia.xyz atau hubungi langsung dia dengan mengetik .owner'
await m.reply(wait)
  var js = await fetch(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${lann}`)
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['info'];
handler.premium = false
module.exports = handler;
