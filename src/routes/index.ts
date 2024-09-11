import breedsRouter from "../routes/breeds.routes";
import breedsImagesRouter from "../routes/breeds-images.routes";
import authRouter from "../routes/auth.routes";

import express from "express";

export const routerApi = (app: any) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/breeds', breedsRouter);
  router.use('/breeds-images', breedsImagesRouter);
  router.use('/auth', authRouter);

}
