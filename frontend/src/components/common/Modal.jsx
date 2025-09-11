import React from 'react'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer 
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="px-6 py-4">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end space-x-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal