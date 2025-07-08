'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ContractSchema, ContractType, SaveContractType } from '@/schemaValidations/contract.schema';
import { useListDormitoriesName } from '@/services/hooks/useDomitory';
import { useContract, useSaveContractMutation } from '@/services/hooks/useStudent';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';


export default function ProfileEdit() {
  const router = useRouter();
  // State chứa dữ liệu chỉnh sửa
  const saveContractMutation = useSaveContractMutation();

  // const [showInput, setShowInput] = useState(false);
  const { data: dataFetch, isFetching, error } = useContract();

  const form = useForm<ContractType>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      status: 1,
      room: '',
      price: '',
      dormitoryId: 0,
    },
  });

  useEffect(() => {
    if (dataFetch) {
      form.setValue('status', dataFetch.status);
      form.setValue('room', dataFetch.room);
      form.setValue('price', dataFetch.price);
      form.setValue('dormitoryId', dataFetch.dormitoryId);

    }
  }, [dataFetch, form]);

  // dormitory
  const [dormitoryOptions, setDormitoryOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: dormitorysData } = useListDormitoriesName();
  useEffect(() => {
    if (dormitorysData) {
      setDormitoryOptions(dormitorysData);
    }
  }, [dormitorysData]);


  const onSubmit = async (values: SaveContractType) => {
    if (saveContractMutation.isPending) return;
    try {
      
      await saveContractMutation.mutateAsync(values);
      toast.success('Cập nhật ký túc xá thành công!', {
        description: "Thông báo",
      });
      reset();
      router.push('/profile');
      router.refresh();
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
  };
  if (error) {
    toast.error(error.message, {
      description: "Thông báo",
    });
  }
  if (isFetching) {
    return (
      <div className='container mt-4'>
        <div className='card p-4 shadow-sm'>
          <h5 className='fw-bold text-primary'>Chỉnh sửa thông tin ngoại trú</h5>
          <hr />
          <div className='text-center'>
            <p>Đang tải dữ liệu...</p>
          </div>
        </div>
      </div>
    );

  }

  return (
    <div className='container mt-4'>


      <Form {...form}>
        <form
          id="edit-dormitory-form"
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={reset}
          className='p-4'
        >
          <div className='grid gap-6'>

            <div className='card p-4 shadow-sm'>
              <h5 className='fw-bold text-primary'>Chỉnh sửa thông tin ngoại trú</h5>
              <hr />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <Label className='form-label'>Trạng thái</Label>
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
                        <SelectItem value="1">Ký túc xá</SelectItem>
                        <SelectItem value="2">Ngoại trú</SelectItem>
                        <SelectItem value="3">Ở nhà</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}

              />
              {form.watch('status') == 2 && (

                <>
                  <h6 className='fw-bold text-secondary'>Nhà trọ</h6>
                  <FormField
                    control={form.control}
                    name="dormitoryId"
                    render={({ field }) => (
                      <FormItem>
                        <Label className='form-label'>Chọn nhà trọ</Label>
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
                              <SelectValue placeholder="Chọn nhà trọ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dormitoryOptions.map((opt) => (
                              <SelectItem key={opt.id} value={opt.id.toString()}>
                                {opt.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <h6 className='fw-bold text-secondary mt-4'>Thông tin hợp đồng</h6>
                  <FormField
                    control={form.control}
                    name="room"
                    render={({ field }) => (
                      <FormItem>
                        <Label className='form-label'>Phòng</Label>
                        <FormControl>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập số phòng"
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <Label className='form-label'>Phí ngoại trú</Label>
                        <FormControl>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Nhập phí ngoại trú"
                            {...field}
                            value={field.value ?? ''} // Đảm bảo là chuỗi
                            onChange={e => field.onChange(e.target.value)} // Luôn truyền chuỗi
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* {showInput && (
          <div className='row mt-3'>
            {formData?.dormitory.services.map((service, index) => (
              <div className='col-md-6' key={index}>
                <label className='form-label'>{service.name}</label>
                <div className='input-group '>
                  <input
                    type='number'
                    className='form-control m-2'
                    name={`dormitory.services.${index}.price`}
                    value={service.price}
                    placeholder={`Nhập ${service.name}`}
                    onChange={handleChange}
                  />
                  <label className='form-label m-2'>{service.unit}</label>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='text-start mt-4'>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={handleMoreService}
          >
            {showInput ? 'Ẩn chi tiết' : 'Thêm chi tiết'}
          </button>
        </div> */}

            </div>

          </div>
          <div className="mt-6">
            <Button type="submit" className="mr-4">
              Lưu thay đổi
            </Button>
            <Button type="reset" variant="outline"
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
              onClick={reset}

            >
              Đặt lại
            </Button>
          </div>
        </form>
      </Form>









    </div >
  );
}
