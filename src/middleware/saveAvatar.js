/**
 * The upload middleware
 * a user can upload a file via the browser
 * this middleware will save the file to the server
 */

export const saveAvatar = async (req, res, next) => {
  const file = req.file;

  // if no file is sent, skip this middleware
  if (!file) next();

  next();
};
