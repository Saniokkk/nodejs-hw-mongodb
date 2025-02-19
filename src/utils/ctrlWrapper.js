export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      console.log('From ctrlWrapper');
      console.log('ctrlWrapper', err);
      next(err);
    }
  };
};
