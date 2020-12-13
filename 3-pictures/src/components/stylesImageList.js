import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    imageList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '0 15px',
        gridAutoRows: 10,
    },
    image: {
        width: 250,
        gridRowEnd: 'span 2',
    },
});