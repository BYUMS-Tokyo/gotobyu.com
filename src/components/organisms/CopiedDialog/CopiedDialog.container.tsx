import { useEffect, useCallback, FC } from 'react';
import { useRecoilState } from 'recoil';
import { globalState } from '@s/global';
import { CopiedDialog, Props as CopiedDialogProps } from './CopiedDialog';

export interface Props extends Omit<CopiedDialogProps, 'isOpen' | 'onClose'> {}

const CopiedDialogContainer: FC<Props> = (props: Props) => {
  const [{ showCopiedModal }, setIsOpen] = useRecoilState(globalState);

  const closeDialog = useCallback(() => {
    setIsOpen((prevState) => ({
      ...prevState,
      showCopiedModal: false,
    }));
  }, [setIsOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => closeDialog(), 1200);
    return () => clearTimeout(timeout);
  }, [showCopiedModal, closeDialog]);

  return (
    <CopiedDialog {...props} isOpen={showCopiedModal} onClose={closeDialog} />
  );
};

export default CopiedDialogContainer;
