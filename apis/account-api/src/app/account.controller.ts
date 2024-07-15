import { Controller, Get } from '@nestjs/common';

import { AccountService } from './account.service';

@Controller({ path: '/propertiesByUser' })
export class AccountController {
  constructor(private readonly appService: AccountService) {}

  @Get()
  getPropertiesByUser() {
    return this.appService.getPropertiesByUser();
  }
}
