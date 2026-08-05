import type { CSSProperties } from "react";

export type categories = "Movie" | "TV Series";
export type variant = "trending" | "regular";
export type EntertainmentCard = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: categories;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  id: number;
  onChangeBookmark: (id: number) => void;
  variant: string;
};
export type EntertainmentCardsProps = {
  movies: EntertainmentCard[];
  onChangeBookmark: (id: number) => void;
  variant: string;
};
export type IconsProps = {
  category: string;
};
export type EntertainmentCardStyle = CSSProperties & {
  "--bg-small": string;
  "--bg-large": string;
};
export type EntertainmentButtonProps = {
  onToggleBookmark: () => void;
  isBookmarked: boolean;
};
