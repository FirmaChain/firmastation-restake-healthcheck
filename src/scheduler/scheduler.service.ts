import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { sendApiHealthErrorMessage, sendSchedulerHealthErrorMessage } from 'src/components/telegram';
import { SCHEDULER_HEALTH_URL, SCHEDULER_HEALTH_PATH, API_HEALTH_URL, API_HEALTH_PATH } from 'src/config';
import { getAxios } from 'src/utils/axios';

@Injectable()
export class SchedulerService {
  constructor() {
  }
  
  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'scheduler_healthcheck_handling',
    timeZone: 'Etc/UTC'
  })
  async schedulerHealthCheckCron() {
    const healthCheck = await this.getStatus(SCHEDULER_HEALTH_URL, SCHEDULER_HEALTH_PATH);

    if (!healthCheck) {
      await sendSchedulerHealthErrorMessage();
    }
  }

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'api_healthcheck_handling',
    timeZone: 'Etc/UTC'
  })
  async apiHealthCheckCron() {
    const healthCheck = await this.getStatus(API_HEALTH_URL, API_HEALTH_PATH);

    if (!healthCheck) {
      await sendApiHealthErrorMessage();
    }
  }

  async getStatus(url, path) {
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
