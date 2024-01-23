import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  closeable?: boolean;
}

const Alert = ({ children, closeable = false }: Props) => {
  const [show, setShow] = useState(true);
  if (!show) return <></>;
  return (
    <div className="alert alert-primary">
      {children}{' '}
      {closeable && <button onClick={() => setShow(false)}>close</button>}
    </div>
  );
};

export default Alert;
