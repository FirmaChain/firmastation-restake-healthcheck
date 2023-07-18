import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { getAxios } from 'src/utils/axios';
import {
  SCHEDULER_HEALTH_URL,
  SCHEDULER_HEALTH_PATH,
  API_HEALTH_URL,
  API_HEALTH_PATH
} from 'src/config';
import {
  sendAllHealthErrorMessage,
  sendApiHealthErrorMessage,
  sendSchedulerHealthErrorMessage
} from 'src/components/telegram';

@Injectable()
export class SchedulerService {
  constructor() {
  }
  
  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'scheduler_healthcheck_handling',
    timeZone: 'Etc/UTC'
  })
  async healthCheckHandler() {
    const [schedulerHealthCheck, apiHealthCheck] = await Promise.all([
      this.getStatus(SCHEDULER_HEALTH_URL, SCHEDULER_HEALTH_PATH),
      this.getStatus(API_HEALTH_URL, API_HEALTH_PATH)
    ]);

    switch (true) {
      case !schedulerHealthCheck && !apiHealthCheck:
        await sendAllHealthErrorMessage();
        break;

      case !schedulerHealthCheck:
        await sendSchedulerHealthErrorMessage();
        break;

      case !apiHealthCheck:
        await sendApiHealthErrorMessage();
        break;
    }
  }

  async getStatus(url: string, path: string) {
    let healthCheck = false;

    try {
      await getAxios(url, path);
      healthCheck = true;
    } catch (e) {
      healthCheck = false;
    }

    return healthCheck;
  }
}