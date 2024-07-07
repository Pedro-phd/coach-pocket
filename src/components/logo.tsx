import { cn } from '@/lib/cn'

interface Props {
  classNames?: string
}

export default function Logo({ classNames }: Props) {
  return (
    <span
      className={cn(
        'text-lg font-bold tracking-tight text-gray-900',
        classNames,
      )}
    >
      Coach Pocket
    </span>
  )
}
