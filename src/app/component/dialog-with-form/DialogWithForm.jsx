'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Form from '../contactForm/Form'


export default function DialogWithForm({open,setOpen}) {

  return (
    <Dialog open={open} onClose={()=> setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-dark-gray bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center items-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-red text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
          <span onClick={()=> setOpen(false)} className='dialog__close'>x</span>
          <div className="dialog__penal px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-white">
                <div className="mt-3  text-center sm:ml-4 sm:mt-0">
                  <DialogTitle as="h2" className="text-white font-semibold ">
                    Обратный Звонок 
                  </DialogTitle>
                </div>
            <Form 
              onSuccess={()=>{
                setOpen(false) 
                if (typeof window !== "undefined" && window.ym) {
                  window.ym(84225793, "reachGoal", "lead_callback")
                }
              }} 
            />
          </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}