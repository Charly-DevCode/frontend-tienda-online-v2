import '@/shared/styles/components/custom-title.css';

interface CustomTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'shop' | 'admin';
  as?: 'h1' | 'h2' | 'h3';
}

export const CustomTitle = ({ 
  title, 
  subtitle, 
  className = '', 
  variant = 'shop',
  as: Tag = 'h1'
}: CustomTitleProps) => {
  return (
    <div className={`${ variant }-header ${ className }`.trim()}>
      <Tag className={`${ variant }__title`}>{ title }</Tag>
      {subtitle && (
        <p className={`${ variant }__subtitle`}>{ subtitle }</p>
      )}
    </div>   
  );
};