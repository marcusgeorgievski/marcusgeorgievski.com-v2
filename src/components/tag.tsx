import { Tag } from "@/lib/types"
import { cn } from "@/lib/utils"
import { tags } from "@/lib/tags"

interface TagProps {
    name: string
    className?: string
    custom?: {
        border?: boolean
        icon?: boolean
        variant?: "minimal" | "inline" | any
    }
}

export default function Tag({
    name,
    className,
    custom = {
        variant: "",
        border: false,
        icon: true,
    },
}: TagProps) {
    const tag: Tag | undefined = tags.find((tag) => tag.name === name)

    if (!tag) return null

    const { text, textStyle, icon, iconStyle, image, styles } = tag

    const Icon = icon

    if (custom?.variant === "inline") {
        return (
            <span
                className={cn(
                    className,
                    "inline-flex items-center justify-center"
                )}
            >
                {tag.icon && <Icon className={cn("inline-flex")} />}
                <span className={cn("inline")}>{name}</span>
            </span>
        )
    }

    if (custom?.variant === "minimal") {
        return (
            <span
                className={cn(
                    className ||
                        "text-accent-foreground/90 border bg-accent rounded text-xs px-2 py-0.5 inline-flex items-center justify-center gap-1.5",
                    "inline-flex items-center justify-center",
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
                    styles,
                    "border rounded text-xs px-2 py-0.5 inline-flex items-center justify-center gap-1.5"
                )}
            >
                {icon && <Icon className={cn(iconStyle || "text-white")} />}
                {text && <span className={cn(textStyle)}>{text}</span>}
            </span>
        </>
    )
}
