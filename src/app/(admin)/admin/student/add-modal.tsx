'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useCreateStudentMutation } from '@/services/hooks/useStudent';
import { Button } from '@/components/ui/button';
import { createStudentSchema, CreateStudentType } from '@/schemaValidations/student.schema';
import { useProvinces } from '@/services/hooks/useProvince';
import { useStudentClass } from '@/services/hooks/useStudentClass';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useMajor } from '@/services/hooks/useMajor';
import { useDistricts } from '@/services/hooks/useDistrict';
import { useWards } from '@/services/hooks/useWard';

type AddModalProps = {
  onSubmitSuccess: () => void;
};

export default function AddModal({ onSubmitSuccess }: AddModalProps) {
  const [open, setOpen] = useState(false);
  const createStudentMutation = useCreateStudentMutation();

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
  // class
  const [classOptions, setClassOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: classData } = useStudentClass();
  useEffect(() => {
    if (classData) {
      setClassOptions(classData);
    }

  }, [classData]);
  // major
  const [majorOptions, setMajorOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: majorData } = useMajor();
  useEffect(() => {
    if (majorData) {
      setMajorOptions(majorData);
    }
  }, [majorData]);

  const form = useForm<CreateStudentType>({
    resolver: zodResolver(createStudentSchema),
    defaultValues: {
      code: "",
      fullName: "",
      gender: undefined,
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      classId: undefined,
      majorId: undefined,
      academicYear: "",
      address: "",
      wardId: 0,
      districtId: 0,
      provinceId: 0,
    },
  });
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
  const onSubmit = async (values: CreateStudentType) => {
    if (createStudentMutation.isPending) return;
    try {
      await createStudentMutation.mutateAsync(values);
      toast.success('Đăng nhập thành công!');

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
    // handleErrorApi({
    //   error,
    //   setError: form.setError,
    // });
  }


  const reset = () => {
    form.reset();
  };
  return (
    <>
      <Button
        className='bg-admin-theme text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-90'
        onClick={() => setOpen(true)}
      >
        <Plus size={20} /> Add
      </Button>
      <Dialog onOpenChange={setOpen} open={open} >

        <DialogContent
          className="sm:max-w-[800px] max-h-screen overflow-auto"
          onCloseAutoFocus={() => {
            reset();
          }}
        >
          <DialogHeader>
            <DialogTitle>Thêm sinh viên</DialogTitle>
            <DialogDescription>Nhập thông tin sinh viên</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="create-student-form"
              onSubmit={form.handleSubmit(onSubmit)}
              onReset={reset}
              className='p-4'
            >

              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="fullName">Họ và tên</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Tên sinh viên"
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
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="code">MSSV</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="code"
                            type="text"
                            placeholder="Nhập MSSV"
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="gender">Giới tính</Label>
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
                                <SelectValue placeholder="Chọn giới tính" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem key="0" value="0">Nam</SelectItem>
                              <SelectItem key="1" value="1">Nữ</SelectItem>
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
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="dateOfBirth">Ngày sinh</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="dateOfBirth"
                            type="date"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="email">Email</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Nhập email"
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
                            type="text"
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
                        <div className="col-span-3 
                    w-full space-y-2">
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
                  name="classId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="classId">Lớp</Label>
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
                                <SelectValue placeholder="Chọn lớp" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {classOptions.map((opt, index) => (
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
                  name="majorId"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="majorId">Chọn ngành</Label>
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
                                <SelectValue placeholder="Chọn mã ngành" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {majorOptions.map((opt, index) => (
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
                  name="academicYear"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="academicYear">Năm học</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="academicYear"
                            type="text"
                            placeholder="Nhập năm học"
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
                form="create-student-form"
              >
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog >

    </>
  );
}
