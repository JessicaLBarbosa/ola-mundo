Ao colocar index em vez de path indica que a rota tem o mesmo caminho da rota pai.
Tirando a / das outras rotas indicam que o caminho delas é relativo ao da rota pai.

Versão normal
<Routes>
    <Route path="/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
    </Route>
    <Route path="*" element={<div>Página não encontrada</div>} />
</Routes>

Versão com index
<Routes>
    <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
    </Route>
    <Route path="*" element={<div>Página não encontrada</div>} />
</Routes>



Ao usar 1, ele volta para a página anterior a da não encontrada
<div className={styles.botaoContainer} onClick={() => navegar(-1)}>
    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
</div>