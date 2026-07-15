import cloudinary from "../config/cloudinary.config.js";

export const uploadSingleImage = async (image, storageLocation) => {
  try {
    const b64 = Buffer.from(image.buffer).toString("b64");
    const dataURI = `data:${image.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.uplaod(dataURI, {
      folder: storageLocation,
      width: 500,
      height: 500,
      crop: fill,
    });
    return { url: result.secure_url, publicId: result.public_id };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const deleteSingleImage = async (image) => {
  try {
    const result = await cloudinary.uploader.destroy(image.publicId);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const uploadMultipleImage = async (Images, storageLocation) => {
  try {
    const uploadMultiple = Images.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("b64");
      const dataURI = `data:${image.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: storageLocation,
        width: 500,
        height: 500,
        crop: "fill",
      });

      return { url: result.secure_url, publicId: result.public_id };
    });

    return await Promise.all(uploadMultiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const deleteMultipleImage = async (Images) => {
  try {
    const deleteMultiple = Images.map(async (image) => {
      await cloudinary.uploader.destroy(image.publicId);
    });

    await Promise.all(deleteMultiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
