import {Link} from 'react-router-dom';
import './footer.css';

export const Footer = () => {

	return (
		<div className="footer">
            <div className='linksFooter'>
			<div className="linksLeft">
				<Link to="/">Back to Home</Link>
                </div>
                <div className="linksRight">
				<a href="https://github.com/franpalberca" target="_blank" rel="noopener noreferrer">Github</a>
			</div>
            </div>
		</div>
	);
};
