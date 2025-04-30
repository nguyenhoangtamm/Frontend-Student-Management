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

type AddModalProps = {
  onSubmitSuccess: () => void;
};

export default function AddModal({onSubmitSuccess}: AddModalProps) {
  const [open, setOpen] = useState(false);
  const createStudentMutation = useCreateStudentMutation();

  //province
  const [provinceOptions, setProvinceOptions] = useState<{ name: string; id: number }[]>([]);
  const { data } = useProvinces();
  useEffect(() => {
    if (data) {
      setProvinceOptions(data);
    }
  }, [data]);
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
      provinceId: undefined,
    },
  });
  const onSubmit = async (values: CreateStudentType) => {
    if (createStudentMutation.isPending) return;
    try {
      const result = await createStudentMutation.mutateAsync(values);
      toast.success(result?.message, {
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
                            placeholder="Tên đề án"
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
                        <Label htmlFor="birthplace">Tỉnh</Label>
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
                                <SelectValue placeholder="Chọn tỉnh" />
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
