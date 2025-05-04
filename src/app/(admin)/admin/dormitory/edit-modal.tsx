'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { editDormitorySchema, EditDormitoryType } from '@/schemaValidations/dormitory.schema';
import { useProvinces } from '@/services/hooks/useProvince';
import { useDistricts } from '@/services/hooks/useDistrict';
import { useWards } from '@/services/hooks/useWard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDormitoryById, useEditDormitoryMutation } from '@/services/hooks/useDomitory';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import MapPicker from './map-picker';
import TextArea from 'antd/es/input/TextArea';

type EditModalProps = {
    id: number | undefined;
    open: boolean;
    setOpen: (open: boolean) => void;
    onSubmitSuccess: () => void;
}

export default function EditModal({ id, open, setOpen, onSubmitSuccess }: EditModalProps) {
    const editDormitoryMutation = useEditDormitoryMutation();
    // Fetch dormitory details
    const { data: detailDormitory } = useDormitoryById({
        id: id as number,
        enabled: Boolean(id),
    });
    console.log("detailDormitory", detailDormitory);
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
    const form = useForm<EditDormitoryType>({
        resolver: zodResolver(editDormitorySchema),
        defaultValues: {
            id: undefined,
            name: "",
            address: "",
            wardId: 0,
            districtId: 0,
            provinceId: 0,
            ownerName: "",
            phoneNumber: "",
            description: "",
            content: "",
            status: 1,
            longitude: undefined,
            latitude: undefined,
        },
    });
    useEffect(() => {
        form.setValue('longitude', longitude);
        form.setValue('latitude', latitude);
    }
        , [longitude, latitude, form]);
    // Update form when detail data is loaded
    useEffect(() => {
        if (detailDormitory) {
            form.setValue('id', detailDormitory.id);
            form.setValue('name', detailDormitory.name);
            form.setValue('address', detailDormitory.address);
            form.setValue('wardId', detailDormitory.wardId);
            form.setValue('districtId', detailDormitory.districtId);
            form.setValue('provinceId', detailDormitory.provinceId);
            form.setValue('ownerName', detailDormitory.ownerName);
            form.setValue('phoneNumber', detailDormitory.phoneNumber);
            form.setValue('description', detailDormitory.description || '');
            form.setValue('content', detailDormitory.content || '');
            form.setValue('status', detailDormitory.status);
            form.setValue('longitude', detailDormitory.longitude ?? undefined);
            form.setValue('latitude', detailDormitory.latitude ?? undefined);
            // Set selected province and district for cascading dropdowns
            setSelectedProvinceId(detailDormitory.provinceId);
            setSelectedDistrictId(detailDormitory.districtId);
        }
    }, [detailDormitory, form, open]);


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

    const onSubmit = async (values: EditDormitoryType) => {
        if (editDormitoryMutation.isPending) return;
        try {
            await editDormitoryMutation.mutateAsync(values);
            toast.success('Cập nhật ký túc xá thành công!', {
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
        <Dialog onOpenChange={setOpen} open={open} >
            <DialogContent
                className="sm:max-w-[800px] max-h-screen overflow-auto"
                onCloseAutoFocus={() => {
                    reset();
                }}
            >
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa ký túc xá</DialogTitle>
                    <DialogDescription>Cập nhật thông tin ký túc xá</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id="edit-dormitory-form"
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
                            <div className="mt-6">

                                <MapPicker
                                    setLongitude={setLongitude}
                                    setLatitude={setLatitude}
                                />

                            </div>

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
                        <div className="mt-6">
                            <Button type="submit" className="mr-4">
                                Lưu thay đổi
                            </Button>
                            <Button type="reset" variant="outline"
                                onClick={() => setOpen(false)}

                            >
                                Hủy bỏ
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

