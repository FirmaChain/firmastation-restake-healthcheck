import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { sendHealthErrorMessage } from 'src/components/telegram';
import { RESTAKE_HEALTH_PATH, RESTAKE_HEALTH_URL } from 'src/config';
import { getAxios } from 'src/utils/axios';

@Injectable()
export class SchedulerService {
  constructor() {
  }
  
  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'healthcheck_handling',
    timeZone: 'Etc/UTC'
  })
  async healthCheckCron() {
    const healthCheck = await this.getStatus();

    if (!healthCheck) {
      await sendHealthErrorMessage();
    }
  }

  async getStatus() {
    let healthCheck = false;

    try {
      await getAxios(RESTAKE_HEALTH_URL, RESTAKE_HEALTH_PATH);
      healthCheck = true;
    } catch (e) {
      healthCheck = false;
    }

    return healthCheck;
  }
}
