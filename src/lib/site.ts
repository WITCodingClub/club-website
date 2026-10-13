/**
 * Site-wide links and settings used by the shared Nav and Footer.
 * Change these values here, not in the components.
 */

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	/** Visible name, for example "Instagram". Also used as the icon's accessible label. */
	label: string;
	href: string;
	/** Icon key. Footer.svelte has the matching SVG. */
	icon: 'instagram';
}

export const navLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Events', href: '/events' },
	{ label: 'Contact', href: '/contact' }
];

export const contactEmail = 'rso_witcc@wit.edu';

export const socialLinks: SocialLink[] = [
	{ label: 'Instagram', href: 'https://instagram.com/wit_coding_club', icon: 'instagram' }
];

/** True when `pathname` is `href` or a child route of `href`. */
export function isActivePath(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}
