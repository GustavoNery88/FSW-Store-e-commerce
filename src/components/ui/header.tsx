import { LogInIcon, MenuIcon, ShoppingCartIcon, PercentIcon, ListOrderedIcon, HomeIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return (
        <Card className="flex items-center justify-between p-[1.875rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>

                    <div className="mt-4 flex flex-col gap-2">
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <LogInIcon size={16} />
                            Fazer Login
                        </Button>

                        <Button className="w-full justify-start gap-2" variant="outline">
                            <HomeIcon size={16} />
                            Inicio
                        </Button>

                        <Button className="w-full justify-start gap-2" variant="outline">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>

                        <Button className="w-full justify-start gap-2" variant="outline">
                            <ListOrderedIcon size={16} />
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="text-lg font-semibold">
                <span className="text-primary">FSW</span> Store
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    )

};

export default Header;