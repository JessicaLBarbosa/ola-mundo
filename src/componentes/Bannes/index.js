import styles from './Banner.module.css'
import circuloColorido from 'assets/imagens/circulo_colorido.png'
import minhaFoto from 'assets/imagens/minha_foto.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Jessica Barbosa, desenvolvedora FullStack. Aqui compartilho vários aprendizados.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Circulo Colorido'
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
  )
}
