import { Expose } from 'class-transformer';
import { IPaginationMeta, IPaginationLinks } from 'nestjs-typeorm-paginate';

export class Resource {
  @Expose()
  status: {
    code: number;
    message: string;
  };
}

export class Resources {
  @Expose()
  status: {
    code: number;
    message: string;
  };

  @Expose()
  meta: IPaginationMeta;

  @Expose()
  links: IPaginationLinks;
}
