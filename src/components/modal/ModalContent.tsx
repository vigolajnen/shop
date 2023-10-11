import React from 'react'
import { IModalContentProps } from '../../types'

export default function ModalContent({children}: IModalContentProps) {
  return (
    <div className="overflow-y-auto h-full relative p-4 py-8 sm:p-10 xl:p-16 flex-auto">
      {children}
    </div>
  )
}
