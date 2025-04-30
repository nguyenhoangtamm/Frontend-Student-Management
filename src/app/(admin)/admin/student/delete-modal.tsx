import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteStudentMutation } from '@/services/hooks/useStudent';
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
export default function DeleteModal(props: EventModalProps) {
    const deleteStudentMutation = useDeleteStudentMutation();

    const id = props.id;

    const { isOpen, setOpen } = props;

    const handleDelete = () => {
        deleteStudentMutation.mutate(id);
        setOpen(false);
        props.onSubmitSuccess();

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
                    <DialogTitle>Xóa sinh viên</DialogTitle>
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
