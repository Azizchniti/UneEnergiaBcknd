import { User } from '../user.types';
import { Express } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      file?: Express.Multer.File; // ✅ FIX
    }
  }
}