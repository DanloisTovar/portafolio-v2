import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['About Me', 'Proyects', 'Contact'];

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			{/* name in mobile */}
			<Typography
				variant="h6"
				sx={{ my: 2 }}
				component={Link}
				to={`/about-me`}
			>
				Danlos Tovar
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							component={Link}
							/* se hizo un replace para que no tomara el mismo nombre que el del menu! */
							to={`/${
								item.toLowerCase() === 'about me'
									? item
											.toLowerCase()
											.replace('about me', 'about-me')
									: item.toLowerCase()
							}`}
							sx={{ textAlign: 'center' }}
						>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					{/*  name on desktop */}
					<Typography
						variant="h6"
						component={Link}
						to={`/about-me`}
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
						}}
					>
						Danlois Tovar
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button
								key={item}
								component={Link}
								/* se hizo un replace para que no tomara el mismo nombre que el del menu! */
								to={`/${
									item.toLowerCase() === 'about me'
										? item
												.toLowerCase()
												.replace('about me', 'about-me')
										: item.toLowerCase()
								}`}
								sx={{ color: '#fff' }}
								style={{ textTransform: 'none' }}
							>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

Navbar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */

	navItems: PropTypes.array.isRequired, // Si navItems es un array
	window: PropTypes.func,
};

export default Navbar;
