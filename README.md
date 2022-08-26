# FirmaStation Restake HealthCheck
![image](https://user-images.githubusercontent.com/93503020/186844222-8cc4a5bb-05dc-448e-b254-c672bbc11629.png)

## How to build
### 1. Install npm

- Install npm modules

  ```bash
  $ npm install
  ```

### 2. Prepare the config file

- Copy config file
  
  ```bash
  $ cp config.sample.ts config.ts
  ```

- Set the variables in config
  ```bash
  RESTAKE_HEALTH_URL
   - http://'restake ip:port & domain'/

  RESTAKE_HEALTH_PATH
   - '/restake/health'

  TELEGRAM_HEALTH_BOT_TOKEN
   - 'telegram bot token'

  TELEGRAM_HEALTH_BOT_CHATID
   - 'The CHATID of the Telegram room where the bot is participating.'
  ```

### 3. Run scheduler
- Start the Restake Scheduler
  ```bash
  # Start according to PRODUCTION_MODE
  $ npm run start

  # start:dev enables the --watch option.
  $ npm run start:dev
  ```
