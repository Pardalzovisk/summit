import { TextInput, View, TextInputProps } from "react-native"
import { ReactNode } from "react"
import clsx from 'clsx'
import { colors } from "@/styles/colors"

type Variants = 'primary' | 'secondary'

type InputProps = {
    children: ReactNode
    variant?: Variants
}

function Input({children, variant="primary"}: InputProps){
    return (<View className={clsx(
        'w-full h-16 flex-row items-center gap-2 border border-green-400 rounded-lg',
        {
            'h-14 px-4 rounded-lg border border-zinc-700': variant !== 'primary'
        }
    )}>
        {children}
        </View>)
}

function Field({ ...rest}: TextInputProps){
    return (<TextInput 
        placeholderTextColor={colors.gray[200]} 
        className="flex-1 text-zinc-100 text-lg font-regular" 
        {...rest}>
        </TextInput>)
}

Input.Field = Field

export { Input }