import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const CardSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={50} />
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={50} />
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={50} />
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={50} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
