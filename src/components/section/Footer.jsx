import { snsLink } from "../../data/footer"

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <span>본 사이트는 학습용으로 제작되었습니다. 어떠한 상업적 용도로도 사용을 불허합니다. </span>
            <div className='footer__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </footer>
    )
}

export default Footer
