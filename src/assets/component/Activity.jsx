import React from 'react'

export default function Activity() {
    return (
        <div className='bg-white p-5 rounded-md border border-gray-200 font-body'>
            <h1 className='font-heading mb-5'>Aktivitas Terbaru</h1>
            <div className='grid gap-5'>
                <div className='flex justify-between items-center p-2.5 bg-gray-50 hover:bg-gray-200 rounded-md'>
                    <div className="flex justify-center items-center gap-2 p-2 w-fit">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-gray-800 font-body">Review desain landing page</span>
                    </div>
                    <h1 className='font-light text-sm'>2 jam lalu</h1>
                </div>
                <div className='flex justify-between items-center gap-4 p-2.5 bg-gray-50 hover:bg-gray-200 rounded-md'>
                    <div className="flex justify-center items-center gap-2 p-2 w-fit">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-gray-800 font-body">Meeting dengan tim development</span>
                    </div>
                    <h1 className='font-light text-sm'>8 jam lalu</h1>
                </div>
                <div className='flex justify-between items-center gap-4 p-2.5 bg-gray-50 hover:bg-gray-200 rounded-md'>
                    <div className="flex justify-center items-center gap-2 p-2 w-fit">
                        <span className="w-3 h-3  bg-yellow-500 rounded-full"></span>
                        <span className="text-gray-800 font-body">Finalisasi dokumentasi API</span>
                    </div>
                    <h1 className='font-light text-sm'>5 jam lalu</h1>
                </div>
            </div>
        </div>
    )
}
