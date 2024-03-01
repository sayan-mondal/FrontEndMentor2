import { useEffect, useRef } from 'react';

const useFn = ({ setIsNavMenuOpen, setMobileNavMenuHeight }) => {
	const navMenuRef = useRef(null);
	const iconRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			const isClickInside = navMenuRef.current?.contains(e.target);
			const navMenuHeight = navMenuRef.current?.offsetHeight;

			setMobileNavMenuHeight(`${navMenuHeight}px`);

			if (!isClickInside && !iconRef.current?.contains(e.target)) {
				setIsNavMenuOpen(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [navMenuRef, setIsNavMenuOpen, setMobileNavMenuHeight]);

	const handleNavMenuIconClick = () => {
		setIsNavMenuOpen((curVal) => !curVal);
	};

	return { navMenuRef, iconRef, handleNavMenuIconClick };
};

export default useFn;
