'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Form from '../contactForm/Form'
import './Dialog.scss'

export default function DialogWithForm({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="dialog">
      <DialogBackdrop className="dialog__backdrop" />

      <div className="dialog__container">
        <div className="dialog__wrapper">
          <DialogPanel className="dialog__panel">
            <span onClick={() => setOpen(false)} className="dialog__close">x</span>
            <div className="dialog__penal">
              <div className="dialog__header">
                <DialogTitle as="h2" className="dialog__title">
                  Обратный Звонок
                </DialogTitle>
              </div>
              <Form />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
