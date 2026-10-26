'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';
import { getInitials, mergeClassName } from '@internal/style';
import '@packages/styles/components/Avatar.scss';
import type { AvatarProps } from './Avatar.type';

const BLOCK = 'venomous--Avatar';

/**
 * Avatar — 头像。图片缺省或加载失败时回退为名字首字母。
 * 整体以 role="img" + name 作为无障碍名称，内部图片与首字母对读屏器隐藏，避免重复朗读；没有 name 时整体视为装饰。
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { src, name, size = 'md', className, ...rest },
  ref,
) {
  const [failedSrc, setFailedSrc] = useState<string | undefined>(undefined);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const showImage = src !== undefined && src !== '' && failedSrc !== src;

  // 服务端渲染的图片可能在 hydrate 前就加载失败，onError 来不及绑定；挂载后补查一次
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailedSrc(src);
  }, [src]);

  return (
    <span
      // 没有名字时视为装饰，对读屏器隐藏
      {...(name ? { role: 'img', 'aria-label': name } : { 'aria-hidden': true })}
      {...rest}
      ref={ref}
      className={mergeClassName(BLOCK, `${BLOCK}--size-${size}`, className)}
    >
      {showImage ? (
        <img
          ref={imgRef}
          src={src}
          alt=""
          className={`${BLOCK}__image`}
          onError={() => setFailedSrc(src)}
        />
      ) : (
        <span className={`${BLOCK}__initials`} aria-hidden="true">
          {getInitials(name ?? '')}
        </span>
      )}
    </span>
  );
});
