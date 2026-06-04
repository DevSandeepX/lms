"use client"

import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({
    totalPages,
    currentPage,
    limit
}: {
    totalPages: number,
    currentPage: number,
    limit: number
}) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function goToPage(page: number) {
        const params = new URLSearchParams(searchParams)
        params.set("page", String(page))
        router.push(`${pathname}?${params.toString()}`)
    }

    function changeLimit(limit: number) {
        const params = new URLSearchParams(searchParams)
        params.set("limit", String(limit))
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='w-full'>
            <div className='flex justify-between gap-4 flex-wrap'>
                <div className='flex-wrap flex items-center gap-2'>
                    <Button variant="outline" onClick={() => goToPage(1)}>First</Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <Button
                            variant="outline"
                            onClick={() => goToPage(page)}
                            key={page}

                        >
                            {page}
                        </Button>
                    ))}
                    <Button
                        disabled={currentPage === totalPages}
                        variant="outline" onClick={() => goToPage(totalPages)}>Last</Button>
                </div>
                <div className=' flex items-center gap-2'>
                    <Select
                        value={limit}
                        onValueChange={(val) => changeLimit(Number(val))}
                    >
                        <SelectTrigger className="w-35">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value={6}>
                                6 per page
                            </SelectItem>

                            <SelectItem value={9}>
                                9 per page
                            </SelectItem>

                            <SelectItem value={18}>
                                18 per page
                            </SelectItem>

                            <SelectItem value={27}>
                                27 per page
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
