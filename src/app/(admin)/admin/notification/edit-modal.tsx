'use client';

import { useEffect } from 'react';
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
import { editNotificationSchema, EditNotificationType } from '@/schemaValidations/notification.schema';
import { useNotificationById, useEditNotificationMutation } from '@/services/hooks/useNotification';

type EditModalProps = {
    id: number | undefined;
    open: boolean;
    setOpen: (open: boolean) => void;
    onSubmitSuccess: () => void;
};

export default function EditModal({ id, open, setOpen, onSubmitSuccess }: EditModalProps) {
    const editNotificationMutation = useEditNotificationMutation();

    const { data: notificationDetail } = useNotificationById({
        id: id as number,
        enabled: Boolean(id),
    });

    const form = useForm<EditNotificationType>({
        resolver: zodResolver(editNotificationSchema),
        defaultValues: {
            id: undefined,
            title: '',
            content: '',
            type: 1,
        },
    });

    useEffect(() => {
        if (notificationDetail) {
            form.setValue('id', notificationDetail.id);
            form.setValue('title', notificationDetail.title);
            form.setValue('content', notificationDetail.content || '');
            form.setValue('type', notificationDetail.type);
        }
    }, [notificationDetail, form, open]);

    const onSubmit = async (values: EditNotificationType) => {
        if (editNotificationMutation.isPending) return;
        try {
            await editNotificationMutation.mutateAsync(values);
            toast.success('Cập nhật thông báo thành công!', {
                description: 'Thông báo',
            });
            reset();
            setOpen(false);
            onSubmitSuccess();
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message, {
                    description: 'Thông báo',
                });
            }
        }
    };

    const reset = () => {
        form.reset();
    };
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogContent
                className="sm:max-w-[800px] max-h-screen overflow-auto"
                onCloseAutoFocus={() => {
                    reset();
                }}
            >
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa thông báo</DialogTitle>
                    <DialogDescription>Cập nhật thông tin thông báo</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id="edit-notification-form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        onReset={reset}
                        className="p-4"
                    >
                        <div className="grid grid-cols-1 gap-6">
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
                                                    setContents={field.value || ''}
                                                    onChange={(value) => field.onChange(value)}
                                                    placeholder="Nhập nội dung..."
                                                    setOptions={{
                                                        height: '300',
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
                                                        <SelectItem key="1" value="1">Thông báo</SelectItem>
                                                        <SelectItem key="2" value="2">Cảnh báo</SelectItem>
                                                        <SelectItem key="3" value="3">Khuyến cáo</SelectItem>
                                                        <SelectItem key="4" value="4">Thông báo khẩn</SelectItem>
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
                    <div className="mt-8 flex justify-end gap-4">
                        <Button
                            onClick={() => setOpen(false)}
                            variant="outline"
                            className="px-6"
                        >
                            Hủy bỏ
                        </Button>
                        <Button
                            className="px-6 bg-admin-theme hover:bg-admin-theme/90"
                            type="submit"
                            form="edit-notification-form"
                        >
                            Lưu thay đổi
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
