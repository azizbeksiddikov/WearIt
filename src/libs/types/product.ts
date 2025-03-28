import { ObjectId } from "mongoose";
import { ProductCategory, ProductGender } from "../enums/product.enum";

export interface ProductVariant {
  _id: ObjectId;
  productId: ObjectId; // Product
  size: string;
  color: string;
  stockQuantity: number;
  productPrice: number;
  salesPrice?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariantInput {
  productId: ObjectId;
  size: string;
  color: string;
  stockQuantity: number;
  productPrice: number;
  salesPrice?: number;
}

export interface ProductVariantUpdate {
  _id: ObjectId;
  size?: string;
  color?: string;
  stockQuantity?: number;
  productPrice?: number;
  salesPrice?: number;
}

export interface Product {
  _id: ObjectId;
  productName: string;
  productCategory: ProductCategory;
  productGender: ProductGender;
  productDesc?: string;
  productImages?: string[];
  isActive: boolean;
  isFeatured: boolean;
  onSale: boolean;
  createdAt: Date;
  updatedAt: Date;

  productVariants?: ProductVariant[];
}

export interface ProductInput {
  productName: string;
  productCategory: ProductCategory;
  productGender: ProductGender;
  productDesc?: string;
  productImages?: string[];
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productName?: string;
  productCategory?: ProductCategory;
  productGender?: ProductGender;
  productDesc?: string;
  productImages?: string[];
  isActive?: boolean;
  isFeatured?: boolean;
  onSale?: boolean;
}

export interface ProductInquiry {
  productCategory?: ProductCategory;
  productGender?: ProductGender;
  isActive?: boolean;
}
