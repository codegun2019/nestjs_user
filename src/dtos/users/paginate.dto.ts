import { IsNotEmpty, IsString } from 'class-validator';

export class PaginateDto {
  @IsString()
  page = '1';

  @IsString()
  perPage = '30';

  @IsNotEmpty()
  search: string;
}
