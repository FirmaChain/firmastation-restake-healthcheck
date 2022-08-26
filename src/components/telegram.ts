import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_HEALTH_BOT_CHATID, TELEGRAM_HEALTH_BOT_TOKEN } from 'src/config';

const health_bot_token = TELEGRAM_HEALTH_BOT_TOKEN;
const health_bot_chatId = TELEGRAM_HEALTH_BOT_CHATID;
const healthTelegram = new TelegramBot(health_bot_token, { polling: false });

export const sendHealthErrorMessage = async () => {
  const message = '[ SCHEDULER SERVICE ] Health ERROR';
  
  try {
    return await healthTelegram.sendMessage(health_bot_chatId, message, { disable_web_page_preview: true });
  } catch (e) {
    console.log(e);
    return ;
  }
}