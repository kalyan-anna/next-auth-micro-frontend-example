import { Injectable } from '@nestjs/common';
import { Property, PropertyWithUsers } from './types';

const properties: PropertyWithUsers[] = [
  {
    id: '1',
    propertyName: 'CityCenter Plaza',
    propertyType: 'commercial',
    noOfUnits: 23,
    userEmails: ['kalyan.shelf@gmail.com'],
  },
  {
    id: '2',
    propertyName: 'Prime Commerce Building',
    propertyType: 'commercial',
    noOfUnits: 7,
    userEmails: ['kalyan.shelf@gmail.com'],
  },
  {
    id: '3',
    propertyName: 'Sunnyvale Apartments',
    propertyType: 'residential',
    noOfUnits: 17,
    userEmails: ['kalyan.shelf@gmail.com'],
  },
  {
    id: '4',
    propertyName: 'Parkview Condominiums',
    propertyType: 'residential',
    noOfUnits: 11,
    userEmails: ['kalyan.shelf@gmail.com'],
  },
];

@Injectable()
export class AccountService {
  getAllProperties(): Property[] {
    return properties;
  }

  getPropertyById(id: string): PropertyWithUsers {
    return properties.find((item) => item.id === id);
  }

  addNewUser(id: string, email: string) {
    const property = properties.find((item) => item.id === id);
    if (!property.userEmails) {
      property.userEmails = [];
    }
    property.userEmails.push(email);
  }
}
