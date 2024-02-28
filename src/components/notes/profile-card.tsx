import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function ProfileCard({ className }: { className?: string }) {
    return (
        <div className={cn("flex  gap-4 h-fit ", className)}>
            <Avatar className="h-9 w-9">
                <AvatarImage src="/jupiter.jpg" alt="Avatar" />
                <AvatarFallback>MG</AvatarFallback>
            </Avatar>

            <div className="text-left">
                <p className="text-sm font-medium">Marcus Georgievski</p>
                <p className="text-muted-foreground text-xs">
                    @marcusgeorgievski
                </p>
            </div>
        </div>
    )
}
