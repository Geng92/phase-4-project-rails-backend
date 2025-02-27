import React from 'react'

export default function TimeTrial({ time_trial }) {
  const { date, Lap_Time, track_id } = time_trial;

  return (
    <div className="grid grid-cols-3 grid-rows-1 w-auto h-8 xl:h-12 bg-slate-400 mx-2 overflow-hidden rounded-xl outline hover:bg-indigo-600 hover:text-orange-500">
      <div className='text-center pt-'>{date}:</div>
      <div className='text-center pt-1'>{track_id}</div>
      <div className='text-center pr-4 pt-1'>{Lap_Time} sec</div>
    </div>
  );
}
