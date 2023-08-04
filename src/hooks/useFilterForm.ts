import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// custom hooks

import useURLParams from './useURLParams'

export default function useFilterForm() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { searchParam, ...queries } = useURLParams()

  // set initial filter values from params from url
  const [filter, setFilter] = useState<IFilter>(
    // remove undefined values
    JSON.parse(JSON.stringify(queries))
  )

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target

    setFilter({ ...filter, [name]: value })
  }

  // debounce input changes and set it in url
  useEffect(() => {
    const timerID = setTimeout(() => {
      const params = new URLSearchParams(searchParams as any)

      Object.keys(filter).forEach((keyInFilter) => {
        const key = keyInFilter as IFilterKey
        if (Object.hasOwn(filter, key) && filter[key] !== undefined) {
          params.set(key, String(filter[key]))
        }
      })

      router.push('?' + params.toString())
    }, 1000)

    return () => clearTimeout(timerID)
  }, [filter])

  return { filter, onChangeHandler }
}
