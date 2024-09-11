import * as service from "../services/breeds/breeds.service";

export const findBreeds = async (req: any, res: any) => {
  try {
    const response = await service.findBreeds(req.query);
    let data: any = await response.json();
    data = data.map((breed: any) => {
      return {
        _id: breed?.id,
        url: breed?.url,
        name: breed.breeds[0]?.name,
        breed_id: breed.breeds[0]?.id,
      };
    });
    res.json(data);
  } catch (error) {
    throw new Error("Error");
  }
};

export const findBreedById = async (id: string, res: any) => {
  try {
    const response = await service.findBreedsById(id);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw new Error("Error");
  }
};

export const findBreedBySearch = async (params: any, res: any) => {
  console.log('params', params);

  try {
    const response = await service.findBreeds({});
    const data = await response.json();
    res.json(data);
  } catch (error) {
    throw new Error("Error");
  }
};
