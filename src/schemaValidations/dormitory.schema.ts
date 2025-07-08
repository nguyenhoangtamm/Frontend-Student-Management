import { z } from 'zod';
import { paginationSchema } from './pagination';

export const DormitoriesName = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  }),
);
export type DormitoriesNameType = z.infer<typeof DormitoriesName>;
export const Service = z.object({
  name: z.string(),
  price: z.number(),
  unit: z.string(),
});
export const Dormitory = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  fullAddress: z.string(),
  wardId: z.number(),
  districtId: z.number(),
  provinceId: z.number(),
  ownerName: z.string(),
  phoneNumber: z.string(),
  description: z.string(),
  content: z.string(),
  reviews: z.number(),
  rooms: z.number(),
  rating: z.string(),
  students: z.number(),
  minPrice: z.string(),
  maxPrice: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  status: z.string(),
  imageUrl: z.string().optional().nullable(),
});

const DormitoryPagination = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  fullAddress: z.string(),
  wardId: z.number().nullable(),
  districtId: z.number().nullable(),
  provinceId: z.number().nullable(),
  ownerName: z.string(),
  phoneNumber: z.string(),
  description: z.string(),
  rating: z.string(),
  slug: z.string(),
  students: z.number(),
  minPrice: z.string(),
  maxPrice: z.string(),
  longitude: z.string(),
  latitude: z.string(),
  status: z.number(),
  imageUrl: z.string().optional().nullable(),
});

const LinksPaginationSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  active: z.boolean(),
});
const DormitoriesPaginationSchema = z.object({
  data: z.array(DormitoryPagination),
  pagination: paginationSchema,
});

const DormitoryReview = z.object({
  id: z.number(),
  name: z.string(),
  comment: z.string(),
  rating: z.string(),
  date: z.string(),
});
const DormitoryReviews = z.array(DormitoryReview);

export {
  DormitoryPagination,
  DormitoriesPaginationSchema,
  DormitoryReview,
  DormitoryReviews,
};
export type DormitoryPaginationType = z.infer<typeof DormitoryPagination>;
export type DormitoriesPaginationType = z.infer<
  typeof DormitoriesPaginationSchema
>;
export type LinksPaginationType = z.infer<typeof LinksPaginationSchema>;
export type DormitoryReviewType = z.infer<typeof DormitoryReview>;
export type DormitoryReviewsType = z.infer<typeof DormitoryReviews>;

export const createDormitorySchema = z.object({
  name: z.string().max(255).nonempty('Tên ký túc xá là bắt buộc'),
  address: z.string().max(255).nonempty('Địa chỉ là bắt buộc'),
  wardId: z.number().nonnegative('ID phường/xã phải là số không âm'),
  districtId: z.number().nonnegative('ID quận/huyện phải là số không âm'),
  provinceId: z.number().nonnegative('ID tỉnh/thành phố phải là số không âm'),
  ownerName: z.string().max(50).nonempty('Tên chủ sở hữu là bắt buộc'),
  phoneNumber: z.string().max(30).nonempty('Số điện thoại là bắt buộc'),
  description: z.string().optional(),
  content: z.string().optional(),
  status: z.number().nonnegative('Trạng thái là bắt buộc'),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});
export type CreateDormitoryType = z.infer<typeof createDormitorySchema>;

export const editDormitorySchema = z.object({
  id: z.number(),
  name: z.string().max(255).nonempty('Tên ký túc xá là bắt buộc'),
  address: z.string().max(255).nonempty('Địa chỉ là bắt buộc'),
  wardId: z.number().nonnegative('ID phường/xã phải là số không âm'),
  districtId: z.number().nonnegative('ID quận/huyện phải là số không âm'),
  provinceId: z.number().nonnegative('ID tỉnh/thành phố phải là số không âm'),
  ownerName: z.string().max(50).nonempty('Tên chủ sở hữu là bắt buộc'),
  phoneNumber: z.string().max(30).nonempty('Số điện thoại là bắt buộc'),
  description: z.string().optional(),
  content: z.string().optional(),
  status: z.number().nonnegative('Trạng thái là bắt buộc'),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});
export type EditDormitoryType = z.infer<typeof editDormitorySchema>;

export const detailDormitory = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  wardId: z.number(),
  districtId: z.number(),
  provinceId: z.number(),
  ownerName: z.string(),
  phoneNumber: z.string(),
  description: z.string().optional(),
  content: z.string().optional(),
  status: z.number(),
  fullAddress: z.string().optional().nullable(),
  longitude: z.number().optional().nullable(),
  latitude: z.number().optional().nullable(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});
export type DetailDormitoryType = z.infer<typeof detailDormitory>;

export const dormitoryLocation = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  wardId: z.number(),
  districtId: z.number(),
  provinceId: z.number(),
  ownerName: z.string(),
  phoneNumber: z.string(),
  description: z.string().optional(),
  fullAddress: z.string().optional().nullable(),
  longitude: z.string().optional().nullable(),
  latitude: z.string().optional().nullable(),
});
export type DormitoryLocationType = z.infer<typeof dormitoryLocation>;
