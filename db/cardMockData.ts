export type CardDirections = "vertical" | "horizontal";

export interface VerticalCardData {
  thumbnail: null | string;
  itemId: number;
  cardLabel: string;
  cardTitle: string;
  highlightText: string;
  crossOutText: string;
  rating?: number;
  comment?: string;
}
export interface HorizontalCardData {
  thumbnail: null | string;
  reviewId: number;
  rating: number;
  commentTitle: string;
  comment: string;
  userName: string;
}

export const verticalCardData: VerticalCardData[] = [
  {
    itemId: 1,
    thumbnail: null,
    cardLabel: "Card Label",
    cardTitle: "Card Title",
    highlightText: "Hilight",
    crossOutText: "Cross out",
    rating: 3.1,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta fugit et nam enim neque delectus, repellendus adipisci dolore nobis corrupti, impedit nemo laboriosam. Tempora unde quidem earum sapiente repellendus.",
  },
  {
    itemId: 2,
    thumbnail: null,
    cardLabel: "Card Label",
    cardTitle: "Card Title",
    highlightText: "Hilight",
    crossOutText: "Cross out",
    rating: 2.9,
  },
  {
    itemId: 3,
    thumbnail: null,
    cardLabel: "Card Label",
    cardTitle: "Card Title",
    highlightText: "Hilight",
    crossOutText: "Cross out",
  },
];

export const horizontalCardData: HorizontalCardData[] = [
  {
    reviewId: 4,
    thumbnail: null,
    rating: 3.2,
    commentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta fugit et nam enim neque delectus, repellendus adipisci dolore nobis corrupti, impedit nemo laboriosam. Tempora unde quidem earum sapiente repellendus.",
    userName: "John Doe",
  },
];

export function getProducts() {
  return verticalCardData;
}

export function getReviews() {
  return horizontalCardData;
}
