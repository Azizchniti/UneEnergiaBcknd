import { User } from '../user.types';
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
declare module "express-serve-static-core" {
  interface Request {
    file?: File;
  }
}