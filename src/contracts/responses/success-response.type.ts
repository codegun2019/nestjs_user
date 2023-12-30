import { IPaginationLinks, IPaginationMeta } from 'nestjs-typeorm-paginate';

export type SuccessResponseType = {
  status: { code: number; message: string };
  data?: Record<any, any>;
  links?: IPaginationMeta;
  meta?: IPaginationLinks;
};
