// 'use client';

// import { useEffect, useState } from 'react';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { Button } from '@/components/ui/button';
// import { editDormitorySchema, EditDormitoryType } from '@/schemaValidations/dormitory.schema';
// import { useProvinces } from '@/services/hooks/useProvince';
// import { useDistricts } from '@/services/hooks/useDistrict';
// import { useWards } from '@/services/hooks/useWard';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { toast } from 'sonner';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import { useDetailDormitory } from '@/services/hooks/useDomitory';
// import { editDormitory } from '@/services/api/dormitoryApi';
// import { Textarea } from '@/components/ui/textarea';

// // Create a mutation hook for dormitory editing
// const useEditDormitoryMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (dormitoryData: EditDormitoryType) =>
//       editDormitory(dormitoryData.id, dormitoryData),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ['DormitoriesPaging'],
//       });
//     },
//   });
// };

// type EditModalProps = {
//   id: number | undefined;
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   onSubmitSuccess: () => void;
// };

// export default function EditModal({ id, open, setOpen, onSubmitSuccess }: EditModalProps) {
//   const editDormitoryMutation = useEditDormitoryMutation();
  
//   // Fetch dormitory details
//   const { data: detailDormitory } = useDetailDormitory({
//     dormitoryId: id as number,
//     enabled: Boolean(id),
//   });

//   // provinces
//   const [provinceOptions, setProvinceOptions] = useState<{ name: string; id: number }[]>([]);
//   const { data: provincesData } = useProvinces();
//   useEffect(() => {
//     if (provincesData) {
//       setProvinceOptions(provincesData);
//     }
//   }, [provincesData]);

//   // districts
//   const [selectedProvinceId, setSelectedProvinceId] = useState<number | undefined>(undefined);
//   const [districtOptions, setDistrictOptions] = useState<{ name: string; id: number }[]>([]);
//   const { data: districtsData } = useDistricts(selectedProvinceId);
//   useEffect(() => {
//     if (districtsData) {
//       setDistrictOptions(districtsData);
//     }
//   }, [districtsData]);

//   // wards
//   const [selectedDistrictId, setSelectedDistrictId] = useState<number | undefined>(undefined);
//   const [wardOptions, setWardOptions] = useState<{ name: string; id: number }[]>([]);
//   const { data: wardsData } = useWards(selectedDistrictId);
//   useEffect(() => {
//     if (wardsData) {
//       setWardOptions(wardsData);
//     }
//   }, [wardsData]);

//   const form = useForm<EditDormitoryType>({
//     resolver: zodResolver(editDormitorySchema),
//     defaultValues: {
//       id: undefined,
//       name: "",
//       address: "",
//       wardId: 0,
//       districtId: 0,
//       provinceId: 0,
//       ownerName: "",
//       phoneNumber: "",
//       description: "",
//       content: "",
//       status: 1,
//     },
//   });

//   // Update form when detail data is loaded
//   useEffect(() => {
//     if (detailDormitory) {
//       form.setValue('id', detailDormitory.id);
//       form.setValue('name', detailDormitory.name);
//       form.setValue('address', detailDormitory.address);
//       form.setValue('wardId', detailDormitory.wardId);
//       form.setValue('districtId', detailDormitory.districtId);
//       form.setValue('provinceId', detailDormitory.provinceId);
//       form.setValue('ownerName', detailDormitory.ownerName);
//       form.setValue('phoneNumber', detailDormitory.phoneNumber);
//       form.setValue('description', detailDormitory.description || '');
//       form.setValue('content', detailDormitory.content || '');
//       form.setValue('status', detailDormitory.status);
      
//       // Set selected province and district for cascading dropdowns
//       setSelectedProvinceId(detailDormitory.provinceId);
//       setSelectedDistrictId(detailDormitory.districtId);
//     }
//   }, [detailDormitory, form]);

//   // Update districtId and wardId when province or district changes
//   const handleProvinceChange = (value: string) => {
//     const provinceId = parseInt(value);
//     form.setValue('provinceId', provinceId);
//     form.setValue('districtId', 0);
//     form.setValue('wardId', 0);
//     setSelectedProvinceId(provinceId);
//     setDistrictOptions([]);
//     setWardOptions([]);
//   };

//   const handleDistrictChange = (value: string) => {
//     const districtId = parseInt(value);
//     form.setValue('districtId', districtId);
//     form.setValue('wardId', 0);
//     setSelectedDistrictId(districtId);
//     setWardOptions([]);
//   };

//   const onSubmit = async (values: EditDormitoryType) => {
//     if (editDormitoryMutation.isPending) return;
//     try {
//       await editDormitoryMutation.mutateAsync(values);
//       toast.success('Cập nhật ký túc xá thành công!', {
//         description: "Thông báo",
//       });
//       reset();
//       setOpen(false);
//       onSubmitSuccess();
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         toast.error(error.message, {
//           description: "Thông báo",
//         });
//       }
//     }
//   };

//   const reset = () => {
//     form.reset();
//   };

//   return (
//     <Dialog onOpenChange={setOpen} open={open}>
//       <DialogContent
//         className="sm:max-w-[800px] max-h-screen overflow-auto"
//         onCloseAutoFocus={() => {
//           reset();
//         }}
//       >
//         <DialogHeader>
//           <DialogTitle>Chỉnh sửa ký túc xá</DialogTitle>
//           <DialogDescription>Cập nhật thông tin ký túc xá</DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form
//             id="edit-dormitory-form"
//             onSubmit={form.handleSubmit(onSubmit)}
//             onReset={reset}
//             className='p-4'
//           >
//             <div className='grid grid-cols-2 gap-6'>
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="name">Tên ký túc xá</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Input
//                           id="name"
//                           type="text"
//                           placeholder="Nhập tên ký túc xá"
//                           className="w-full"
//                           {...field}
//                         />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="ownerName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="ownerName">Tên chủ sở hữu</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Input
//                           id="ownerName"
//                           type="text"
//                           placeholder="Nhập tên chủ sở hữu"
//                           className="w-full"
//                           {...field}
//                         />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="phoneNumber"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="phoneNumber">Số điện thoại</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Input
//                           id="phoneNumber"
//                           type="text"
//                           placeholder="Nhập số điện thoại"
//                           className="w-full"
//                           {...field}
//                         />
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="status"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="status">Trạng thái</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Select
//                           value={field.value?.toString()}
//                           onValueChange={(value) => {
//                             const parsed = parseInt(value);
//                             if (!isNaN(parsed)) {
//                               field.onChange(parsed);
//                             }
//                           }}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Chọn trạng thái" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem key="1" value="1">Active</SelectItem>
//                             <SelectItem key="2" value="2">Pending</SelectItem>
//                             <SelectItem key="0" value="0">Inactive</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="provinceId"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="provinceId">Tỉnh/Thành phố</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Select
//                           value={field.value?.toString()}
//                           onValueChange={handleProvinceChange}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Chọn tỉnh/thành phố" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {provinceOptions.map((opt, index) => (
//                               <SelectItem key={index} value={opt.id.toString()}>
//                                 {opt.name}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="districtId"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="districtId">Quận/Huyện</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Select
//                           value={field.value?.toString()}
//                           onValueChange={handleDistrictChange}
//                           disabled={!selectedProvinceId}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Chọn quận/huyện" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {districtOptions.map((opt, index) => (
//                               <SelectItem key={index} value={opt.id.toString()}>
//                                 {opt.name}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="wardId"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="wardId">Phường/Xã</Label>
//                       <div className="col-span-3 w-full space-y-2">
//                         <Select
//                           value={field.value?.toString()}
//                           onValueChange={(value) => {
//                             const parsed = parseInt(value);
//                             if (!isNaN(parsed)) {
//                               field.onChange(parsed);
//                             }
//                           }}
//                           disabled={!selectedDistrictId}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Chọn phường/xã" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {wardOptions.map((opt, index) => (
//                               <SelectItem key={index} value={opt.id.toString()}>
//                                 {opt.name}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </div>
//                     </div>
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="address"
//                 render={({ field }) => (
//                   <FormItem>
//                     <div className="grid grid-cols-4 items-center justify-items-start gap-4">
//                       <Label htmlFor="address">Địa chỉ chi tiết</Label>
//                       <div className="col-span-3 

