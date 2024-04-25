import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Categories, CategoryItem } from "@/data/categories"
import { useState } from "react"


export default function Modal() {
    const [subCat, setSubCat] = useState<CategoryItem[]>([])
    const [isForm, setIsForm] = useState(false)
    const [currentCat, setCurrentCat] = useState("")
    function handleSubCat(key: string) {
        setCurrentCat(key)
        setSubCat([...Categories[key]])
    }
    console.log(subCat)
    return (
        <>
            
            {
                isForm ?
                <div className="md:w-[450px] mt-4 mx-auto p-4 border border-slate-300">
                    <Button onClick={()=>setIsForm(false)} className="my-4" variant={'outline'}> {"<"} Back </Button>
                    <div className="flex flex-col gap-6 py-4">
                        <div className="flex flex-col items-start gap-3">
                            <Label htmlFor="name" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <Label htmlFor="name" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Your product description"
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <Label htmlFor="name" className="text-right">
                                Set Price
                            </Label>
                            <Input
                                id="name"
                                defaultValue="P0"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        {/* <DialogClose>
                            <Button variant={'outline'}>Close</Button>
                        </DialogClose> */}
                        <Button className="flex ml-auto" type="submit">Save changes</Button>
                    </div>
                </div>
                :
                <Dialog >
                <DialogTrigger  asChild>
                    <Button onClick={()=>setIsForm(false)} >Post Ads</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-auto">
                    <DialogHeader>
                        <DialogTitle className="text-center">Post Your Ads</DialogTitle>
                        <Separator />
                    </DialogHeader>
                    <div className="flex gap-x-4 flex-row py-4">
                        <div className="w-5/12  flex flex-col">
                            <Label className="text-xl font-bold py-4 px-2">Choose A Category</Label>
                            {
                                Object.keys(Categories).map((item, i) => (
                                    <div key={i} className="py-1">
                                        <Label onMouseOver={() => handleSubCat(item)} className={`text-md p-2 cursor-pointer flex flex-1 ${currentCat === item && "bg-gray-300"}`}>{item}</Label>
                                        <Separator />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex-1 flex flex-col">
                            {
                                subCat.map((item, i) => (
                                    <div key={i} className="py-1">
                                        <DialogClose asChild>
                                            <Label onClick={()=>setIsForm(true)} className="text-md p-2 cursor-pointer flex flex-1">{item.label}</Label>
                                        </DialogClose>
                                        <Separator />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            }
        </>
    )
}
