import React from 'react';
import { useEffect, useState } from 'react';

function App() {

  const REQ_URL = "http://63.142.251.101:3000/homepage";
  const XHRDATA = {
      method: 'POST',
      headers: {
          'Accept': 'application/json; odata=verbose'
      },
  };

  const [allCount, setAllCount] = useState([])
  const [chefWeek, setChefWeek] = useState([])
  const [popularweek, setPopularWeek] = useState([])
const getData = async () => {
    const response = await fetch(REQ_URL, XHRDATA);
    const jsonData = await response.json();
    console.error(jsonData)
    setAllCount(jsonData.data.allcount);
    console.error(jsonData.data.allcount);
    setChefWeek(jsonData.data.chefweek);
    console.error(jsonData.data.chefweek);
    setPopularWeek(jsonData.data.popularweek);
    console.error(jsonData.data.popularweek);
  }

  useEffect(() => {
    getData();
  }, []);
      return (
            <div>
                  <div className='flex justify-around space-x-44'>
                        <div>
                              <div><svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg></div>
                              <div className='text-xs text-red-600'><p>Lokal</p></div>
                              <div><p className='text-xs text-green'>GRUB</p></div>
                        </div>
                        <div className='flex space-x-6'>
                              <p className='w-24 h-5 px-2 mt-1 text-xs text-red-400 border border-red-400 rounded-lg'>Become Chef</p>
                              <p className='w-16 h-5 px-4 py-0 mt-1 mb-2 text-xs text-white bg-red-600 rounded-lg'>Login</p>
                        </div>

                  </div>

                  <div>
                        <div className='flex justify-center w-full h-32 space-x-6 bg-gray-100 shadow-inner py-9'>
                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='px-3 mt-2 text-xs'><p>All</p></div>

                              </div>

                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Indian</p></div>
                              </div>

                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Chinese</p></div>
                              </div>

                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Italian</p></div>
                              </div>

                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Korean</p></div>
                              </div>


                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Indian</p></div>
                              </div>

                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Chinese</p></div>
                              </div>


                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Italian</p></div>
                              </div>


                              <div>
                                    <div><img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" /></div>
                                    <div className='mt-2 text-xs'><p>Korean</p></div>
                              </div>
                        </div>

                        <div className='flex justify-center -mt-2'>
                              <input className="h-8 border border-gray-200 rounded-full w-80" type="text" />
                              <div className='flex space-x-32 -ml-80'>
                                    <div className='flex'>
                                          <div className='px-0 py-2'>
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                          </div>
                                          <div className='px-1 py-1'>
                                                <p className='text-gray-300 '>Select a Delivery Day</p>
                                          </div>
                                    </div>


                                    <div className='mt-2 -px-4'>
                                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>

                              </div>

                        </div>

                        <div className='flex justify-around mt-12'>
                              <div>
                                    <p className='text-xl font-bold'>Popular Weekly Food</p>
                              </div>
                              <div className='flex space-x-6'>
                                    <div className='w-8 h-8 px-1 py-1 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    </div>

                                    <div className='w-8 h-8 px-1 py-1 text-gray-200 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                              </div>

                        </div>




                        <div className='flex justify-center mt-12 space-x-6'>

                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div>
                                             {popularweek.map((value,index)=>{
                                                    console.log(value.dishImage)
                                             })}
                                             <img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" />
                                          
                                          </div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>


                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>

                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>



                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>
                              </div>

                        </div>







                        <div className='w-full h-56 mt-16 mb-6 bg-red-600'>
                              <p className='flex justify-center py-4 text-xl font-semibold text-white'>Chef Of The Week</p>
                              <div className='flex flex-row pl-40 rounded-lg shadow-md'>
                                    <div className='flex flex-row justify-center item-center'>
                                          <div>
                                                <img className="max-w-sm h-72" src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" />
                                          </div>
                                          <div className='z-10 w-16 h-16 -ml-8 bg-white rounded-full mt-28'>
                                                <svg className="w-12 h-12 mt-2 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                          </div>
                                    </div>
                                    <div className='w-full h-full max-w-lg p-10 -ml-8 bg-white shadow'>
                                          <div className='flex flex-row justify-between item-center'>
                                                <div><h1 className='text-xl font-medium'>Chef Sofia</h1></div>
                                                <div className='flex flex-row justify-around text-xs tracking-wide item-center'> <span>4.5</span>
                                                      <span >
                                                            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                      </span>
                                                      <span>(10 reviews)</span>
                                                </div></div>
                                          <p className='pt-4 text-sm font-normal text-gray-500'>JavaScript Hoisting refers to the process whereby the interpreter appears to move the
                                                declaration of functions, variables or classes to the top of their scope, prior to execution
                                                of the code. Hoisting allows functions to be safely used in code before they are declared.19-Jan-2022</p>
                                          <div className='mt-6 tracking-wide text-blue-500 '>
                                                <span className='flex flex-row text-green-600 item-center'><span>View Details</span> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> </span></div>
                                    </div>
                              </div>


                        </div>

                        <div className='flex justify-around mt-44'>
                              <div>
                                    <p className='text-2xl font-bold'>Explore Mexican Dishes</p>
                              </div>
                              <div className='flex space-x-6'>
                                  
                                 <div className='w-24 bg-red-600 rounded-full h-9'>
                                       <h2 className='px-4 py-2 text-sm text-white'>View All</h2>
                                 </div>

                                 <div className='flex space-x-6'>
                                    <div className='w-8 h-8 px-1 py-1 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    </div>

                                    <div className='w-8 h-8 px-1 py-1 text-gray-200 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                              </div>
                              
                              </div>

                        </div>




                        <div className='flex justify-center mt-12 space-x-9'>

                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>


                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>

                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>



                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>
                              </div>

                        </div>





                        
                        <div className='flex justify-around mt-12'>
                              <div>
                                    <p className='text-2xl font-bold'>Explore Indian Dishes</p>
                              </div>
                              <div className='flex space-x-6'>
                                  
                                 <div className='w-24 bg-red-600 rounded-full h-9'>
                                       <h2 className='px-4 py-2 text-sm text-white'>View All</h2>
                                 </div>

                                 <div className='flex space-x-6'>
                                    <div className='w-8 h-8 px-1 py-1 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    </div>

                                    <div className='w-8 h-8 px-1 py-1 text-gray-200 border border-green-200 rounded-full'>
                                          <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                              </div>
                              
                              </div>

                        </div>




                        <div className='flex justify-center mt-12 space-x-9'>

                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>


                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>

                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>


                              </div>



                              <div>

                                    <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                          <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                          <div className='flex ml-3 space-x-48'>
                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                </div>

                                                <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </div>

                                          </div>

                                          <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                                <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                          </div>

                                          <div>
                                                <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                                <p className='px-2 text-xs'>Chef Mary</p>
                                          </div>


                                          <div className='flex space-x-2'>


                                                <div className='flex px-2 py-2'>
                                                      <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                            <p className='px-1 text-xs text-white'>4.5</p>
                                                            <div className='py-1'>
                                                                  <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                      </div>



                                                </div>


                                                <div className='flex mt-2 space-x-2 truncate'>
                                                      <p className='text-xs text-green-600'>View Details</p>
                                                      <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                                </div>



                                          </div>
                                    </div>
                              </div>

                        </div>





                        <div className='flex justify-around mt-12'>
                        <div>
                              <p className='text-2xl font-bold'>Explore Italian Dishes</p>
                        </div>
                        <div className='flex space-x-6'>
                            
                           <div className='w-24 bg-red-600 rounded-full h-9'>
                                 <h2 className='px-4 py-2 text-sm text-white'>View All</h2>
                           </div>

                           <div className='flex space-x-6'>
                              <div className='w-8 h-8 px-1 py-1 border border-green-200 rounded-full'>
                                    <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                              </div>

                              <div className='w-8 h-8 px-1 py-1 text-gray-200 border border-green-200 rounded-full'>
                                    <svg className="w-6 h-6 text-xs text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                              </div>
                        </div>
                        
                        </div>

                  </div>




                  <div className='flex justify-center mt-12 space-x-9'>

                        <div>

                              <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                    <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                    <div className='flex ml-3 space-x-48'>
                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                          </div>

                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                          </div>

                                    </div>

                                    <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                          <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                    </div>

                                    <div>
                                          <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                          <p className='px-2 text-xs'>Chef Mary</p>
                                    </div>


                                    <div className='flex space-x-2'>


                                          <div className='flex px-2 py-2'>
                                                <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                      <p className='px-1 text-xs text-white'>4.5</p>
                                                      <div className='py-1'>
                                                            <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                      </div>
                                                </div>
                                                <div>
                                                      <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                </div>


                                          </div>


                                          <div className='flex mt-2 space-x-2 truncate'>
                                                <p className='text-xs text-green-600'>View Details</p>
                                                <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                          </div>



                                    </div>
                              </div>


                        </div>



                        <div>

                              <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                    <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                    <div className='flex ml-3 space-x-48'>
                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                          </div>

                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                          </div>

                                    </div>

                                    <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                          <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                    </div>

                                    <div>
                                          <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                          <p className='px-2 text-xs'>Chef Mary</p>
                                    </div>


                                    <div className='flex space-x-2'>


                                          <div className='flex px-2 py-2'>
                                                <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                      <p className='px-1 text-xs text-white'>4.5</p>
                                                      <div className='py-1'>
                                                            <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                      </div>
                                                </div>

                                                <div>
                                                      <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                </div>

                                          </div>


                                          <div className='flex mt-2 space-x-2 truncate'>
                                                <p className='text-xs text-green-600'>View Details</p>
                                                <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                          </div>



                                    </div>
                              </div>


                        </div>



                        <div>

                              <div className='relative h-64 bg-white border border-gray-200 rounded shadow w-60'>
                                    <div><img className="px-2 py-2 opacity-100 w-60 h-44" src="https://picsum.photos/200" /></div>
                                    <div className='flex ml-3 space-x-48'>
                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                          </div>

                                          <div className='absolute w-6 h-6 bg-white rounded-full top-20'>
                                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                          </div>

                                    </div>

                                    <div className='absolute ml-40 border-2 border-white rounded-full w-13 h-13 top-36'>
                                          <img className="w-12 h-12 rounded-full" src="https://source.unsplash.com/user/c_v_r/1900x800" />
                                    </div>

                                    <div>
                                          <p className='px-2 text-sm font-semibold text-black'>Eggs and Spinach</p>
                                          <p className='px-2 text-xs'>Chef Mary</p>
                                    </div>


                                    <div className='flex space-x-2'>


                                          <div className='flex px-2 py-2'>
                                                <div className='flex w-10 h-5 bg-red-600 rounded'>
                                                      <p className='px-1 text-xs text-white'>4.5</p>
                                                      <div className='py-1'>
                                                            <svg className="w-2 h-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                                      </div>
                                                </div>
                                                <div>
                                                      <p className='ml-2 text-xs truncate'>(10 review)</p>
                                                </div>



                                          </div>


                                          <div className='flex mt-2 space-x-2 truncate'>
                                                <p className='text-xs text-green-600'>View Details</p>
                                                <p><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></p>
                                          </div>



                                    </div>
                              </div>
                        </div>

                  </div>

                  <div>
                        <div>
                            

                             <div></div>
                             <div></div>
                             <div></div>
                        
                        
                        </div>
                        
                  
                  </div>

                  </div>
            </div>
      )
}

export default App

