
export default function Tabs({buttons, children, ButtonsContainer="menu"}){
    // const ButtonConatiner= buttonsContainer;
    return(
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}