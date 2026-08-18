import type { ComponentType, CSSProperties, SVGProps } from "react";

export type categories = "Movie" | "TV Series";
export type variant = "trending" | "regular";
export type Entertainment = {
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
};
export type EntertainmentCardsProps = {
  movies: Entertainment[];
  onChangeBookmark: (id: number) => void;
  variant: variant;
};
export type EntertainmentCardProps = {
  movie: Entertainment;
  onChangeBookmark: (id: number) => void;
  variant: variant;
};
export type IconsProps = {
  category: categories;
};
export type EntertainmentCardStyle = CSSProperties & {
  "--bg-small": string;
  "--bg-large": string;
};
export type EntertainmentButtonProps = {
  onToggleBookmark: () => void;
  isBookmarked: boolean;
};
export type SearchBarProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSearchTerm: () => void;
};

export type HomePageProps = {
  movies: Entertainment[];
  onChangeBookmark: (id: number) => void;
  searchTerm: string;
};

export type MainLayoutContext = {
  movies: Entertainment[];
  onChangeBookmark: (id: number) => void;
};
export type SearchResultsProps = {
  movies: Entertainment[];
  onChangeBookmark: (id: number) => void;
  searchTerm: string;
};

export type SidebarItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
};
