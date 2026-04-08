import { motion } from "framer-motion";

export default function Privacy() {
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
              Política de <span className="gradient-text">Privacidade</span>
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
            {/* 1. Introdução */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                1. Introdução
              </h2>
              <p className="text-light-slate leading-relaxed">
                O LivreMente ("nós", "nosso" ou "aplicativo") é um aplicativo
                móvel de saúde mental focado em ajudar usuários no processo de
                libertação do vício em pornografia, por meio de ferramentas
                inteligentes, comunidade de apoio, acompanhamento com IA e
                gamificação. Devido à natureza sensível do tema tratado, levamos
                a proteção dos seus dados com extrema seriedade. Esta Política
                de Privacidade descreve como coletamos, usamos, armazenamos e
                protegemos suas informações pessoais, em conformidade com a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>{" "}
                e demais legislações aplicáveis.
              </p>
            </div>

            {/* 2. Dados que coletamos */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                2. Dados que Coletamos
              </h2>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.1 Dados fornecidos por você
              </h3>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Nome de exibição (ou apelido), idade e e-mail (ao criar conta)</li>
                <li>Respostas do questionário de autoavaliação de dependência (opcional)</li>
                <li>Publicações e mensagens na comunidade de apoio</li>
                <li>Mensagens diretas entre usuários</li>
                <li>Conversas com o assistente de IA (Konsel)</li>
                <li>Registros de diário pessoal e check-ins de humor</li>
                <li>Registros de tentações (urges) e recaídas</li>
                <li>Configurações de preferências e notificações</li>
              </ul>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.2 Dados coletados automaticamente
              </h3>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Dados de uso do aplicativo (telas visitadas, ações realizadas)</li>
                <li>Informações do dispositivo (modelo, sistema operacional, idioma)</li>
                <li>Dados de streak e progresso (dias consecutivos, conquistas)</li>
                <li>Logs de erro para melhoria do aplicativo</li>
              </ul>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.3 Dados de pagamento
              </h3>
              <p className="text-light-slate leading-relaxed">
                As compras in-app são processadas pela Apple App Store e Google
                Play Store. <strong>Nós não temos acesso</strong> ao número do
                seu cartão de crédito ou dados financeiros. O gerenciamento de
                assinaturas é feito via RevenueCat, que recebe apenas um
                identificador anônimo para validar entitlements.
              </p>
            </div>

            {/* 3. Como usamos */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                3. Como Usamos seus Dados
              </h2>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Fornecer e melhorar as funcionalidades do aplicativo</li>
                <li>Personalizar sua experiência (conteúdo, lembretes)</li>
                <li>Enviar notificações push (com seu consentimento via OneSignal)</li>
                <li>Analisar padrões de uso para melhoria do produto (Amplitude)</li>
                <li>Monitorar e corrigir erros técnicos (Sentry)</li>
                <li>Gerenciar sua assinatura e conteúdo premium (RevenueCat)</li>
                <li>Moderar conteúdo da comunidade para segurança dos usuários</li>
              </ul>
            </div>

            {/* 4. Base legal */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                4. Base Legal (LGPD)
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                O tratamento dos seus dados pessoais é realizado com base nas
                seguintes hipóteses legais previstas na LGPD:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>
                  <strong>Consentimento</strong> — para coleta de dados do
                  questionário, envio de notificações e participação na comunidade
                </li>
                <li>
                  <strong>Execução de contrato</strong> — para fornecer o serviço
                  conforme os Termos de Uso
                </li>
                <li>
                  <strong>Legítimo interesse</strong> — para analytics agregados,
                  melhoria do produto e detecção de fraude
                </li>
              </ul>
            </div>

            {/* 5. Compartilhamento */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                5. Compartilhamento de Dados
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                Nós <strong>não vendemos</strong> seus dados pessoais.
                Compartilhamos dados apenas com os seguintes prestadores de
                serviço, estritamente para a operação do aplicativo:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-light-slate">
                  <thead>
                    <tr className="border-b border-glass-border text-left">
                      <th className="py-2 pr-4 text-surface font-semibold">Serviço</th>
                      <th className="py-2 pr-4 text-surface font-semibold">Finalidade</th>
                      <th className="py-2 text-surface font-semibold">País</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-glass-border">
                    <tr>
                      <td className="py-2 pr-4">Supabase</td>
                      <td className="py-2 pr-4">Banco de dados, autenticação</td>
                      <td className="py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">RevenueCat</td>
                      <td className="py-2 pr-4">Gestão de assinaturas</td>
                      <td className="py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">OneSignal</td>
                      <td className="py-2 pr-4">Notificações push</td>
                      <td className="py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Amplitude</td>
                      <td className="py-2 pr-4">Analytics de produto</td>
                      <td className="py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Sentry</td>
                      <td className="py-2 pr-4">Monitoramento de erros</td>
                      <td className="py-2">EUA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-light-slate leading-relaxed mt-3 text-sm">
                Todos os prestadores listados possuem políticas de privacidade
                próprias e operam sob cláusulas contratuais de proteção de dados.
              </p>
            </div>

            {/* 6. Transferência internacional */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                6. Transferência Internacional de Dados
              </h2>
              <p className="text-light-slate leading-relaxed">
                Seus dados podem ser processados em servidores localizados nos
                Estados Unidos pelos prestadores listados acima. Essa
                transferência é realizada conforme o art. 33 da LGPD, com base em
                cláusulas contratuais padrão e na adoção de medidas técnicas de
                segurança adequadas.
              </p>
            </div>

            {/* 7. Segurança */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                7. Segurança dos Dados
              </h2>
              <p className="text-light-slate leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger seus
                dados, incluindo:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2 mt-2">
                <li>Criptografia em trânsito (TLS/HTTPS)</li>
                <li>Row-Level Security (RLS) no banco de dados</li>
                <li>Armazenamento seguro de tokens de autenticação</li>
                <li>Rate limiting para prevenção de abuso</li>
                <li>Proteção contra senhas vazadas no fluxo de autenticação</li>
              </ul>
            </div>

            {/* 8. Retenção */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                8. Retenção de Dados
              </h2>
              <p className="text-light-slate leading-relaxed">
                Seus dados pessoais são mantidos enquanto sua conta estiver ativa.
                Ao solicitar a exclusão da conta, seus dados pessoais serão
                removidos em até <strong>30 dias</strong>. Dados anonimizados e
                agregados podem ser mantidos para fins estatísticos.
              </p>
            </div>

            {/* 9. Seus direitos */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                9. Seus Direitos (LGPD)
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                Conforme a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>
                  <strong>Solicitar exclusão de conta</strong> — disponível
                  diretamente no aplicativo (Perfil → Configurações → Excluir Conta)
                </li>
              </ul>
              <p className="text-light-slate leading-relaxed mt-3">
                Para exercer qualquer direito, entre em contato pelo e-mail:{" "}
                <a
                  href="mailto:contato@livrementeapp.com"
                  className="text-teal hover:underline"
                >
                  contato@livrementeapp.com
                </a>
              </p>
            </div>

            {/* 10. Menores */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                10. Crianças e Adolescentes
              </h2>
              <p className="text-light-slate leading-relaxed">
                O LivreMente é classificado para maiores de 17 anos devido à
                natureza do conteúdo abordado (recuperação de vício em
                pornografia). Não coletamos intencionalmente dados de menores de
                17 anos. Caso identifiquemos tal coleta, os dados serão excluídos
                imediatamente.
              </p>
            </div>

            {/* 11. Cookies */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                11. Cookies e Tecnologias Semelhantes
              </h2>
              <p className="text-light-slate leading-relaxed">
                O aplicativo móvel não utiliza cookies. Este site institucional
                pode utilizar cookies essenciais para funcionamento e analytics.
                Nenhum cookie de terceiros é utilizado para publicidade.
              </p>
            </div>

            {/* 12. Alterações */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                12. Alterações nesta Política
              </h2>
              <p className="text-light-slate leading-relaxed">
                Podemos atualizar esta política periodicamente. Alterações
                significativas serão comunicadas por notificação no aplicativo ou
                e-mail. A data da última atualização será sempre indicada no topo
                desta página.
              </p>
            </div>

            {/* 13. Contato */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                13. Contato
              </h2>
              <p className="text-light-slate leading-relaxed">
                Para dúvidas, solicitações ou exercício de direitos relacionados
                à sua privacidade:
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
                  <strong className="text-surface">Aplicativo:</strong> LivreMente
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
