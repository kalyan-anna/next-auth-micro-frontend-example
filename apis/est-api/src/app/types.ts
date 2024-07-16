export type Property = {
  id: number;
  propertyName: string;
  propertyType: 'residential' | 'commercial';
  noOfUnits: number;
};

export type PropertyWithUsers = Property & {
  userEmails?: string[];
};
