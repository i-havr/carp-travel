import Image from 'next/image';
import { Service } from '@/helpers';

interface Props {
  service: Service;
}

export const ServicesImage: React.FC<Props> = ({ service }: Props) => {
  return (
    <div className="md:h-[370px] xl:h-[429px] overflow-hidden">
      <Image
        className="object-cover w-full h-full min-h-[213px]"
        src={service.imageDesktopRetinaUrl}
        width={280}
        height={213}
        alt={service.name}
        quality={90}
        priority
      />
    </div>
  );
};
