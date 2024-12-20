import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'
import { FormControl, FormField, FormLabel, FormMessage } from '/@/components/ui/form'

import { authFormSchema } from '@lib/utils'

import { z } from 'zod'

interface CustomInput{
    control:Control<z.infer<typeof authFormSchema>>,
    form:Control,
    name:FieldPath<z.infer<typeof authFormSchema>>,
    label:string,
    placeholder:string
}

const CustomInput = ({control,name,label,
    placeholder}:CustomInput) => {
  return (

<FormField
control={control}
name={name}
render={({ field }) => (

<div className="form-item">

<FormLabel className="form-label">
{label}
</FormLabel>
<div className="flex w-full flex-col">

<FormControl>
<Input
placeholder={placeholder}
className="input-class"
type={name=== 'password'?'password':  'text'}
{...field}/>
</FormControl>
<FormMessage
className="form-Message mt-2"/>
</div>

</div>

)}
/>
             
  )
}

export default CustomInput
