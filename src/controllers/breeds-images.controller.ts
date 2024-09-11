import * as service from "../services/breeds-images.service";

export const findImagesByBreedId = async (req: any, res: any) => {
  try {
    const response = await service.findImagesByBreedId(req);
    let data = await response.json();
    res.json(data);
  } catch (error) {
    throw new Error("Error");
  }
};
