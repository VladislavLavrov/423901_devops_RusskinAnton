export type SvgItemProps = {
    className?: string;
    width?: number;
    height?: number;
    onClick?: ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => Promise<any>);
};
