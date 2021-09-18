

import WhatsappParent from "./whatsappParent";
import './App.css';

function whatsappHelp() {
  return (
    <>
    <div className='whole-page'>
    <div className='header'><h1>Help Center</h1></div>
    <div className='container'>
      <div className='b1'><WhatsappParent title="General" 
      web='https://faq.whatsapp.com/general/chats/about-forwarding-limits/' 
      linkOne='About forwarding limits' 
      linkTwo='How to update Whatsapp' 
      linkThree='How to change group privacy settings'/></div>

      <div className='b2'><WhatsappParent title="Android" 
      web='https://faq.whatsapp.com/android/verification/verifying-your-number/' 
      linkOne='Verifying your number' 
      linkTwo='How to restore your chat history' 
      linkThree='How to manage your notifications'/></div>

      <div className='b3'><WhatsappParent title="iPhone" 
      web='https://faq.whatsapp.com/iphone/chats/how-to-restore-your-chat-history/' 
      linkOne='How to restore your chat history' 
      linkTwo='How to manage your notifications' 
      linkThree='How to use status'/></div>

      <div className='b4'><WhatsappParent title="Web and Desktop" 
      web='https://faq.whatsapp.com/web/download-and-installation/about-whatsapp-web-and-desktop/' 
      linkOne='About WhatsApp Web and Desktop' 
      linkTwo='How to log in or out' 
      linkThree='How to manage your notifications'/></div>

      <div className='b5'><WhatsappParent title="KaiOS" 
      web='https://faq.whatsapp.com/kaios/verification/how-to-verify-your-phone-number/' 
      linkOne='How to verify your phone number' 
      linkTwo='How to edit your profile' 
      linkThree='How to send media, contacts, or location'/></div>

      <div className='b6'><WhatsappParent title="WhatsApp Business for Android" 
      web='https://faq.whatsapp.com/general/whatsapp-business-api/whatsapp-business-products/' 
      linkOne='WhatsApp business products' 
      linkTwo='How to download the WhatsApp Business app' 
      linkThree='How to edit your business profile'/></div>
    </div>
    </div>
    </>
  );
}

export default whatsappHelp;

