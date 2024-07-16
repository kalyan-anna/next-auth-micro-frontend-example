import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { AccountService } from './account.service';

@Controller('properties')
export class AccountController {
  constructor(private readonly appService: AccountService) {}

  @Get()
  findAll() {
    return this.appService.getAllProperties();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.getPropertyById(id);
  }

  @Patch(':id/add-new-user')
  addNewUser(@Param('id') id: string, @Body() payload: { email: string }) {
    console.log('body input:', payload);
    this.appService.addNewUser(id, payload.email);
    return this.appService.getPropertyById(id);
  }
}
