import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './NotFoundPage.module.css'
import erro404 from 'assets/imagens/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {

    const navegar = useNavigate()

  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
            <p className={styles.paragrado}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrado}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
            </div>

            <img src={erro404} alt='Cachorro de Óculos' className={styles.imagemCachorro}/>
        </div>
        <div className={styles.espacoEmBranco}></div>
    </>
  )
}
