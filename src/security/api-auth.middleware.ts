/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

//import 'dotenv/config';

@Injectable()
export class ApiAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers['api-auth-token'] !== process.env.JWT_SECRET) {
      throw new HttpException(
        {
          status: 'AUTHORIZATION ERROR',
          message: 'Invalid or missing API authentication token !',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    next();
  }
}
