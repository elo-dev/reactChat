export const changeCssVariables = (theme) => {
    const root = document.querySelector(':root')
    const cssVariables = ['header', 'background', 'chat__text']

    cssVariables.map((element) => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        )
    })
}