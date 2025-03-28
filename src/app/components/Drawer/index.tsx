'use client';

import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Container, DrawerContainer, Overlay } from './styles';

interface Drawer {
  children: ReactNode;
  isOpen: boolean;
  width?: number;
  offsetTop?: number;
  onClose?: () => void;
}

const Drawer = ({ isOpen, onClose, width, offsetTop, children }: Drawer) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen) {
    return null;
  }

  return mounted
    ? createPortal(
        <Container $offsettop={offsetTop}>
          <DrawerContainer $width={width}>{children}</DrawerContainer>
          <Overlay onClick={onClose} />
        </Container>,
        document.getElementById('drawer-root') as Element
      )
    : null;
};

export { Drawer };
