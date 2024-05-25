import { User } from "@/types/user";
import { faker } from "@faker-js/faker";
import { unstable_cache as cache } from "next/cache";

export const userData = cache(
  async () => {
    const data: User[] = [];
    for (let i = 0; i < 100; i++) {
      const user: User = {
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.imei(),
        website: faker.internet.url(),
        company: {
          name: faker.company.name(),
          catchPhrase: faker.company.catchPhrase(),
          bs: faker.company.buzzPhrase(),
        },
      };

      data.push(user);
    }

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data;
  },
  ["users"],
  {
    tags: ["users"],
  }
);
