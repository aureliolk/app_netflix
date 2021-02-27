import '../assets/footer.css'

export function Footer() {
    return (
        <div className="footer">
            <div className="space" />
            <h4> App Clone NetFlix {'=>'} Contato para serviços ? Ligue <span className='contato'> 73 99112-1575 </span></h4>
            <div className="footer_group_list">
                <ul>
                    <li>Pergunta Frequentes</li>
                    <li>Formas de Assitir</li>
                    <li>Iformações Corporativas</li>
                    <li>Originais NetFlix</li>
                </ul>
                <ul>
                    <li>Centro de Ajuda</li>
                    <li>Carreiras</li>
                    <li>Termo de Uso</li>
                    <li>Entre em Contato</li>
                </ul>
                <ul>
                    <li>Conta</li>
                    <li>Resgatar Cartão</li>
                    <li>Privacidade</li>
                    <li>Teste de Velocidade</li>
                </ul>
                <ul>
                    <li>Imprensa</li>
                    <li>Compra Cartão</li>
                    <li>Preferências de Cookies</li>
                    <li>Avisos Legais</li>
                </ul>
            </div>
            <div className="space" />
            <p className='footer_description'>Projeto clone do site netflix para fins didaticos</p>
            <p className='footer_description'> Link do <a href="https://github.com/aureliolk/app_netflix.git">Repositorio Git</a> Link para <a href="https://www.linkedin.com/in/aureliolk/"> Meu Likedin</a> Contato: <a href='https://api.whatsapp.com/send?phone=5573991121575&text=Or%C3%A7%C3%A3mento%20para%20servi%C3%A7os'> 73991121575</a>
            </p>
        </div>
    )
}