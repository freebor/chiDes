export const FooterCard = ({data}) => {
    const {footerHeader, links} = data
  return (
    <div className="flex flex-col gap-[0.94rem]">
        <h4 className="text-lg font-bold">{footerHeader}</h4>
        <ul>
            {links.map((foot, i) =>{
                return(
                    <li key={i}>
                        <a className="text-xs text-grayText-10" href={foot.href}>{foot.link}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
