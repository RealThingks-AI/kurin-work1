import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionSkeletonProps {
  type?: 'grid' | 'carousel' | 'form' | 'content';
  className?: string;
}

const SectionSkeleton = forwardRef<HTMLDivElement, SectionSkeletonProps>(
  ({ type = 'grid', className }, ref) => {
    return (
      <div ref={ref} className={cn('w-full py-16 md:py-24', className)}>
        <div className="container mx-auto px-4">
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <div className="h-4 w-24 bg-muted rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-10 w-80 max-w-full bg-muted rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 max-w-full bg-muted rounded-lg mx-auto animate-pulse" />
          </div>

          {/* Content skeleton based on type */}
          {type === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 border border-border animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-muted rounded-lg mb-4" />
                  <div className="h-6 w-3/4 bg-muted rounded mb-3" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-5/6 bg-muted rounded" />
                    <div className="h-4 w-4/6 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'carousel' && (
            <div className="flex gap-6 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-80 bg-card rounded-xl p-6 border border-border animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-5 h-5 bg-muted rounded" />
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-5/6 bg-muted rounded" />
                    <div className="h-4 w-4/6 bg-muted rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full" />
                    <div>
                      <div className="h-4 w-24 bg-muted rounded mb-1" />
                      <div className="h-3 w-20 bg-muted rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'form' && (
            <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="h-4 w-20 bg-muted rounded mb-2" />
                    <div className="h-12 w-full bg-muted rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <div className="h-4 w-20 bg-muted rounded mb-2" />
                <div className="h-32 w-full bg-muted rounded-lg" />
              </div>
              <div className="h-12 w-full bg-muted rounded-lg" />
            </div>
          )}

          {type === 'content' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 animate-pulse">
                <div className="h-8 w-3/4 bg-muted rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-5/6 bg-muted rounded" />
                  <div className="h-4 w-4/6 bg-muted rounded" />
                </div>
                <div className="flex gap-4 pt-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-center">
                      <div className="h-10 w-16 bg-muted rounded mb-2" />
                      <div className="h-4 w-12 bg-muted rounded" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-xl animate-pulse" />
            </div>
          )}
        </div>
      </div>
    );
  }
);

SectionSkeleton.displayName = 'SectionSkeleton';

export { SectionSkeleton };
