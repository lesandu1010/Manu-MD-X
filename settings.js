//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : 𝚜𝚊𝚍𝚞𝚠𝚊 -𝙼𝙳
//  * @author : 𝚂𝙰𝙳𝚄𝚆𝙰 Official
//  * @youtube : 💗🫶
//  * @description : 𝚂𝙰𝙳𝚄𝚆𝙰-𝙼𝙳 ,A Multi-functional whatsapp user bot.
//*
//*
//base by 𝚂𝙰𝙳𝚄𝚆𝙰 Official
//GitHub: 
//WhatsApp: +947𝟽𝟺𝟽𝟼𝟾𝟸𝟽𝟿
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: 𝚂𝙰𝙳𝚄𝚆𝙰.
//   * Credit To Manul Official
//   * © 2024 𝚂𝙰𝙳𝚄𝚆𝙰-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&PQUTxLAT#QaaTfD5gbeiRU7PCOr-07uAMXuuqWUMy5qxy_3y2LaQ", // ඔයාගෙ සෙසන් එක දාගන්න / Put Your Session_id Here !!! 💚
MONGODB: process.env.MONGODB || "", // ඔයාගෙ Mongodb Url එක දාගන්න / Put Your Mongodb Url Here !!! 💚
};
