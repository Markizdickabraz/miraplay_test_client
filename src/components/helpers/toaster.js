import { Toaster } from 'react-hot-toast';

const ToasterContainer = () => {
    return (
<Toaster position="top-right" reverseOrder={false} toastOptions={{
              className: '',
            duration: 3000,
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
      fontSize: '15px',
    },
  }} />
    )
}

export { ToasterContainer };

