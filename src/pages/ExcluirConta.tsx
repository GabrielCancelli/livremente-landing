import { motion } from "framer-motion";

/**
 * Página exigida pelo formulário Data Safety da Google Play: uma URL pública
 * onde o usuário descobre como excluir a conta e os dados, sem precisar
 * reinstalar o app. O caminho principal é o fluxo dentro do próprio app;
 * o e-mail é a via de quem já não tem o app instalado.
 */
export default function ExcluirConta() {
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
              Sua conta
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
              Excluir a sua <span className="gradient-text">conta</span>
            </h1>
            <p className="text-light-slate text-sm">
              Vale para o LivreMente no iPhone e no Android.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 lg:p-12 space-y-8"
          >
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                Pelo próprio aplicativo (imediato)
              </h2>
              <p className="text-light-slate leading-relaxed">
                Abra o LivreMente e vá em <strong>Perfil</strong>, toque na
                engrenagem, depois em <strong>Conta e login</strong> e escolha{" "}
                <strong>Excluir conta</strong>. A exclusão apaga a sua conta e
                os dados associados a ela: perfil, respostas do questionário,
                progresso do devocional e da sequência, protocolos, registros
                de gatilho, check-ins, metas e participação em grupos. Grupos
                criados por você deixam de existir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                Sem o aplicativo instalado
              </h2>
              <p className="text-light-slate leading-relaxed">
                Envie um e-mail para{" "}
                <a
                  href="mailto:contato@livrementeapp.com?subject=Exclus%C3%A3o%20de%20conta"
                  className="text-teal underline underline-offset-4"
                >
                  contato@livrementeapp.com
                </a>{" "}
                com o assunto <strong>Exclusão de conta</strong>, a partir do
                mesmo e-mail cadastrado na conta. Confirmamos a solicitação e
                concluímos a exclusão em até 30 dias.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                O que é excluído e o que pode ser retido
              </h2>
              <p className="text-light-slate leading-relaxed">
                Todos os dados pessoais listados acima são removidos em até 30
                dias após a solicitação. Registros técnicos anonimizados (logs
                de erro sem identificação) e comprovantes fiscais de compras,
                quando a lei exige a guarda, podem ser retidos pelo prazo
                legal. A assinatura, se houver, deve ser cancelada por você na
                App Store ou no Google Play: excluir a conta não cancela a
                cobrança da loja.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-teal mb-3">
                Dados que nunca saíram do seu aparelho
              </h2>
              <p className="text-light-slate leading-relaxed">
                O contato de emergência do SOS e o texto livre dos registros de
                gatilho ficam somente no seu dispositivo e desaparecem quando o
                aplicativo é desinstalado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
