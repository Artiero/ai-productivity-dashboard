import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToCircle, faBusinessTime, faChartLine, faNoteSticky } from '@fortawesome/free-solid-svg-icons'



export default function Cardtaks() {
    return (
        <div className=' justify-start-safe grid grid-cols-4 gap-6 mt-4 font-body font-light'>
            <div className='grid grid-cols-2 bg-white p-5 rounded-md border border-gray-200 hover:shadow-xl'>
                <div className='grid gap-1'>
                    <h1 className='text-gray-500'>Tugas Selesai</h1>
                    <h2 className='text-2xl'>24</h2>
                    <p className='text-emerald-500 text-sm'>+12% dari minggu lalu</p>
                </div>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faBusinessTime} size='4x' className='text-green-600 ' />
                </div>
            </div>
            <div className='grid grid-cols-2 bg-white p-5 rounded-md border border-gray-200 hover:shadow-xl'>
                <div className='grid gap-1'>
                    <h1 className='text-gray-500'>Catatan Aktif</h1>
                    <h2 className='text-2xl'>18</h2>
                    <p className='text-emerald-500 text-sm'>+5% dari minggu lalu</p>
                </div>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faNoteSticky} size='4x' className='text-blue-500' />
                </div>
            </div>
            <div className='grid grid-cols-2 bg-white p-5 rounded-md border border-gray-200 hover:shadow-xl'>
                <div className='grid gap-1'>
                    <h1 className='text-gray-500'>Produktivitas</h1>
                    <h2 className='text-2xl'>87%</h2>
                    <p className='text-emerald-500 text-sm'>+8% dari minggu lalu</p>
                </div>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faChartLine} size='4x' className='text-yellow-500'/>
                </div>
            </div>
            <div className='grid grid-cols-2 bg-white p-5 rounded-md border border-gray-200 hover:shadow-xl'>
                <div className='grid gap-1'>
                    <h1 className='text-gray-500'>Waktu Fokus</h1>
                    <h2 className='text-2xl'>6.5h</h2>
                    <p className='text-emerald-500 text-sm'>+15% dari minggu lalu</p>
                </div>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faArrowsToCircle} size='4x' className='text-orange-500' />
                </div>
            </div>
        </div>
    )
}
