
import { HttpStatus } from '@nestjs/common';
import { get } from 'lodash';
import { JsonType } from 'src/contracts/json.type';
import { SuccessResponseType } from 'src/contracts/responses/success-response.type';

export class ApiResource {
  /**
   * Success response
   * @param [data]
   * @returns SuccessResponseType
   */
  static successResponse(data?: any): SuccessResponseType {
    if (typeof data === 'undefined') {
      return { status: { code: HttpStatus.OK, message: 'OK' } };
    }

    if (data.items) {
      const { items, links, meta } = data;

      return {
        data: items,
        links,
        meta,
        status: { code: HttpStatus.OK, message: 'OK' },
      };
    }

    return { data, status: { code: HttpStatus.OK, message: 'OK' } };
  }

  static successWithAppendMetaResponse(
    data: any,
    appends: JsonType,
  ): SuccessResponseType {
    // we will check if data.items is undefined,
    // we will return original successResponse without any modification
    if (get(data, 'items') === undefined) {
      return this.successResponse(data);
    }

    const { items, links, meta } = data;

    return {
      data: items,
      links,
      meta: Object.assign(meta, appends),
      status: { code: HttpStatus.OK, message: 'OK' },
    };
  }

  /**
   * Errors response
   * @param error
   */
  static errorResponse(error: Error): void {
    // All exception will be handle by exception filters
    throw error;
  }
}
