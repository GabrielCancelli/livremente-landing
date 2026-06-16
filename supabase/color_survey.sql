-- ============================================================
-- Pesquisa de cor — landing /cores
-- Rodar no SQL Editor do MESMO projeto Supabase da landing
-- (onde já vive a tabela `waitlist`).
--
-- Legenda das paletas (valor guardado em pick_*):
--   A = Laranja (coral + creme)
--   B = Azul    (azul + frio)
--   D = Ciano   (seafoam + dourado)
-- ============================================================

create table if not exists public.color_survey (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  session_id       uuid,
  pick_boasvindas  text check (pick_boasvindas in ('A','B','D')),
  pick_home        text check (pick_home in ('A','B','D')),
  pick_grupos      text check (pick_grupos in ('A','B','D')),
  pick_geral       text check (pick_geral in ('A','B','D')),
  faixa_etaria     text,
  genero           text,
  comentario       text,
  contato          text,  -- nome ou e-mail opcional (contato/sorteio)
  marketing_source text,
  user_agent       text
);

alter table public.color_survey enable row level security;

-- Público (anon) só pode INSERIR. Ninguém público pode LER (sem policy de select).
-- Você lê os resultados pelo dashboard / service_role.
drop policy if exists "anon insert color_survey" on public.color_survey;
create policy "anon insert color_survey"
  on public.color_survey
  for insert
  to anon
  with check (true);


-- ============================================================
-- QUERIES DE RESULTADO (rodar quando tiver respostas)
-- ============================================================

-- 1) Desempate geral (a pergunta que decide)
-- select pick_geral as cor, count(*) as votos,
--        round(100.0 * count(*) / sum(count(*)) over (), 1) as pct
-- from public.color_survey
-- where pick_geral is not null
-- group by pick_geral order by votos desc;

-- 2) Voto por tela (long format)
-- select tela, cor, count(*) as votos from (
--   select 'boasvindas' tela, pick_boasvindas cor from public.color_survey
--   union all select 'home',   pick_home   from public.color_survey
--   union all select 'grupos', pick_grupos from public.color_survey
-- ) t where cor is not null group by tela, cor order by tela, votos desc;

-- 3) Por canal de aquisição (marketing_source vindo da URL ?src=)
-- select coalesce(marketing_source,'(direto)') as canal, count(*) as respostas
-- from public.color_survey group by 1 order by 2 desc;
