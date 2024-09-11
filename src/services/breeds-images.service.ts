import "dotenv/config";

const options: any = {
  method: "GET",
  headers: {
    "x-api-key": process.env.API_KEY,
  },
};

export const findImagesByBreedId = async (req: any) => {  
  const id = req.params.id;
  const limit = req.params.limit || 10;
  return await fetch(`${process.env.CAT_API}/search?breed_ids=${id}&limit=${limit}`, options);
};