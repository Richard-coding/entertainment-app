import IconBookmarked from "../assets/icons/icon-bookmark-empty.svg?react";
import type { EntertainmentButtonProps } from "../types/entertainment";

const BookmarkedButton = ({
  onToggleBookmark,
  isBookmarked,
  ...rest
}: EntertainmentButtonProps) => {
  return (
    <button
      className="flex items-center justify-center bg-[#161D2F]/50 rounded-full h-8 w-8"
      onClick={onToggleBookmark}
      {...rest}
    >
      <IconBookmarked
        className={`${isBookmarked ? "text-white" : "text-transparent"}`}
      />
    </button>
  );
};

export default BookmarkedButton;
