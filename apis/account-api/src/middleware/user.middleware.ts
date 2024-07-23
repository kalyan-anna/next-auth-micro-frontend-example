import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import { CustomRequest } from '../types/types';
import { decode } from 'jsonwebtoken';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      (request.headers as any).authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  use(req: CustomRequest, res: Response, next: NextFunction) {
    const token = this.extractTokenFromHeader(req);
    const jwtPayload = decode(token);
    req.user = {
      email: jwtPayload.email,
    };
    next();
  }
}
