import IconBookmarked from "../../public/assets/icon-bookmark-empty.svg?react";
import type { EntertainmentButtonProps } from "../types/entertainment";

const BookmarkedButton = ({
  onToggleBookmark,
  isBookmarked,
}: EntertainmentButtonProps) => {
  return (
    <div
      className="flex items-center justify-center bg-[#161D2F]/50 rounded-full h-8 w-8"
      onClick={onToggleBookmark}
    >
      <IconBookmarked
        className={`${isBookmarked ? "text-white" : "text-transparent"}`}
      />
    </div>
  );
};

export default BookmarkedButton;
