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
              Última atualização: 12 de agosto de 2026
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
                O LivreMente é um aplicativo de produtividade e devocional
                diário, incluindo:
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2 mt-2">
                <li>Devocional diário com sequência de dias e conquistas</li>
                <li>Sessões de foco de 25 ou 50 minutos</li>
                <li>Grupos para acompanhar a perseverança uns dos outros</li>
                <li>Escudo de foco: bloqueio de apps e sites escolhidos (plano Pro)</li>
                <li>Protocolos: programas diários de superação de hábitos (plano Pro)</li>
                <li>Metas pessoais do dia e SOS com respiração guiada</li>
              </ul>
              <p className="text-light-slate leading-relaxed mt-3">
                O Escudo de foco depende de permissões do sistema (Tempo de Uso
                do iOS) e bloqueia o que o sistema permite bloquear. Sites são
                filtrados por listas e pelo filtro de conteúdo do próprio
                sistema, sem garantia de cobertura total.
              </p>
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
                O App requer uma conta (e-mail e senha) para guardar o seu
                progresso e permitir os grupos. Você é responsável por manter a
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
                pelo App (Perfil → Privacidade e dados → Excluir conta). A
                exclusão é processada em até <strong>30 dias</strong>. Após esse
                período, seus dados pessoais são permanentemente removidos. Se
                você criou um grupo, ele deixa de existir junto com a sua conta.
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
                <li>Usar nome de exibição ilegal, abusivo, difamatório ou ofensivo</li>
                <li>Assediar, intimidar ou discriminar membros do seu grupo</li>
                <li>Tentar acessar contas de outros usuários</li>
                <li>Usar o App para fins incompatíveis com sua finalidade</li>
                <li>Fazer engenharia reversa ou tentar extrair o código-fonte</li>
                <li>Burlar mecanismos de segurança ou limites de uso</li>
              </ul>
              <p className="text-light-slate leading-relaxed mt-3">
                O descumprimento pode resultar em suspensão ou exclusão
                permanente da conta, a critério do LivreMente.
              </p>
            </div>

            {/* 5. Grupos */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                5. Grupos
              </h2>
              <p className="text-light-slate leading-relaxed mb-3">
                O App permite criar e participar de grupos por código de
                convite. Os grupos não têm chat, publicações nem mensagens.
              </p>
              <ul className="list-disc list-inside text-light-slate space-y-1 ml-2">
                <li>
                  Quem cria o grupo escolhe o número de lugares; acima de 20, é
                  preciso ter o plano Pro (apenas quem cria; quem entra não paga)
                </li>
                <li>
                  Ao participar, os membros do grupo veem o seu nome de exibição,
                  se você fez o devocional de hoje, a sua sequência e o seu
                  recorde
                </li>
                <li>
                  Você pode sair de um grupo a qualquer momento
                </li>
                <li>
                  O grupo deixa de existir se a conta de quem o criou for
                  excluída
                </li>
                <li>
                  Nos reservamos o direito de remover grupos ou nomes de exibição
                  que violem estes Termos
                </li>
              </ul>
            </div>

            {/* 6. Premium */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                6. Assinatura Pro
              </h2>
              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.1 Planos e pagamento
              </h3>
              <p className="text-light-slate leading-relaxed">
                O App oferece funcionalidades gratuitas (devocional, sessões de
                foco, grupos, sequência, metas e SOS) e funcionalidades do plano
                Pro (Escudo de foco, Protocolos e grupos com mais de 20
                lugares). As assinaturas, mensal ou anual, são processadas pela
                Apple App Store. Os preços são exibidos na moeda local antes da
                confirmação da compra.
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
                Cancelamentos devem ser feitos nas configurações da App Store. Não processamos cancelamentos diretamente. Após
                o cancelamento, você mantém acesso até o final do período pago.
              </p>

              <h3 className="text-base font-semibold text-surface mt-4 mb-2">
                6.4 Reembolso
              </h3>
              <p className="text-light-slate leading-relaxed">
                Reembolsos seguem as políticas da Apple. Solicite
                diretamente pela App Store.
              </p>
            </div>

            {/* 7. Propriedade intelectual */}
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                7. Propriedade Intelectual
              </h2>
              <p className="text-light-slate leading-relaxed">
                Todo o conteúdo do App, incluindo textos, ilustrações, ícones,
                design, código-fonte e marca, é propriedade do LivreMente e
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
                <li>Interações entre membros de um grupo fora do App</li>
                <li>Conteúdo acessado apesar do bloqueio (o Escudo não garante cobertura total)</li>
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
