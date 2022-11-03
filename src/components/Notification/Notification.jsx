import { Not } from "./Notification.styled";
import PropTypes from 'prop-types';

export default function Notification({message}) {
    return (
        <Not>{message}</Not>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}