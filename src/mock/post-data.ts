import { Post } from "@/types/post";
import { faker } from "@faker-js/faker";
import { unstable_cache as cache } from "next/cache";

export const postData = cache(
  async () => {
    const data: Post[] = [];
    for (let i = 0; i < 100; i++) {
      const post: Post = {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        author: faker.person.fullName(),
        createdAt: faker.date.past(),
      };

      data.push(post);
    }

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },
  ["posts"],
  {
    tags: ["posts"],
  }
);
