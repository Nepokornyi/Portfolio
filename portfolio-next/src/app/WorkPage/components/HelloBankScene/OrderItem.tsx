import { formatCrowns } from '@/app/WorkPage/lib/format'
import { LaptopPicture } from './LaptopPicture'
import { Product } from './types'

type OrderItemProps = {
    product: Product
    // The direction, the gap, and the padding of the card, from the layout
    className: string
    // The size and the padding of the picture box, from the layout
    pictureClassName: string
}

export const OrderItem = ({
    product,
    className,
    pictureClassName,
}: OrderItemProps) => (
    <div
        className={`flex shrink-0 border border-primary-hairline bg-white/[0.03] ${className}`}
    >
        <div className={`bg-primary-input-background ${pictureClassName}`}>
            <LaptopPicture className="size-full text-primary-stroke drop-shadow-[0_0_0.4em_currentColor]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-[0.8em]">
            <div className="flex min-w-0 flex-col">
                <span className="truncate font-bold leading-tight text-white">
                    {product.name}
                </span>
                <span className="truncate text-[0.7em] text-white/40">
                    {product.details}
                </span>
            </div>
            <span className="shrink-0 font-bold tabular-nums text-white">
                {formatCrowns(product.price)}
            </span>
        </div>
    </div>
)
