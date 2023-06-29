import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

interface Props {
    children: React.ReactNode;
    onClose: () => void;
    open: boolean;
}

const ModalBackground = styled.div<{open: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    display: ${props => props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 98;
`;

const ModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
    z-index: 99;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.black};
    z-index: 100;
`;
const Modal = ({children, onClose, open}: Props) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const handleClose = () => {
        onClose();
    }

    useEffect(() => {
        if (open && modalRef.current && !document.fullscreenElement) {
            modalRef.current.requestFullscreen();
        } else if (!open && document.fullscreenElement) {
            document.exitFullscreen();
        }
    }, [open])

    return (
        <ModalBackground open={open}>
            <ModalContainer>
                <ModalCloseButton onClick={handleClose}>&times;</ModalCloseButton>
                {children}
            </ModalContainer>
        </ModalBackground>
    )
}

export default Modal;