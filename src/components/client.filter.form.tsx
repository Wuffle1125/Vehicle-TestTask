'use client'

import useFilterForm from '@/hooks/useFilterForm'
import { Input } from '@supabase/ui'

export default function FilterForm() {
  const { filter, onChangeHandler } = useFilterForm()

  return (
    <div className="md:w-[320px] 2xl:w-[400px] h-fit sticky top-2 md:top-20 bg-theme-light shrink-0 rounded-lg p-4 md:p-10 grid grid-cols-2 md:flex flex-col gap-y-2 md:gap-y-4 gap-x-2">
      <Input
        label="Brand"
        name="brand"
        onChange={onChangeHandler}
        placeholder="Seat"
        value={filter.brand}
      />
      <Input
        label="Model"
        name="model"
        onChange={onChangeHandler}
        placeholder="Arona"
        value={filter.model}
      />
      <Input
        label="Color"
        name="color"
        onChange={onChangeHandler}
        placeholder="Grey"
        value={filter.color}
      />
      <Input
        label="Category"
        name="category"
        onChange={onChangeHandler}
        placeholder="VAN"
        value={filter.category}
      />
      <Input
        label="Min Power"
        name="from_power"
        onChange={onChangeHandler}
        placeholder="20"
        value={filter.from_power}
      />
      <Input
        label="Max Power"
        name="to_power"
        onChange={onChangeHandler}
        placeholder="1200"
        value={filter.to_power}
      />
    </div>
  )
}
