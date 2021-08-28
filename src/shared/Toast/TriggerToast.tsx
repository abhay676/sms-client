import toast from 'react-hot-toast';
export enum TOAST_TYPE {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  CUSTOM = 'CUSTOM',
}
export const triggerToast = (message: string, toastType: TOAST_TYPE) => {
  switch (toastType) {
    case TOAST_TYPE.SUCCESS:
      toast.success(message);
      break;
    case TOAST_TYPE.ERROR:
      toast.error(message);
      break;
    case TOAST_TYPE.LOADING:
      toast.loading(message);
      break;
    case TOAST_TYPE.CUSTOM:
      toast.custom(message);
      break;
    default:
      toast.error('error');
  }
};
