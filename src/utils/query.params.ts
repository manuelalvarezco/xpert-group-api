export const queryParams = (query: any) => {
  return {
    size: query.size || 'large',
    mime_types: 'jpg',
    format: 'json',
    has_breeds: query.has_breeds || true,
    order: query.order || 'RANDOM',
    page: query.skip || 0,
    limit: query.limit || 5
  }
};
