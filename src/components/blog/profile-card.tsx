import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileCard() {
    return (
        <div className="flex gap-4 py-1 h-auto">
            <Avatar className="border">
                <AvatarImage src="/jupiter.jpg" alt="Avatar" />
                <AvatarFallback>MG</AvatarFallback>
            </Avatar>

            <div className="text-left">
                <p>Marcus Georgievski</p>
                <p className="text-muted-foreground text-xs">
                    @marcusgeorgievski
                </p>
            </div>
        </div>
    )
}
