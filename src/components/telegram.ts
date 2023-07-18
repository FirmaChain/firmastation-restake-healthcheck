import TelegramBot from 'node-telegram-bot-api';
import { HEALTH_BOT_CHATID, HEALTH_BOT_TOKEN } from 'src/config';

const healthTelegram = new TelegramBot(HEALTH_BOT_TOKEN, { polling: false });

export const sendAllHealthErrorMessage = async () => {
  await sendMessage('[SCHEDULER & API] Health Error');
}

export const sendSchedulerHealthErrorMessage = async () => {
  await sendMessage('[SCHEDULER] Health Error');
}

export const sendApiHealthErrorMessage = async () => {
  await sendMessage('[API] Health Error');
}

const sendMessage = async (message: string) => {
  try {
    return await healthTelegram.sendMessage(HEALTH_BOT_CHATID, message, { disable_web_page_preview: true });
  } catch (e) {
    console.log(e);
    return ;
  }
}