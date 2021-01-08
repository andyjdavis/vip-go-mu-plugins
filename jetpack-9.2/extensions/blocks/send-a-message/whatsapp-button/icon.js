/**
 * External dependencies
 */
import { SVG, Path } from '@wordpress/components';
import { getIconColor } from '../../../shared/block-icons';

export default (
	<SVG width="24" height="24" viewBox="0 0 24 24" version="1.1">
		<Path
			fill={ getIconColor() }
			d="M24,11.6909333 C24,18.1477333 18.7256,23.3818667 12.2181333,23.3818667 C10.1522667,23.3818667 8.21146667,22.8538667 6.52293333,21.9272 L0,24 L2.12666667,17.7274667 C1.05386667,15.9658667 0.436,13.8997333 0.436,11.6909333 C0.436,5.23413333 5.71093333,0 12.2181333,0 C18.7261333,0 24,5.23413333 24,11.6909333 Z M12.2181333,1.86186667 C6.75573333,1.86186667 2.31253333,6.2712 2.31253333,11.6909333 C2.31253333,13.8416 3.0136,15.8333333 4.19946667,17.4536 L2.96186667,21.104 L6.76853333,19.8941333 C8.33253333,20.9210667 10.2061333,21.52 12.2184,21.52 C17.68,21.52 22.124,17.1112 22.124,11.6914667 C22.124,6.27173333 17.6802667,1.86186667 12.2181333,1.86186667 Z M18.1677333,14.3834667 C18.0949333,14.2642667 17.9026667,14.1922667 17.6141333,14.0490667 C17.3250667,13.9058667 15.9048,13.2122667 15.6408,13.1170667 C15.376,13.0216 15.1829333,12.9736 14.9906667,13.2602667 C14.7984,13.5472 14.2448,14.1922667 14.076,14.3834667 C13.9074667,14.5752 13.7392,14.5992 13.4501333,14.4557333 C13.1616,14.3125333 12.2312,14.0096 11.128,13.0336 C10.2696,12.2741333 9.68986667,11.3365333 9.52133333,11.0493333 C9.35306667,10.7626667 9.50373333,10.6077333 9.648,10.4650667 C9.77813333,10.3365333 9.93706667,10.1304 10.0813333,9.9632 C10.2261333,9.79573333 10.2741333,9.67653333 10.3698667,9.48506667 C10.4666667,9.29386667 10.4184,9.12666667 10.3458667,8.98293333 C10.2738667,8.83973333 9.69573333,7.4296 9.4552,6.85573333 C9.21466667,6.2824 8.9744,6.37786667 8.8056,6.37786667 C8.63733333,6.37786667 8.44453333,6.35386667 8.252,6.35386667 C8.05946667,6.35386667 7.7464,6.4256 7.4816,6.71226667 C7.21706667,6.9992 6.4712,7.69253333 6.4712,9.1024 C6.4712,10.5125333 7.5056,11.8749333 7.6504,12.0658667 C7.79466667,12.2568 9.64773333,15.2445333 12.5837333,16.392 C15.52,17.5389333 15.52,17.1562667 16.0496,17.1082667 C16.5786667,17.0605333 17.7578667,16.4152 17.9994667,15.7464 C18.2394667,15.0765333 18.2394667,14.5029333 18.1677333,14.3834667 Z"
		/>
	</SVG>
);
