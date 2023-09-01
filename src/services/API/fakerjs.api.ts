import { faker } from '@faker-js/faker';
import { FakerJs } from '../models/fakerjs';


export const generateFakeData = (): FakerJs => {
    const descr = faker.lorem.sentence(10);
    const startDate = faker.date.future();
    const endDate = faker.date.between(startDate, new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000));
    const tags = [faker.lorem.word(), faker.lorem.word()];
  
    return {
      descr,
      startDate,
      endDate,
      tags,
    };
  };