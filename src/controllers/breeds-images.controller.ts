import * as service from "../services/breeds-images.service";

export const findImagesByBreedId = async (req: any, res: any) => {
  try {
    const response = await service.findImagesByBreedId(req);
    let data = await response.json();
    data = data.map((breed: any) => {
      return {
        url: breed?.url,
      };
    });
    res.json(data);
  } catch (error) {
    throw new Error("Error");
  }
};