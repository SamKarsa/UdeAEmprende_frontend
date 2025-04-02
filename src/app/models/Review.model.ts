import { User } from "./User.model";

export interface Review{
    reviewId: number;
    reviewDescription: string;
    rating: number;
    createdAt: string;
    user: User;
}
