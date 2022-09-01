import TelegramBot from 'node-telegram-bot-api';
import { SCHEDULER_HEALTH_BOT_TOKEN, SCHEDULER_HEALTH_BOT_CHATID, API_HEALTH_BOT_TOKEN, API_HEALTH_BOT_CHATID } from 'src/config';

const scheduler_bot_token = SCHEDULER_HEALTH_BOT_TOKEN;
const scheduler_bot_chatId = SCHEDULER_HEALTH_BOT_CHATID;
const schedulerTelegram = new TelegramBot(scheduler_bot_token, { polling: false });

const api_bot_token = API_HEALTH_BOT_TOKEN;
const api_bot_chatId = API_HEALTH_BOT_CHATID;
const apiTelegram = new TelegramBot(api_bot_token, { polling: false });

export const sendSchedulerHealthErrorMessage = async () => {
  const message = '[ SCHEDULER SERVICE ] Health ERROR';
  
  try {
    return await schedulerTelegram.sendMessage(scheduler_bot_chatId, message, { disable_web_page_preview: true });
  } catch (e) {
    console.log(e);
    return ;
  }
}

export const sendApiHealthErrorMessage = async () => {
  const message = '[ API SERVICE ] Health ERROR';
  
  try {
    return await apiTelegram.sendMessage(api_bot_chatId, message, { disable_web_page_preview: true });
  } catch (e) {
    console.log(e);
    return ;
  }
}