'use client';

import React from 'react';
import Modal, { ModalProps } from './modal';
import CompanyForm from './company-form';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
