import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { PropertyService } from '@stratapro/properties-prisma-client';
import { UserEmail } from '../decorators/user-email.decorator';

@Controller('properties')
export class AccountController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll(@UserEmail() userEmail: string) {
    return this.propertyService.getAllProperties(userEmail);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.getPropertyDetails(Number(id));
  }

  @Patch(':id/add-new-user')
  async addNewUser(
    @Param('id') id: string,
    @Body() payload: { email: string }
  ) {
    await this.propertyService.addNewUser(Number(id), payload.email);
    return this.propertyService.getProperty(Number(id));
  }
}
