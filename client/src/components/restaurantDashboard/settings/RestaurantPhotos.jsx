import React from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";

const RestaurantPhotos = () => {



  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        {/* Cover Image Section */}
        <div className="bg-white rounded-lg p-5 shadow space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-(--color-gray) pb-3 mb-4">
              <h2 className="text-xl text-(--color-primary) font-semibold">
                Cover Image
              </h2>
              <span className="bg-[#CE3901]/10 text-(--color-primary) px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#CE3901]/20">
                1 file
              </span>
            </div>
            <p className="text-sm text-(--color-secondary) mb-4">
              Upload one hero image under 1MB.
            </p>

            <div className="border border-dashed border-(--color-gray) rounded-lg p-6 text-center flex flex-col items-center justify-center gap-3 bg-gray-50/50">
              <label
                htmlFor="coverImageUpload"
                className="border flex gap-2 items-center py-1.5 px-4 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95 cursor-pointer hover:bg-opacity-95 transition-all text-sm"
              >
                <MdOutlineAddAPhoto className="text-lg" />
                Upload Cover Image
              </label>
              <input
                type="file"
                id="coverImageUpload"
                className="hidden"
                accept="image/*"
              />
              <p className="text-xs text-(--color-secondary) max-w-[200px] leading-relaxed">
                Best for banner-style photos. JPG, PNG, AVIF, WEBP all work.
              </p>
            </div>
          </div>

          <div className="border border-dashed border-(--color-gray) rounded-lg p-8 flex flex-col items-center justify-center text-center mt-4 bg-gray-50/20">
            <div className="w-14 h-14 rounded-full bg-[#CE3901]/10 flex items-center justify-center text-(--color-primary) mb-3 border border-[#CE3901]/20">
              <MdOutlineAddAPhoto className="text-xl" />
            </div>
            <h3 className="text-(--color-primary) font-semibold text-sm">
              No cover selected
            </h3>
            <p className="text-xs text-(--color-secondary) max-w-[220px] mt-1 leading-relaxed">
              Add a clean hero image to make this restaurant stand out.
            </p>
          </div>
        </div>

        {/* Other Restaurant Images Section */}
        <div className="lg:col-span-2 bg-white rounded-lg p-5 shadow space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-(--color-gray) pb-3 mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl text-(--color-primary) font-semibold">
                  Other Restaurant Images
                </h2>
                <span className="bg-[#CE3901]/10 text-(--color-primary) px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#CE3901]/20">
                  0/10
                </span>
              </div>
              <div>
                <label
                  htmlFor="otherImagesUpload"
                  className="border flex gap-2 items-center py-1.5 px-4 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95 cursor-pointer hover:bg-opacity-95 transition-all text-sm"
                >
                  <MdOutlineAddAPhoto className="text-lg" />
                  Upload Restaurant Images
                </label>
                <input
                  type="file"
                  id="otherImagesUpload"
                  className="hidden"
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
            <p className="text-sm text-(--color-secondary) mb-4">
              Upload up to 10 images, each less than 1MB.
            </p>
          </div>

          <div className="border border-dashed border-(--color-gray) rounded-lg p-12 flex flex-col items-center justify-center text-center bg-gray-50/20 min-h-[280px] my-auto">
            <div className="w-16 h-16 rounded-full bg-[#CE3901]/10 flex items-center justify-center text-(--color-primary) mb-4 border border-[#CE3901]/20">
              <MdOutlineAddAPhoto className="text-2xl" />
            </div>
            <h3 className="text-(--color-primary) font-semibold text-base">
              No restaurant images yet
            </h3>
            <p className="text-sm text-(--color-secondary) max-w-sm mt-1.5 leading-relaxed">
              Add up to 8 supporting photos to show the dining space, food, and kitchen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPhotos;