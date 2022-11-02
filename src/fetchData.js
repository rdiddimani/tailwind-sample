import React, { useEffect } from 'react'
import { useFetch } from './zustand'


const FetchData = () => {
  let urlFetch = "https://my-json-server.typicode.com/typicode/demo/posts";

  const [fetchData, getData] = useFetch(state => [state.fetchData, state.fetch]);
  const setLoading = useFetch(state => state.setLoading);
  const loading = useFetch(state => state.loading);

  useEffect(() => {
    getData(urlFetch);
    let timer = setTimeout(() => {
      setLoading()
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])


  return (
    <div className='flex-auto text-center'>
      Fetching Data
      <div className='text-left ml-10 mt-5'>
        {
          loading ?
            <h1>Loading...</h1> :
            fetchData.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })
        }
      </div>
    </div>
  )
}

export default FetchData