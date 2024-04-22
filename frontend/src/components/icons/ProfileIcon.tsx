import { SvgIcon } from '@mui/material'

function ProfileIcon(props: any) {
    const { color, active, ...rest } = props

    if (active) {
        return (
            <SvgIcon
                {...rest}
                sx={{
                    width: '22px !important',
                    height: '22px !important',
                    margin: { xs: '0px !important', md: '0px 3px 3px 0px !important' }
                }}
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.5 1.59611C9.33257 1.59611 11.0556 2.30987 12.3513 3.60563C13.6471 4.9014 14.3609 6.62439 14.3609 8.45697C14.3609 10.2895 13.6471 12.0125 12.3513 13.3083C11.0556 14.6041 9.33257 15.3178 7.5 15.3178C5.66742 15.3178 3.94443 14.6041 2.64866 13.3083C1.35333 12.0121 0.639568 10.2891 0.639568 8.45654C0.639568 6.62397 1.35333 4.9014 2.64909 3.60563C3.94485 2.30987 5.66785 1.59611 7.5 1.59611ZM7.5 0.956543C3.35773 0.956543 0 4.3147 0 8.45654C0 12.5984 3.35773 15.9565 7.5 15.9565C11.6423 15.9565 15 12.5984 15 8.45654C15 4.3147 11.6423 0.956543 7.5 0.956543Z" fill="#F8F8F8" />
                <path d="M7.50016 3.46537C8.83985 3.46537 9.9301 4.55562 9.9301 5.89531C9.9301 7.23499 8.83985 8.32524 7.50016 8.32524C6.16048 8.32524 5.07023 7.23499 5.07023 5.89531C5.07023 4.55562 6.16048 3.46537 7.50016 3.46537ZM7.50016 2.82581C5.80488 2.82581 4.43066 4.20002 4.43066 5.89531C4.43066 7.59059 5.80488 8.96481 7.50016 8.96481C9.19544 8.96481 10.5697 7.59059 10.5697 5.89531C10.5697 4.20002 9.19544 2.82581 7.50016 2.82581Z" fill="#F8F8F8" />
                <path d="M7.49989 10.5321C8.60421 10.5321 9.65822 10.7863 10.6325 11.2873C11.4183 11.6915 12.1274 12.2526 12.7055 12.9246C12.1274 13.5965 11.4183 14.1576 10.6325 14.5619C9.65822 15.0628 8.60421 15.317 7.49989 15.317C6.39557 15.317 5.34156 15.0628 4.36729 14.5619C3.58147 14.1576 2.8724 13.5965 2.29423 12.9246C2.8724 12.2526 3.58147 11.6915 4.36729 11.2873C5.34199 10.7863 6.396 10.5321 7.49989 10.5321ZM7.49989 9.89258C5.03201 9.89258 2.84256 11.0847 1.47559 12.9246C2.84256 14.7644 5.03201 15.9565 7.49989 15.9565C9.96777 15.9565 12.1572 14.7644 13.5242 12.9246C12.1576 11.0847 9.96819 9.89258 7.49989 9.89258Z" fill="#F8F8F8" />
            </SvgIcon>
        )
    }

    return (
        <SvgIcon
            {...rest}
            sx={{
                width: '22px !important',
                height: '22px !important',
                margin: { xs: '0px !important', md: '0px 3px 3px 0px !important' }
            }}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.5 1.59611C9.33257 1.59611 11.0556 2.30987 12.3513 3.60563C13.6471 4.9014 14.3609 6.62439 14.3609 8.45697C14.3609 10.2895 13.6471 12.0125 12.3513 13.3083C11.0556 14.6041 9.33257 15.3178 7.5 15.3178C5.66742 15.3178 3.94443 14.6041 2.64866 13.3083C1.35333 12.0121 0.639568 10.2891 0.639568 8.45654C0.639568 6.62397 1.35333 4.9014 2.64909 3.60563C3.94485 2.30987 5.66785 1.59611 7.5 1.59611ZM7.5 0.956543C3.35773 0.956543 0 4.3147 0 8.45654C0 12.5984 3.35773 15.9565 7.5 15.9565C11.6423 15.9565 15 12.5984 15 8.45654C15 4.3147 11.6423 0.956543 7.5 0.956543Z" fill="#F8F8F8" />
            <path d="M7.50016 3.46537C8.83985 3.46537 9.9301 4.55562 9.9301 5.89531C9.9301 7.23499 8.83985 8.32524 7.50016 8.32524C6.16048 8.32524 5.07023 7.23499 5.07023 5.89531C5.07023 4.55562 6.16048 3.46537 7.50016 3.46537ZM7.50016 2.82581C5.80488 2.82581 4.43066 4.20002 4.43066 5.89531C4.43066 7.59059 5.80488 8.96481 7.50016 8.96481C9.19544 8.96481 10.5697 7.59059 10.5697 5.89531C10.5697 4.20002 9.19544 2.82581 7.50016 2.82581Z" fill="#F8F8F8" />
            <path d="M7.49989 10.5321C8.60421 10.5321 9.65822 10.7863 10.6325 11.2873C11.4183 11.6915 12.1274 12.2526 12.7055 12.9246C12.1274 13.5965 11.4183 14.1576 10.6325 14.5619C9.65822 15.0628 8.60421 15.317 7.49989 15.317C6.39557 15.317 5.34156 15.0628 4.36729 14.5619C3.58147 14.1576 2.8724 13.5965 2.29423 12.9246C2.8724 12.2526 3.58147 11.6915 4.36729 11.2873C5.34199 10.7863 6.396 10.5321 7.49989 10.5321ZM7.49989 9.89258C5.03201 9.89258 2.84256 11.0847 1.47559 12.9246C2.84256 14.7644 5.03201 15.9565 7.49989 15.9565C9.96777 15.9565 12.1572 14.7644 13.5242 12.9246C12.1576 11.0847 9.96819 9.89258 7.49989 9.89258Z" fill="#F8F8F8" />
        </SvgIcon>
    )

}

export default ProfileIcon