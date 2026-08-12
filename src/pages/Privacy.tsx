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
              Última atualização: 12 de agosto de 2026
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
                móvel de produtividade e devocional diário: ele ajuda você a
                proteger seu tempo com sessões de foco e bloqueio de apps,
                perseverar num ritual diário de leitura e caminhar junto de um
                grupo. Parte do conteúdo trata de superação de hábitos, e por
                isso levamos a proteção dos seus dados com extrema seriedade.
                Esta Política de Privacidade descreve como coletamos, usamos,
                armazenamos e protegemos suas informações pessoais, em
                conformidade com a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)</strong>{" "}
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
                <li>Nome de exibição (ou apelido) e e-mail (ao criar conta)</li>
                <li>Respostas do questionário inicial de personalização (metas e hábitos)</li>
                <li>Metas pessoais que você escrever no aplicativo</li>
                <li>Participação em grupos (criação, entrada e saída por código de convite)</li>
                <li>Configurações de preferências e notificações</li>
              </ul>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.2 Dados coletados automaticamente
              </h3>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Progresso do devocional (dias lidos), sequência e recorde</li>
                <li>Protocolos ativos e passos do dia (para continuidade entre aparelhos)</li>
                <li>Sessões de foco concluídas (duração em minutos)</li>
                <li>Dados de uso do aplicativo (telas visitadas, ações realizadas)</li>
                <li>Informações do dispositivo (modelo, sistema operacional, idioma)</li>
                <li>Logs de erro para melhoria do aplicativo</li>
              </ul>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.3 Dados que ficam somente no seu aparelho
              </h3>
              <p className="text-light-slate leading-relaxed">
                Alguns dados nunca saem do seu dispositivo: o contato de
                emergência do SOS (nome e telefone que você digita), os apps e
                categorias escolhidos no Escudo de foco e os horários de
                bloqueio programados. Nada disso é enviado aos nossos
                servidores.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.4 Tempo de Uso (Screen Time da Apple)
              </h3>
              <p className="text-light-slate leading-relaxed">
                O Escudo de foco usa os controles de Tempo de Uso do iOS
                (Family Controls), mediante a sua autorização explícita. A
                escolha do que bloquear acontece no seletor do próprio sistema:
                o aplicativo recebe apenas a quantidade de itens escolhidos,
                nunca os nomes dos apps. O bloqueio é aplicado localmente pelo
                iOS, e você pode revogar a permissão a qualquer momento nos
                Ajustes do aparelho.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.5 O que os membros do seu grupo veem
              </h3>
              <p className="text-light-slate leading-relaxed">
                Ao entrar num grupo, os demais membros passam a ver o seu nome
                de exibição, se você fez o devocional de hoje, a sua sequência
                atual e o seu recorde. Nada além disso é compartilhado: os
                grupos não têm chat, publicações nem mensagens, e seus
                protocolos, metas e sessões de foco nunca são visíveis a
                outras pessoas.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                2.6 Dados de pagamento
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
                <li>Enviar notificações push (com seu consentimento)</li>
                <li>Analisar padrões de uso para melhoria do produto</li>
                <li>Monitorar e corrigir erros técnicos</li>
                <li>Gerenciar sua assinatura e o conteúdo do plano Pro</li>
                <li>Mostrar seu progresso ao seu grupo (nome, devocional de hoje, sequência e recorde)</li>
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
                  <strong>Consentimento</strong>: para coleta de dados do
                  questionário, envio de notificações e uso de cookies de
                  publicidade e medição no site institucional
                </li>
                <li>
                  <strong>Execução de contrato</strong>: para fornecer o serviço
                  conforme os Termos de Uso, incluindo os grupos e a exibição do
                  seu progresso aos membros do seu grupo
                </li>
                <li>
                  <strong>Legítimo interesse</strong>: para analytics agregados,
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
                Compartilhamos dados apenas com prestadores de serviço
                estritamente necessários para a operação do aplicativo,
                incluindo:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>Provedores de hospedagem e infraestrutura em nuvem</li>
                <li>Processadores de pagamento e gestão de assinaturas</li>
                <li>Serviços de notificações push</li>
                <li>Ferramentas de analytics de produto</li>
                <li>Serviços de monitoramento de erros e estabilidade</li>
                <li>
                  Plataformas de publicidade e mensuração de campanhas (ex.:
                  Meta, dona do Facebook e do Instagram), utilizadas apenas neste site
                  institucional
                </li>
              </ul>
              <p className="text-light-slate leading-relaxed mt-3 text-sm">
                Esses prestadores são contratualmente obrigados a proteger seus
                dados pessoais e processá-los apenas para as finalidades
                autorizadas. Cada um possui políticas de privacidade próprias.
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
                <li>Controles de acesso e isolamento de dados por usuário</li>
                <li>Armazenamento seguro de credenciais e tokens</li>
                <li>Infraestrutura em nuvem segura com monitoramento contínuo</li>
                <li>Medidas de prevenção contra abuso e acesso não autorizado</li>
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
                  <strong>Solicitar exclusão de conta</strong>: disponível
                  diretamente no aplicativo (Perfil → Privacidade e dados →
                  Excluir conta)
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
                O LivreMente é indicado para maiores de 13 anos, em linha com a
                classificação do aplicativo na App Store (alguns programas
                tratam de superação de hábitos com temas maduros de forma leve
                e ocasional). Não coletamos intencionalmente dados de menores
                de 13 anos. Caso identifiquemos tal coleta, os dados serão
                excluídos imediatamente.
              </p>
            </div>

            {/* 11. Cookies */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                11. Cookies e Tecnologias Semelhantes
              </h2>
              <p className="text-light-slate leading-relaxed">
                O aplicativo móvel não utiliza cookies. Este site institucional
                (livrementeapp.com) utiliza cookies e tecnologias semelhantes
                para funcionamento, métricas de uso e publicidade. Em especial,
                utilizamos o <strong>Meta Pixel</strong> (Meta Platforms, Inc.,
                dona do Facebook e do Instagram) para medir a eficácia das nossas campanhas
                de anúncios, registrando ações como o acesso a páginas, cliques
                no botão de download e cadastros na lista de espera. Esses dados
                são compartilhados com a Meta e tratados conforme a Política de
                Dados da Meta. O Meta Pixel só é ativado{" "}
                <strong>após o seu consentimento</strong>, manifestado no banner
                de cookies exibido na primeira visita. Você pode conceder,
                recusar ou revogar esse consentimento a qualquer momento pelo
                link <em>"Preferências de cookies"</em> no rodapé do site, além
                de gerenciar suas preferências de anúncios nas configurações da
                sua conta do Facebook ou Instagram. O Meta Pixel é utilizado
                apenas neste site e <strong>não</strong> está presente no
                aplicativo móvel.
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
