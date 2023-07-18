# FirmaStation Restake HealthCheck
![image](https://user-images.githubusercontent.com/93503020/186844222-8cc4a5bb-05dc-448e-b254-c672bbc11629.png)

## **Overview**
The FirmaChain Health Checker is a project that monitors the status of the Restake Scheduler and Restake API. If a status check response is not received, a Telegram bot is used to send notifications. The project utilizes cron functionality provided by NestJS, checking the status every minute.

<br/>

## **Configuration**
First, copy the file config.sample.ts to config.ts and then set the values of each variable as described below.

```bash
# Copy config file
$ cp config.sample.ts config.ts
```

- SCHEDULER_HEALTH_URL: Input the health check URL for the Restake Scheduler.

- SCHEDULER_HEALTH_PATH: Input the health check path for the Restake Scheduler.

- API_HEALTH_URL: Input the health check URL for the Restake API.

- API_HEALTH_PATH: Input the health check path for the Restake API.

- HEALTH_BOT_TOKEN: Input the token value for the Telegram bot.

- HEALTH_BOT_CHATID: Input the chat id for the Telegram bot.

<br/>

## **Build Instructions**
```bash
# Clone the repository
$ git clone https://github.com/FirmaChain/firmastation-restake-healthcheck.git

# Move into the project folder
$ cd firmastation-restake-healthcheck

# Install necessary packages
$ npm install

# Copy config.sample.ts to config.ts
$ cp config.sample.ts config.ts

# Edit the config.ts file and set each variable
$ nano config.ts
```

<br/>

## **Execution**
```bash
# Start according to PRODUCTION_MODE
$ npm run start

# start:dev enables the --watch option.
$ npm run start:dev
```