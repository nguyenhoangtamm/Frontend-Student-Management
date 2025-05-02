import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteDormitoryMutation } from '@/services/hooks/useDomitory';
import React from 'react';

// interface dataDelete {
//     id: number;
//     name: string;
// }
interface EventModalProps {
    id: number;
    isOpen: boolean;
    setOpen: (s: boolean) => void;
    onSubmitSuccess: () => void;

}
export default function DeleteModal({ id, isOpen, setOpen, onSubmitSuccess }: EventModalProps) {
    const deleteDormitoryMutation = useDeleteDormitoryMutation();



    const handleDelete = async () => {
        await deleteDormitoryMutation.mutateAsync(id); // Chờ mutation hoàn tất
        setOpen(false);
        onSubmitSuccess();

    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={isOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xóa nhà trọ</DialogTitle>
                    <DialogDescription>Bạn có chắc chắn muốn xóa sinh viên này không?</DialogDescription>
                </DialogHeader>

                {/* 
                <div>

                    <div>
                        <span>Id: </span>
                        {data.id}
                    </div>
                    <div>
                        <span>Name: </span>
                        {data.name}
                    </div>
                </div> */}

                <DialogFooter>
                    <Button onClick={handleCancel} className="btn-cancel">
                        Hủy
                    </Button>
                    <Button onClick={handleDelete} className="btn-ok">
                        Xác nhận
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
