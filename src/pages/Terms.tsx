import { motion } from "framer-motion";

export default function Terms() {
  return (
    <main className="pt-24 pb-16">
      <section className="w-full flex flex-col items-center px-4 md:px-8">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            <p className="text-light-slate text-sm">
              Última atualização: 30 de março de 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 lg:p-12 space-y-8"
          >
            {/* 1. Aceitação */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                1. Aceitação dos Termos
              </h2>
              <p className="text-light-slate leading-relaxed">
                Ao baixar, instalar ou utilizar o aplicativo LivreMente ("App"),
                você concorda com estes Termos de Uso. Se não concordar com
                qualquer item, não utilize o App. O uso continuado após
                alterações constitui aceitação dos novos termos.
              </p>
            </div>

            {/* 2. Descrição */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                2. Descrição do Serviço
              </h2>
              <p className="text-light-slate leading-relaxed">
                O LivreMente é um aplicativo de saúde mental que oferece
                ferramentas para foco, quebra de hábitos prejudiciais e bem-estar
                emocional, incluindo:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2 mt-2">
                <li>Rastreamento de progresso com streaks e gamificação</li>
                <li>Conteúdo devocional e educacional</li>
                <li>Comunidade moderada para suporte mútuo</li>
                <li>Diário pessoal</li>
                <li>Exercícios de bem-estar</li>
                <li>Sistema de amizades e grupos</li>
              </ul>
              <div className="mt-4 rounded-xl bg-alert-red/10 border border-alert-red/20 p-4">
                <p className="text-sm text-light-slate">
                  <strong className="text-alert-red">Importante:</strong> O
                  LivreMente <strong>não é</strong> um substituto para
                  tratamento médico, psicológico ou psiquiátrico profissional. Em
                  caso de emergência, procure o{" "}
                  <strong>CVV (188)</strong> ou o SAMU (192).
                </p>
              </div>
            </div>

            {/* 3. Conta */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                3. Conta do Usuário
              </h2>
              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                3.1 Criação de conta
              </h3>
              <p className="text-light-slate leading-relaxed">
                Você pode utilizar o App de forma anônima ou criar uma conta com
                e-mail e senha. Ao criar conta, você é responsável por manter a
                confidencialidade de suas credenciais.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                3.2 Idade mínima
              </h3>
              <p className="text-light-slate leading-relaxed">
                O App é destinado a maiores de <strong>13 anos</strong>. Usuários
                entre 13 e 17 anos devem ter autorização de um responsável legal.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                3.3 Exclusão de conta
              </h3>
              <p className="text-light-slate leading-relaxed">
                Você pode solicitar a exclusão da sua conta a qualquer momento
                pelo App (Perfil → Configurações → Excluir Conta). A exclusão é
                processada em até <strong>30 dias</strong>. Após esse período,
                seus dados pessoais são permanentemente removidos.
              </p>
            </div>

            {/* 4. Uso aceitável */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                4. Uso Aceitável
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                Ao utilizar o App, você concorda em <strong>não</strong>:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Publicar conteúdo ilegal, abusivo, difamatório ou pornográfico</li>
                <li>Assediar, intimidar ou discriminar outros usuários</li>
                <li>Enviar spam, publicidade não autorizada ou phishing</li>
                <li>Tentar acessar contas de outros usuários</li>
                <li>Usar o App para fins incompatíveis com sua finalidade</li>
                <li>Fazer engenharia reversa ou tentar extrair o código-fonte</li>
                <li>Burlar mecanismos de segurança, rate limiting ou moderação</li>
              </ul>
              <p className="text-light-slate leading-relaxed mt-3">
                O descumprimento pode resultar em suspensão ou exclusão
                permanente da conta, a critério do LivreMente.
              </p>
            </div>

            {/* 5. Comunidade */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                5. Comunidade e Conteúdo do Usuário
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                O App possui funcionalidades de comunidade onde você pode
                publicar conteúdo, enviar mensagens e interagir com outros
                usuários.
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>
                  Você é responsável por todo conteúdo que publicar
                </li>
                <li>
                  Ao publicar, você concede ao LivreMente uma licença não exclusiva
                  para exibir esse conteúdo dentro do App
                </li>
                <li>
                  Você pode excluir seu conteúdo a qualquer momento
                </li>
                <li>
                  Nos reservamos o direito de remover conteúdo que viole estes
                  Termos ou nossas políticas de comunidade
                </li>
                <li>
                  Você pode bloquear outros usuários quando desejar
                </li>
                <li>
                  Você pode reportar conteúdo inadequado diretamente no App
                </li>
              </ul>
            </div>

            {/* 6. Premium */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                6. Assinatura Premium
              </h2>
              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.1 Planos e pagamento
              </h3>
              <p className="text-light-slate leading-relaxed">
                O App oferece funcionalidades gratuitas e premium. As assinaturas
                são processadas pela Apple App Store ou Google Play Store,
                conforme a plataforma utilizada. Os preços são exibidos na moeda
                local antes da confirmação da compra.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.2 Renovação automática
              </h3>
              <p className="text-light-slate leading-relaxed">
                As assinaturas são renovadas automaticamente ao final de cada
                período, salvo cancelamento pelo menos 24 horas antes do término
                do período vigente.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.3 Cancelamento
              </h3>
              <p className="text-light-slate leading-relaxed">
                Cancelamentos devem ser feitos nas configurações da App Store ou
                Google Play Store. Não processamos cancelamentos diretamente. Após
                o cancelamento, você mantém acesso até o final do período pago.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.4 Reembolso
              </h3>
              <p className="text-light-slate leading-relaxed">
                Reembolsos seguem as políticas da Apple e do Google. Solicite
                diretamente pela loja onde realizou a compra.
              </p>
            </div>

            {/* 7. Propriedade intelectual */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                7. Propriedade Intelectual
              </h2>
              <p className="text-light-slate leading-relaxed">
                Todo o conteúdo do App — incluindo textos, ilustrações, ícones,
                design, código-fonte e marca — é propriedade do LivreMente e
                protegido por leis de propriedade intelectual. É proibida a
                reprodução, distribuição ou uso comercial sem autorização prévia
                e por escrito.
              </p>
            </div>

            {/* 8. Isenção */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                8. Isenção de Responsabilidade
              </h2>
              <p className="text-light-slate leading-relaxed">
                O App é fornecido "como está" (<em>as is</em>). Não garantimos que
                o serviço será ininterrupto ou livre de erros. O LivreMente não
                se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2 mt-2">
                <li>Decisões tomadas com base no conteúdo do App</li>
                <li>Interações entre usuários na comunidade</li>
                <li>Perdas de dados causadas por falhas técnicas</li>
                <li>Indisponibilidades temporárias do serviço</li>
              </ul>
            </div>

            {/* 9. Modificações */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                9. Modificações nos Termos
              </h2>
              <p className="text-light-slate leading-relaxed">
                Podemos alterar estes Termos periodicamente. Alterações
                significativas serão comunicadas com antecedência pelo App. O uso
                continuado do serviço após as alterações constitui aceitação dos
                novos termos.
              </p>
            </div>

            {/* 10. Legislação */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                10. Legislação Aplicável
              </h2>
              <p className="text-light-slate leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o foro da Comarca de domicílio do usuário
                para dirimir qualquer controvérsia, conforme o Código de Defesa
                do Consumidor.
              </p>
            </div>

            {/* 11. Contato */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                11. Contato
              </h2>
              <p className="text-light-slate leading-relaxed">
                Para dúvidas ou solicitações sobre estes Termos, entre em
                contato:
              </p>
              <div className="mt-3 glass rounded-xl p-4 text-sm text-light-slate space-y-1">
                <p>
                  <strong className="text-surface">E-mail:</strong>{" "}
                  <a
                    href="mailto:contato@livrementeapp.com"
                    className="text-teal hover:underline"
                  >
                    contato@livrementeapp.com
                  </a>
                </p>
                <p>
                  <strong className="text-surface">Site:</strong>{" "}
                  <a
                    href="https://livrementeapp.com"
                    className="text-teal hover:underline"
                  >
                    livrementeapp.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
