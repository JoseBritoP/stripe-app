import z from 'zod';

export const postScheme = z.object({
  title:z.string(),
  content:z.string(),
  userId:z.number().int()
});

export const postSchemeV2 = z.object({
  title:z.string(),
  content:z.string(),
  userId:z.number().int(),
  categories:z.array(z.string()),
});