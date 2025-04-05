import { BusinessCategory } from "./BusinessCategory.model";
import { Image } from "./Image.model";
import { SocialMedia } from "./SocialMedia.model";
import { Review } from "./Review.model";

export interface Business {
    businessId: number;
    businessName: string;
    businessDescription: string;
    businessServiceHours: string;
    businessDelivery: boolean;
    businessLocation: string;
    businessPhoneNumber: string;
    businessStatus: boolean;
    businessCategories: BusinessCategory[];
    images: Image[];
    socialMedias: SocialMedia[];
    reviews: Review[];
}