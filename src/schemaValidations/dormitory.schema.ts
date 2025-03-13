import { z } from 'zod';

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
export const Dormitory = z
  .object({
    id: z.number(),
    name: z.string(),
    address: z.string(),
    full_address: z.string(),
    ward_id: z.number(),
    district_id: z.number(),
    province_id: z.number(),
    owner_name: z.string(),
    phone_number: z.string(),
    description: z.string(),
    content: z.string(),
    reviews: z.number(),
    rooms: z.number(),
    rating: z.string(),
    students: z.number(),
    min_price: z.string(),
    max_price: z.string(),
    longitude: z.string(),
    latitude: z.string(),
    status: z.string(),
  })
  .transform((obj) => ({
    id: obj.id,
    name: obj.name,
    address: obj.address,
    fullAddress: obj.full_address,
    wardId: obj.ward_id,
    districtId: obj.district_id,
    provinceId: obj.province_id,
    ownerName: obj.owner_name,
    phoneNumber: obj.phone_number,
    description: obj.description,
    content: obj.content,
    reviews: obj.reviews,
    rooms: obj.rooms,
    rating: obj.rating,
    students: obj.students,
    minPrice: obj.min_price,
    maxPrice: obj.max_price,
    longitude: obj.longitude,
    latitude: obj.latitude,
    status: obj.status,
  }));

const DormitoryPagination = z
  .object({
    id: z.number(),
    name: z.string(),
    address: z.string(),
    full_address: z.string(),
    ward_id: z.number(),
    district_id: z.number(),
    province_id: z.number(),
    owner_name: z.string(),
    description: z.string(),
    rating: z.string(),
    slug: z.string(),
    min_price: z.string(),
    max_price: z.string(),
    longitude: z.string(),
    latitude: z.string(),
    status: z.number(),
  })
  .transform((obj) => ({
    id: obj.id,
    name: obj.name,
    address: obj.address,
    fullAddress: obj.full_address,
    wardId: obj.ward_id,
    districtId: obj.district_id,
    provinceId: obj.province_id,
    ownerName: obj.owner_name,
    description: obj.description,
    rating: obj.rating,
    slug: obj.slug,
    minPrice: obj.min_price,
    maxPrice: obj.max_price,
    longitude: obj.longitude,
    latitude: obj.latitude,
    status: obj.status,
  }));
const LinksPaginationSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  active: z.boolean(),
});
const DormitoriesPaginationSchema = z
  .object({
    current_page: z.number(),
    data: z.array(DormitoryPagination),
    first_page_url: z.string(),
    from: z.number(),
    last_page: z.number(),
    path: z.string(),
    per_page: z.number(),
    prev_page_url: z.string().nullable(),
    to: z.number(),
    total: z.number(),
  })
  .transform((obj) => ({
    currentPage: obj.current_page,
    data: obj.data,
    firstPageUrl: obj.first_page_url,
    from: obj.from,
    lastPage: obj.last_page,
    path: obj.path,
    perPage: obj.per_page,
    prevPageUrl: obj.prev_page_url,
    to: obj.to,
    total: obj.total,
  }));
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
