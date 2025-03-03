const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+265981970298";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_55_03_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFS1Q4SHpGdXFnaHBOY3NjQS84RWdBRW1tbXR3TnB0c3ZVTnF3ZXAxM3pnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVaXdMQVJzdVE3NmV4TWZONDJMcVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2NDg1MmY3LWE3YWUtNGQ2ZC1iMDliLWViOWRmYWRhNTZjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDE0LFxuICAgICAgMjQ3LFxuICAgICAgMjIwLFxuICAgICAgODksXG4gICAgICAyMjAsXG4gICAgICAxNCxcbiAgICAgIDE1MSxcbiAgICAgIDE2MyxcbiAgICAgIDE0NCxcbiAgICAgIDEzNixcbiAgICAgIDE2MyxcbiAgICAgIDEwOCxcbiAgICAgIDEwLFxuICAgICAgNzAsXG4gICAgICAyMzYsXG4gICAgICAzMSxcbiAgICAgIDI0NyxcbiAgICAgIDIxMCxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDEyLFxuICAgICAgOTAsXG4gICAgICA2NCxcbiAgICAgIDIwMixcbiAgICAgIDE0MCxcbiAgICAgIDI0NCxcbiAgICAgIDMzLFxuICAgICAgMTMzLFxuICAgICAgNjMsXG4gICAgICAxNTIsXG4gICAgICAxNCxcbiAgICAgIDE2OSxcbiAgICAgIDE0OSxcbiAgICAgIDIzMyxcbiAgICAgIDE1NixcbiAgICAgIDE1NyxcbiAgICAgIDI1MixcbiAgICAgIDYsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSUEs4SzJBVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjY1OTgxOTcwMjk4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDkzMDU2OTg4Nzk4MjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRzUzRUFRL2ZpVnZnWVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkc0Si90anZCbUk0bjNsM2N6K00zTmdYaG1qT1NFWjcxcWdZOHg0cm5wMnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGtWbmZSbUt1Y29GNmJBWUpqM3VhY2wwek5YSnBLSThDTUkrTUpVa1JEcWZmQnVXbnR6aGN6b0dMUmZtNEpxdXN2SWliVnBUaWVYak01T2U3czdPQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ2kzNjZxd0xzYXBYWWkyaGQxNmh2cm82K3JBbC9DU1QvT0ZpM044dTBsSXNHU2NhZVE1VUtZZUovMHhuaStpcDJTUElDOFJSdjl1Y1BSYUgvQUZGQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjY1OTgxOTcwMjk4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDA5OTU3MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNM25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0zbi5qc29uIjogIntcImtleURhdGFcIjpcInNTTzFTbkZLbGVKa1NRZDNyUk0wZlh4S0REWXo0anJvZXJHWXRUOExvRHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NzMyMzg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
