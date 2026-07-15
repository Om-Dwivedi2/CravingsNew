import Restaurant from "../model/restaurant.model.js";
import {
  deleteMultipleImage,
  deleteSingleImage,
  uploadMultipleImage,
  uploadSingleImage,
} from "../utils/image.service.js";

export const restaurantUpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const restaurantData = req.body;
    const coverImage = req.files?.coverImage;
    const restaurantImage = req.files?.restaurantImage;

    const dataKeys = Object.keys(restaurantData);

    const om = dataKeys.forEach((key) => {
      if (!restaurantData[key]) {
        const error = new Error(`Missing required Field: ${element}`);
        error.statusCode = 400;
        return next(error);
      }
    });

    const existingRestaurant = await Restaurant.findOne({
      managerId: currentUser._id,
    });

    if (!existingRestaurant) {
      if (coverImage) {
        const coverImageData = await uploadSingleImage(
          coverImage,
          `restaurant/${currentUser.phone}/coverImage`,
        );

        dataKeys.push("coverImage");
        restaurantData.coverImage = coverImageData;
      }

      if (restaurantImage && restaurantImage.length > 0) {
        const restaurantImageData = await uploadMultipleImage(
          restaurantImage,
          `restaurant/${currentUser.phone}/restaurantImages`,
        );

        dataKeys.push("restaurantImage");
        restaurantData.restaurantImage = restaurantImageData;
      }

      const newRestaurant = await Restaurant.create({
        managerId: currentUser._id,
        ...restaurantData,
      });

      res.status(200).json({
        message: "Restaurant profile created successfully",
        data: newRestaurant,
      });
    } else {
      if (coverImage) {
        await deleteSingleImage(existingRestaurant.coverImage);

        const coverImageData = await uploadSingleImage(
          coverImage,
          `restaurant/${currentUser.phone}/coverImage`,
        );

        dataKeys.push("coverImage");
        restaurantData.coverImage = coverImageData;
      }

      if (restaurantImage && restaurantImage.length > 0) {
        await deleteMultipleImage(existingRestaurant.restaurantImage);
        const restaurantImageData = await uploadMultipleImage(
          restaurantImage,
          `restaurant/${currentUser.phone}/restaurantImages`,
        );

        dataKeys.push("restaurantImage");
        restaurantData.restaurantImage = restaurantImageData;
      }

      dataKeys.forEach((key) => {
        existingRestaurant[key] =
          restaurantData[key] || existingRestaurant[key];
      });
      await existingRestaurant.save();

      res.status(200).json({
        message: "Restaurant profile Updated successfully",
        data: existingRestaurant,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
