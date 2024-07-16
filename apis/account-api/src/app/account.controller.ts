import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { AccountService } from './account.service';
import { PropertyService } from '@stratapro/properties-prisma-client';

@Controller('properties')
export class AccountController {
  constructor(
    private readonly appService: AccountService,
    private readonly propertyService: PropertyService
  ) {}

  @Get()
  findAll() {
    return this.propertyService.getAllProperties('kalyan.shelf@gmail.com');
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.appService.getPropertyById(id);
  }

  @Patch(':id/add-new-user')
  addNewUser(@Param('id') id: number, @Body() payload: { email: string }) {
    console.log('body input:', payload);
    this.appService.addNewUser(id, payload.email);
    return this.appService.getPropertyById(id);
  }
}
