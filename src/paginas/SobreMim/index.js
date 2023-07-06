import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/imagens/sobre_mim_capa.png'
import fotoSobreMim from 'assets/imagens/sobre_mim_foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou a Jessica!</h3>

            <img src={fotoSobreMim} alt="Foto minha" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nibh lectus, et consequat ante pellentesque nec. Quisque id ligula bibendum, pulvinar tellus eget, rutrum risus. Aliquam molestie dictum metus a dictum. Proin scelerisque erat diam, eget consectetur metus venenatis in. Aenean hendrerit sollicitudin est ac faucibus. Integer sed justo mattis, aliquet lectus molestie, rutrum turpis. Pellentesque at semper mauris, non egestas ex. Ut mi erat, faucibus a pretium eu, tincidunt nec eros. Nullam ut mollis nunc. Pellentesque fermentum nisi nibh, sit amet auctor nunc sagittis eget. Proin sit amet justo viverra, maximus purus at, facilisis odio.
            </p>

            <p className={styles.paragrafo}>
                In in enim ultricies, rhoncus risus nec, commodo leo. Sed aliquam sed erat a vestibulum. Vivamus nunc arcu, vulputate ut ornare a, lacinia et nulla. Morbi ac turpis ut nunc suscipit blandit. Phasellus a ligula nibh. Quisque et ligula in arcu rutrum aliquet non sed nibh. Nulla nec metus vitae tortor viverra dictum. Cras risus massa, ultrices et varius ornare, suscipit quis mauris.
            </p>

            <p className={styles.paragrafo}>
                Aenean vitae euismod nisl. Fusce feugiat nulla quis magna egestas aliquet. Donec eget massa non turpis tempor aliquam. Vivamus ut vulputate velit, sit amet consequat velit. Quisque feugiat cursus magna vulputate pulvinar. Integer non velit facilisis, viverra leo sit amet, imperdiet justo. Aliquam erat volutpat. Morbi vitae feugiat quam. Curabitur ullamcorper ex non ipsum tempor, id sodales nunc congue. Nulla ex dolor, ornare iaculis lacinia et, mattis et justo. Morbi a justo a nisl rhoncus convallis. Cras at arcu at ex aliquam ultricies pharetra ac neque.
            </p>

            <p className={styles.paragrafo}>
                Sed semper sapien vel libero consequat, in pretium leo iaculis. Integer eget posuere purus. Etiam non massa aliquet, ornare elit venenatis, tincidunt eros. Donec mauris sapien, pulvinar dapibus sem sit amet, mattis egestas turpis. Mauris a pellentesque nisi. Duis condimentum tellus sit amet dolor lacinia luctus. Morbi posuere massa et faucibus aliquam. Vivamus eget convallis velit. Nulla porta scelerisque est. Fusce feugiat ipsum molestie, venenatis ex a, porttitor tortor.
            </p>

            <p className={styles.paragrafo}>
                Quisque tincidunt nisi eget scelerisque consequat. Praesent porttitor turpis metus, non rutrum tellus sagittis quis. Morbi interdum finibus semper. Aliquam lobortis augue tortor, eu venenatis velit consequat auctor. Donec elementum dolor quis augue fringilla auctor. Cras ut metus tincidunt, luctus tellus fermentum, maximus turpis. Vivamus finibus euismod velit nec pretium. Nulla sit amet vehicula nunc, non pellentesque justo. Phasellus semper, neque vel sollicitudin tempus, erat orci pulvinar dui, ac scelerisque nisl tortor eget augue. Maecenas luctus, quam ac posuere condimentum, urna justo feugiat nisl, et gravida ipsum risus eget augue.
            </p>
        </PostModelo>
    )
}