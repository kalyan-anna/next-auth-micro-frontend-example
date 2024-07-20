import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { PropertyService } from '@stratapro/properties-prisma-client';

@Controller('properties')
export class AccountController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.getAllProperties('kalyan.shelf@gmail.com');
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
