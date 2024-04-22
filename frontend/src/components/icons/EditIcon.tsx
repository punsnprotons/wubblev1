import { useEffect, useState } from 'react'
import { SvgIcon } from '@mui/material'

const EditIcon = (props: any) => {
    const { color, active, ...rest } = props

    const [colorFill, setColorFill] = useState('#9C9C9C')

    useEffect(() => {
        if (color) {
            setColorFill(color)
        }
    }, [color])

    return (

        <SvgIcon
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
        >
            <path d="M16.2485 6.826C16.0703 6.826 15.9257 6.96931 15.9257 7.1459V14.2697C15.9257 15.2691 15.105 16.0825 14.0966 16.0825H3.33414C2.32572 16.0825 1.50496 15.2691 1.50496 14.2697V3.60402C1.50496 2.60467 2.32572 1.79128 3.33414 1.79128H10.4606C10.6388 1.79128 10.7834 1.64797 10.7834 1.47138C10.7834 1.2948 10.6388 1.15149 10.4606 1.15149H3.33414C1.96936 1.15149 0.859375 2.25193 0.859375 3.60402V14.2697C0.859375 15.6223 1.96936 16.7223 3.33414 16.7223H14.0966C15.4613 16.7223 16.5713 15.6223 16.5713 14.2697V7.1459C16.5713 6.96931 16.4267 6.826 16.2485 6.826Z"
                fill={colorFill}
            />
            <path d="M4.76558 9.99056L3.61342 13.2437L3.60696 13.262L3.60266 13.2812C3.55531 13.4953 3.62331 13.7124 3.78514 13.8621C3.90221 13.9709 4.05199 14.0285 4.2065 14.0285C4.26503 14.0285 4.324 14.0204 4.3821 14.0033L4.39888 13.9986L7.57174 12.7007C7.81664 12.6005 8.03528 12.4559 8.2225 12.2703L16.3414 4.22435C17.0292 3.54276 17.0292 2.43379 16.3414 1.7522L15.8181 1.23312C15.1303 0.551526 14.0113 0.551526 13.3235 1.23312L5.23815 9.24627C5.02769 9.45484 4.86414 9.71204 4.76558 9.99056ZM13.7802 1.68566C13.9984 1.46941 14.2846 1.3615 14.5708 1.3615C14.857 1.3615 15.1437 1.46941 15.3614 1.68566L15.8848 2.20432C16.0961 2.41374 16.2123 2.69184 16.2123 2.98785C16.2123 3.28386 16.0961 3.56238 15.8848 3.77138L14.6401 5.00489L12.535 2.91875L13.7802 1.68566ZM5.6948 9.69839L12.0788 3.37172L14.1839 5.45786L7.76628 11.8178C7.63975 11.9432 7.49126 12.0413 7.32599 12.1091L4.2547 13.3652L5.37502 10.2025C5.44173 10.014 5.55234 9.83957 5.6948 9.69839Z"
                fill={colorFill}
            />
        </SvgIcon>
    )
}

export default EditIcon