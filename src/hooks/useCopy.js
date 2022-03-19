import * as copy from 'copy-to-clipboard';
import { useSnackbar } from 'notistack';
import { formatCompactAddress } from '../functions';
const useCopy = () => {
  const { enqueueSnackbar } = useSnackbar()
	return (address) => {
		enqueueSnackbar(`${formatCompactAddress(address)} address copied!`, {
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
		})
		copy(address)
	}
}
export default useCopy