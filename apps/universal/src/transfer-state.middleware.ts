import { environment } from '@kubic/env/api';
import { Request, Response, NextFunction } from 'express';

export function transferStateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  req.app.set('transferState', {
    hostname: req.hostname,
    originalUrl: req.originalUrl,
    referer: req.get('referer'),
    app: environment.apps.web,
    auth: {
      user: req['session']['user'],
      tokens: {
        jwt: req['session']['authToken'],
        csrf: req['csrfToken'](),
      },
    },
  });

  next();
}
