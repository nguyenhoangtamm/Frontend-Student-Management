'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createDormitorySchema, CreateDormitoryType } from '@/schemaValidations/dormitory.schema';
import { useProvinces } from '@/services/hooks/useProvince';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TextArea from 'antd/es/input/TextArea';
import { useDistricts } from '@/services/hooks/useDistrict';
import { useWards } from '@/services/hooks/useWard';
import { useCreateDormitoryMutation } from '@/services/hooks/useDomitory';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import MapPicker from './map-picker';


type AddModalProps = {
  onSubmitSuccess: () => void;
};

export default function AddModal({ onSubmitSuccess }: AddModalProps) {

  const [open, setOpen] = useState(false);
  const createDormitoryMutation = useCreateDormitoryMutation();

  // provinces
  const [provinceOptions, setProvinceOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: provincesData } = useProvinces();
  useEffect(() => {
    if (provincesData) {
      setProvinceOptions(provincesData);
    }
  }, [provincesData]);

  // districts
  const [selectedProvinceId, setSelectedProvinceId] = useState<number | undefined>(undefined);
  const [districtOptions, setDistrictOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: districtsData } = useDistricts({ provinceId: selectedProvinceId ?? 0, enabled: Boolean(selectedProvinceId) });
  useEffect(() => {
    if (districtsData) {
      setDistrictOptions(districtsData);
    }
  }, [districtsData]);

  // wards
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | undefined>(undefined);
  const [wardOptions, setWardOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: wardsData } = useWards({ districtId: selectedDistrictId ?? 0, enabled: Boolean(selectedDistrictId) });
  useEffect(() => {
    if (wardsData) {
      setWardOptions(wardsData);
    }
  }, [wardsData]);

  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);

  const form = useForm<CreateDormitoryType>({
    resolver: zodResolver(createDormitorySchema),
    defaultValues: {
      name: "",
      address: "",
      wardId: undefined,
      districtId: undefined,
      provinceId: undefined,
      ownerName: "",
      phoneNumber: "",
      description: "",
      content: "",
      status: 1, // Default to Active
      longitude: undefined,
      latitude: undefined,
    },
  });

  useEffect(() => {
    form.setValue('longitude', longitude);
    form.setValue('latitude', latitude);
  }
    , [longitude, latitude, form]);
  // Update districtId and wardId when province or district changes
  const handleProvinceChange = (value: string) => {
    const provinceId = parseInt(value);
    form.setValue('provinceId', provinceId);
    form.setValue('districtId', 0);
    form.setValue('wardId', 0);
    setSelectedProvinceId(provinceId);
    setDistrictOptions([]);
    setWardOptions([]);
  };

  const handleDistrictChange = (value: string) => {
    const districtId = parseInt(value);
    form.setValue('districtId', districtId);
    form.setValue('wardId', 0);
    setSelectedDistrictId(districtId);
    setWardOptions([]);
  };

  const onSubmit = async (values: CreateDormitoryType) => {
    if (createDormitoryMutation.isPending) return;
    try {
      await createDormitoryMutation.mutateAsync(values);
      toast.success('Thêm ký túc xá thành công!', {
        description: "Thông báo",
      });
      reset();
      setOpen(false);
      onSubmitSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, {
          description: "Thông báo",
        });
      }
    }
  };

  const reset = () => {
    form.reset();
    setSelectedProvinceId(undefined);
    setSelectedDistrictId(undefined);
  };

  return (
    <>
      <Button
        className='bg-admin-theme text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-90'
        onClick={() => setOpen(true)}
      >
        <Plus size={20} /> Add
      </Button>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent
          className="sm:max-w-[800px] max-h-screen overflow-auto"
          onCloseAutoFocus={() => {
            reset();
          }}
        >
          <DialogHeader>
            <DialogTitle>Thêm ký túc xá</DialogTitle>
            <DialogDescription>Nhập thông tin ký túc xá</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="create-dormitory-form"
              onSubmit={form.handleSubmit(onSubmit)}
              onReset={reset}
              className='p-4'
            >
              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="name">Tên ký túc xá</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="name"
                            type="text"
                            placeholder="Nhập tên ký túc xá"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="ownerName">Tên chủ sở hữu</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="ownerName"
                            type="text"
                            placeholder="Nhập tên chủ sở hữu"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="phoneNumber">Số điện thoại</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="phoneNumber"
                            type="number"
                            placeholder="Nhập số điện thoại"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="status">Trạng thái</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Select
                            value={field.value?.toString()}
                            onValueChange={(value) => {
                              const parsed = parseInt(value);
                              if (!isNaN(parsed)) {
                                field.onChange(parsed);
                              }
                            }}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn trạng thái" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem key="1" value="1">Active</SelectItem>
                              <SelectItem key="2" value="2">Pending</SelectItem>
                              <SelectItem key="0" value="0">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="provinceId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="provinceId">Tỉnh/Thành phố</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Select
                            value={field.value?.toString()}
                            onValueChange={handleProvinceChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn tỉnh/thành phố" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {provinceOptions.map((opt, index) => (
                                <SelectItem key={index} value={opt.id.toString()}>
                                  {opt.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="districtId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="districtId">Quận/Huyện</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Select
                            value={field.value?.toString()}
                            onValueChange={handleDistrictChange}
                            disabled={!selectedProvinceId}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn quận/huyện" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {districtOptions.map((opt, index) => (
                                <SelectItem key={index} value={opt.id.toString()}>
                                  {opt.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="wardId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="wardId">Phường/Xã</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Select
                            value={field.value?.toString()}
                            onValueChange={(value) => {
                              const parsed = parseInt(value);
                              if (!isNaN(parsed)) {
                                field.onChange(parsed);
                              }
                            }}
                            disabled={!selectedDistrictId}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn phường/xã" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {wardOptions.map((opt, index) => (
                                <SelectItem key={index} value={opt.id.toString()}>
                                  {opt.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="address">Địa chỉ chi tiết</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="address"
                            type="text"
                            placeholder="Nhập địa chỉ chi tiết"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="address"> Nhập kinh đô</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="longitude"
                            type="number"
                            placeholder="Nhập  Nhập kinh đô"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="address"> Nhập vĩ độ</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="latitude"
                            type="number"
                            placeholder="Nhập  Nhập vĩ độ"
                            className="w-full"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6">

                <MapPicker
                  setLongitude={setLongitude}
                  setLatitude={setLatitude}
                />
              </div>
              <div className="mt-6">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-8 items-start justify-items-start gap-4">
                        <Label htmlFor="description" className="col-span-1">Mô tả ngắn</Label>
                        <div className="col-span-7 w-full space-y-2">
                          <TextArea
                            id="description"
                            placeholder="Nhập mô tả ngắn về ký túc xá"
                            className="w-full min-h-24"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-8 items-start justify-items-start gap-4">
                        <Label htmlFor="content" className="col-span-1">Nội dung</Label>
                        <div className="col-span-7 w-full space-y-2">
                          <SunEditor
                            setContents={field.value || ''} // Gắn giá trị từ react-hook-form
                            onChange={(value) => field.onChange(value)} // Cập nhật giá trị vào react-hook-form
                            placeholder="Nhập nội dung..."
                            setOptions={{
                              height: "300",
                              buttonList: [
                                ['undo', 'redo'],
                                ['bold', 'italic', 'underline', 'strike'],
                                ['list', 'align', 'fontSize', 'fontColor'],
                                ['link', 'image', 'video'],
                              ],
                            }}
                          />
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />


              </div>
            </form>
          </Form>
          <DialogFooter>
            <div className='mt-8 flex justify-end gap-4'>
              <Button
                onClick={() => setOpen(false)}
                variant='outline'
                className='px-6'
              >
                Cancel
              </Button>
              <Button
                className='px-6 bg-admin-theme hover:bg-admin-theme/90'
                type='submit'
                form="create-dormitory-form"
              >
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

