import { Tag } from "@/lib/types"
import { cn } from "@/lib/utils"
import { tags } from "@/lib/tags"

interface TagProps {
    name: string
    custom?: {
        border?: boolean
        icon?: boolean
        variant?: "minimal" | any
    }
}

export default function Tag({
    name,
    custom = {
        variant: "",
        border: false,
        icon: true,
    },
}: TagProps) {
    const tag: Tag | undefined = tags.find((tag) => tag.name === name)

    if (!tag) return null

    const { text, textStyle, icon, iconStyle, image, className } = tag

    const Icon = icon

    if (custom?.variant === "minimal") {
        return (
            <span
                className={cn(
                    "text-accent-foreground/90 border bg-accent rounded text-xs px-2 py-0.5 inline-flex items-center justify-center gap-1.5",
                    {
                        "border-transparent": !custom.border,
                    }
                )}
            >
                {custom.icon && <Icon className={cn()} />}
                <span className={cn()}>{name}</span>
            </span>
        )
    }

    return (
        <>
            <span
                className={cn(
                    className,
                    "border rounded text-xs px-2 py-0.5 inline-flex items-center justify-center gap-1.5"
                )}
            >
                {icon && <Icon className={cn(iconStyle || "text-white")} />}
                {text && <span className={cn(textStyle)}>{text}</span>}
            </span>
        </>
    )
}
