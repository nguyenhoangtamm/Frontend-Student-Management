'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { useCreateNotificationMutation } from '@/services/hooks/useNotification';
import { createNotificationSchema, CreateNotificationType } from '@/schemaValidations/notification.schema';


type AddModalProps = {
  onSubmitSuccess: () => void;
};

export default function AddModal({ onSubmitSuccess }: AddModalProps) {

  const [open, setOpen] = useState(false);
  const createNotificationMutation = useCreateNotificationMutation();

  const form = useForm<CreateNotificationType>({
    resolver: zodResolver(createNotificationSchema),
    defaultValues: {
      title: "",
      content: "",
      type: 1, // Default type
    },
  });

  const onSubmit = async (values: CreateNotificationType) => {
    if (createNotificationMutation.isPending) return;
    try {
      await createNotificationMutation.mutateAsync(values);
      toast.success('Thêm thông báo thành công!', {
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
            <DialogTitle>Thêm thông báo</DialogTitle>
            <DialogDescription>Nhập thông tin thông báo</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="create-dormitory-form"
              onSubmit={form.handleSubmit(onSubmit)}
              onReset={reset}
              className='p-4'
            >
              <div className='grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="title">Tên thông báo</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Input
                            id="title"
                            type="text"
                            placeholder="Nhập tên thông báo"
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
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-start justify-items-start gap-4">
                        <Label htmlFor="content">Nội dung</Label>
                        <div className="col-span-3 w-full space-y-2">
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
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-4 items-center justify-items-start gap-4">
                        <Label htmlFor="type">Loại thông báo</Label>
                        <div className="col-span-3 w-full space-y-2">
                          <Select
                            onValueChange={(value) => field.onChange(Number(value))}
                            defaultValue={String(field.value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn loại thông báo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">Thông báo</SelectItem>
                              <SelectItem value="2">Cảnh báo</SelectItem>
                              <SelectItem value="3">Khuyến cáo</SelectItem>
                              <SelectItem value="4">Thông báo khẩn</SelectItem>

                            </SelectContent>
                          </Select>
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

