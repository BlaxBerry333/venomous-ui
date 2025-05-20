import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import type { LazyImageComponentType } from './LazyImage.types';

const LazyImage: LazyImageComponentType = memo(({ src, alt, ...props }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: { transitionDelay: '1s' },
      }}
      draggable={false}
      {...props}
    />
  );
});

LazyImage.displayName = 'LazyImage';
export default LazyImage;
