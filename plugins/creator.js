function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *IlliaB*
▢ Instagram :
  • https://instagram.com/._
▢ WhatsApp :
  • (escribe solo si es necesario) 
▢ GitHub :
  • https://github.com/IlliaB
▢ Telegram : 
  • t.me/IlliaB_bot (FG) 
  • t.me/IlliaB (canal)
  • t.me/ (grupo)
▢ Facebook : 
  • https://facebook.com//
  • https://facebook.com//
▢ YouTube : 
  • https://youtube.com/
  
 *≡ HELPERS*
  *IlliaB*
▢ Instagram : https://www.instagram.com/
▢ WhatsApp : wa.me/
  *IlliaB*
▢ Instagram : https://
▢ WhatsApp : wa.me/51965650863
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
