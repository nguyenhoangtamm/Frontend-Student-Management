import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSendNotificationMutation } from '@/services/hooks/useNotification';
import React from 'react';

interface EventModalProps {
    id: number;
    isOpen: boolean;
    setOpen: (s: boolean) => void;
    onSubmitSuccess: () => void;

}
export default function SendModal({ id, isOpen, setOpen, onSubmitSuccess }: EventModalProps) {
    const sendNotificationMutation = useSendNotificationMutation();

    const handleSend = async () => {
        await sendNotificationMutation.mutateAsync(id); // Chờ mutation hoàn tất
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
                    <DialogTitle>Gửi thông báo</DialogTitle>
                    <DialogDescription>Bạn có chắc chắn muốn gửi thông báo này không?</DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button onClick={handleCancel} className="btn-cancel">
                        Hủy
                    </Button>
                    <Button onClick={handleSend} className="btn-ok">
                        Xác nhận
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
